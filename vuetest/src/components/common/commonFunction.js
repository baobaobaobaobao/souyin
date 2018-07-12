import $ from 'jquery'

/*引出我们的各个对象*/
export {
  strategies,
  Validator,
  EventUtil,
  Events,
  getSingle,
  EventTarget,
  serializeObject,
  createLoginLayer
}



/*注册表单校验，仅仅只是注册表单校验*/

//使用策略模式，我们这里首先封装策略方法。
var strategies = {
  isNonEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
};

/*接下来我们准备实现 Validator 类。Validator 类在这里作为 Context，负责接收用户的请求
并委托给 strategy 对象。*/
var Validator = function () {
  this.cache = [];
};
Validator.prototype.add = function (dom, rules) {
  var self = this;
  for (var i = 0, rule; rule = rules[i++];) {
    (function (rule) {
      var strategyAry = rule.strategy.split(':');
      var errorMsg = rule.errorMsg;
      self.cache.push(function () {
        var strategy = strategyAry.shift();

        strategyAry.unshift(dom.value);
        strategyAry.push(errorMsg);
        return strategies[strategy].apply(dom, strategyAry);
      });
    })(rule)
  }
};
Validator.prototype.start = function () {
  for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var errorMsg = validatorFunc();
    if (errorMsg) {
      return errorMsg;
    }
  }
};



/*事件处理工具类*/

/*这里放一些学习到的东西，首先加上事件工具类*/
var EventUtil = {
  /*添加事件处理等等*/
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },

  getEvent: function (event) {
    return event ? event : window.event;
  },
  /*拿到目标*/
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  /*阻止默认事件*/
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }

  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },

  /*获得键盘输入*/
  getCharCode: function (event) {
    if (typeof event.charCode == "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  },
  /*得到剪切板内容*/
  getClipboardText: function (event) {
    var clipboardData = (event.clipboardData || window.clipboardData);
    return clipboardData.getData("text");
  },

  /*设置剪切板内容*/
  setClipboardText: function (event, value) {
    if (event.clipboardData) {
      return event.clipboardData.setData("text/plain", value);
    } else if (window.clipboardData) {
      return window.clipboardData.setData("text", value);
    }
  }
};








/*封装表单序列化以及自定义事件*/
$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
}
/*自定义事件*/
function EventTarget() {

  this.handlers = {}; //事件的处理程序序列
}

EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function (type, handler) {
    if (typeof this.handlers[type] == "undefined") {

      this.handlers[type] = [];
    }
    this.handlers[type].push(handler);
  },
  //激发事件
  fire: function (event) {
    if (!event.target) {
      event.target = this;
    }
    if (this.handlers[event.type] instanceof Array) {
      var handlers = this.handlers[event.type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        handlers[i](event);
      }
    }
  },
  /*移除事件*/
  removeHandler: function (type, handler) {
    if (this.handlers[type] instanceof Array) {
      var handlers = this.handlers[type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        if (handlers[i] === handler) {
          break;
        }
      }
      handlers.splice(i, 1);

    }
  }
};

/*自定义事件以及使用*/
function handleMessage(event) {
  /*自定义事件处理程序*/
  console.log("Message received:" + event.message);
}
//创建一个新对象
var target = new EventTarget();

//添加一个事件处理程序
target.addHandler("message", handleMessage);
//触发事件
target.fire({
  type: "message",
  message: "hello world"
});
//删除事件处理程序
target.removeHandler("message", handleMessage);
//再次，应没有处理程序
target.fire({
  type: "message",
  message: "hello world"
});




/*单例实现各种东西，可以传入createScript和，createIFrame，createDIv等，类似于库函数*/
//             接下来将用于创建登录浮窗的方法用参数 fn 的形式传入 getSingle，我们不仅可以传入
// createLoginLayer，还能传入 createScript、createIframe、createXhr 等。之后再让 getSingle 返回
// 一个新的函数，并且用一个变量 result 来保存 fn 的计算结果。result 变量因为身在闭包中，它

// 永远不会被销毁。在将来的请求中，如果 result 已经被赋值，那么它将返回这个值。
//1通用实现单例
var getSingle = function (fn) {
  var result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  }
};

var createLoginLayer=function(){
  var div=document.createElement('div');
  div.innerHTML="登录失败";
  div.style.display="none";
  document.body.appendChild(div);
  return div;
}







/*订阅登录事件的通用实现。一旦登录成功就发布信息。*/

/*订阅事件的实现*/
var Events = (function () {
  var clientList = {},
    listen,
    trigger,
    remove;
  listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  };
  trigger = function () {
    var key = Array.prototype.shift.call(arguments),
      fns = clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  };
  remove = function (key, fn) {
    var fns = clientList[key];
    if (!fns) {
      return false;
    }

    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l];
        if (_fn === fn) {
          fns.splice(l, 1);
        }
      }
    }
  };
  return {
    listen: listen,
    trigger: trigger,
    remove: remove
  }
})();

   export {
     strategies,
     Validator,
     getLocalStorage
   }

   /***********************策略对象**************************/
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
   /***********************Validator 类**************************/
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


   /*兼容值支持globalStorage的浏览器，可以使用*/

   function getLocalStorage() {
     if (typeof localStorage == "object") {
       return localStorage;
     } else if (typeof globalStorage == "object") {
       return globalStorage[location.host];
     } else {
       throw new Error("Local storage not available.");
     }
   }

<template>
 <div id="login">
            <form   id="loginForm">
                        <input placeholder="username"  name="username"/>
                        <input placeholder="password"  name="password"/>
                        <input name="device" value="web"/>
                        <button    id="login_btn" type="button" v-on:click="logins">登录</button>
                 </form>
                 
        </div>
        
</template>
    <script>
import { Constants } from "../common/constants";
import { getLocalStorage } from "../common/loginCommon";
     var personMessage=function(user){
            this.username=user.username;
            this.password=user.password;
            this.id=user.id;
            this.nickname=user.nickname;
        }
        personMessage.prototype.getName=function(){
            alert(this.username);
        }
        personMessage.getInstance=function(user){
            if(!this.instance){
                this.instance=new personMessage(user);
            }
            return this.instance;
        }
    </script>
<script>
import $ from 'jquery'
import Vue from 'vue'
import {strategies,createLoginLayer,Validator,EventUtil,Events,getSingle,EventTarget,serializeObject } from '../../components/common/commonFunction.js'
import  { 
     getLocalStorage}  from '../../components/common/loginCommon.js'
import Constants from '../../components/common/constants.js'
import logoSrc from '../../assets/logo.png'
import logoSrcTemp from '../../assets/images/kan.jpg'



export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
 methods: {
          logins: function () {
                        var loginParams={username:'1234',password:'12345678',device:'web'}; //将表单序列化为JSON对象
                       //  { username: "1234", password: "12345678", device: "web" }
                       var _that=this;
                        $.ajax({
                            type: "POST",
                            dataType: "json",
                            url: "http://122.152.227.45:3000/sy/login",
                            data: loginParams,
                            success: function (data) {
                                //登录成功的话，存入唯一的单例
                                if(data.code===1){
                                   /*发布登录成功消息*/
                                     var storage=getLocalStorage(); 
                                      storage.uid=data.data.userInfo.id;  
                                     storage.setItem("users", JSON.stringify(data.data.userInfo)); //将登陆信息放入session中
                                   
                                    
                                    //这种方法用在vue中使不行的。vue假定所有节点都是存在的。需要引入没事
                                      proxyImage.setSrc( logoSrc ); 

                                }else{
                                     /*登录失败的弹窗，确定只有这一个弹窗。利用它实现单例*/
                                  var createSinLeLoginLayer=getSingle(createLoginLayer);//这里的参数还可以为创建各种东西等等。
                                   var loginLayer=createSinLeLoginLayer();
                                   loginLayer.style.display="block";
                                }
                              
                            },
                            error: function (datas) { 
                                console.log("wo" + JSON.stringify(datas));
                            }

                        });
                    },
                    /*创建唯一弹窗div*/
                   
                }
}




/*虚拟代理模式显示图片预加载*/

//这是创建img节点的对象。
var myImage = (function () {
    var imgNode = document.createElement('img');
     document.body.appendChild(imgNode);
    return {
        setSrcs: function (src) {
            imgNode.src = src;
        }
    }
})();

/*代理对象*/ 
var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        myImage.setSrcs(this.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrcs(logoSrcTemp);
            img.src = src;
        }
    }
})();
   //我们每次对图片虚拟加载的使用其实都是在使用这个代理对象
   //对image进行操作。这里放入的是比较大的需要加载的jpg
  //使用的话就使用这个就行了 proxyImage.setSrc('');



</script>




<style>

</style>

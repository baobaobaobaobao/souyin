<template>
    <div>
        <form id="registerForm">
            <input placeholder="username" name="username" />
            <input placeholder="password" name="password" />
            <button type="button" id="btn" v-on:click="registers">注册</button>
        </form>
    </div>
</template>

<script>
    import {
        strategies,
        Validator,
    } from "../common/loginCommon"
    import {EventUtil,Events,getSingle,EventTarget,serializeObject } from '../../components/common/commonFunction.js'
    import $ from 'jquery'
    export default {
        //组件私有数据（必须是function，而且要return对象类型）
        data() {
            return {
                title: '组件标题',
                firstName: '',
                lastName: '',
            }
        },
        //父组件传递过来的数据（两种方式声明：1.数组 2.对象）
        //数组方式
        props: {
            value: {
                type: String,
                default: '',
            }
        },
        methods: {
          
            /*注册验证实现呀*/ 
            registers: function() {
                var  _that=this;
                var errorMsg = this.validataFunc();
                if (errorMsg) {
                    alert(errorMsg);
                    return false;
                }else{

                   _that.registerTrue();
                }
            },

            //注册真正实现。
            registerTrue:function(){
                            
  
            },
            /*加验证方法呢*/ 
            validataFunc: function() {
                var validator = new Validator();
                validator.add(registerForm.username, [{
                    strategy: 'isNonEmpty',
                    errorMsg: '用户名不能为空'
                }, {
                    strategy: 'minLength:6',
                    errorMsg: '用户名长度不能小于 10 位'
                }]);
                validator.add(registerForm.password, [{
                    strategy: 'minLength:6',
                    errorMsg: '密码长度不能小于 6 位'
                }]);
                validator.add(registerForm.phoneNumber, [{
                    strategy: 'isMobile',
                    errorMsg: '手机号码格式不正确'
                }]);
                var errorMsg = validator.start();
                return errorMsg;
            }
        },
        //生命周期钩子：组件实例完成创建之后调用
        created() {
            /***********************客户调用代码,不好意思，我这里也加了进来。哈哈哈哈。这样动态加吧。哎，心累**************************/
            var registerForm = document.getElementById('registerForm');
            //这里还有很多事情要做，gh
        },
        //计算属性
        computed: {
            fullName() {
                return this.firstName + this.lastName
            }
        },
        //监听
        watch: {
            title(preVal, newVal) {
                console.log(`改变之前的值：${preVal}；改变之后的值：${newVal}`)
            }
        },
        //生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
        beforeCreated() {
            console.log('component before created')
        },
        //生命周期钩子：组件实例渲染完成时调用
        mounted() {
            console.log('component mounted')
        },
        //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
        components: {}
    }
</script>



<style>

</style>
    


<template>
  <div id="header">

      <div id="morediv" ></div>
    <button class="header_left" id="downBtn"   @click="Myperson" >
        <div>
        </div>
      </button>
  </div>
</template>
<script>
  import {
    setCommand,
    MenuBar,
    RefreshMenuBarCommand
  } from "../common/indexCommon.js"
  export default {
    props: {
      value: {
        type: String,
        default: '',
      }
    },
    computed: {
      listeners() {
        return {
         
        }
      }
    },
    methods: {
      Buttondown: function() {
      
     
      },

      Myperson:function(){
    
        this.$router.push('/My');
      }
    },
    mounted() {
      /*初始状态就使用命令模式给down按钮加事件。事件在menubar处理程序中*/
      var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
      var downBtn = document.getElementById('downBtn');
      /*我们不用关心执行什么，对象也不需要是谁。只需要给它加一个方法就行了*/
      setCommand(downBtn, refreshMenuBarCommand);
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #header {
    width: 10rem;
    height: 1.333333rem;
  }
  .header_left {
    height: 100%;
    width: 1.866667rem;
    float: left;
    background: url(../../assets/images/down.jpg) no-repeat;
    border: 0rem;
  }
  ul {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 1.333333rem;
  }
  li {
    float: left;
    list-style: none;
    margin-left: .8rem;
  }
</style>
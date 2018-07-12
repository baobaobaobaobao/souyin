  
  export { setCommand,MenuBar,RefreshMenuBarCommand}
  
  /*第一部分*/
        //         有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请
        // 求的操作是什么，此时希望用一种松耦合的方式来设计软件，使得请求发送者和请求接
        // 收者能够消除彼此之间的耦合关系。

        /*说实在的，就是菜单。菜单是顾客和大厨之间的联系。达到松耦合的关系,我们先用闭包实现这个*/

        //给button放上大厨的执行方法
        var setCommand = function (button, command) {
            button.onclick = function () {
                command.execute();
            }
        };

        //这个对象就是菜单，它去命令大厨做事情
        var MenuBar = {
            refresh: function () {
                console.log('，然后跳转。');

                

              
        }
        };

        //大厨接收菜单，开始执行其中的事情。
        var RefreshMenuBarCommand = function (receiver) {
            return {
                execute: function () {
                    /*这里大厨也可以自己做一些操作的*/
                   //这个事情就是div扩大。
                    receiver.refresh();
                }
            }
        };

        



   
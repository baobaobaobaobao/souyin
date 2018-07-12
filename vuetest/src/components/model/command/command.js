     
   export {MacroCommand}  
     
     /**/ 
    /*第二部分，可以将用户输入的命令暂存在一个命令栈中，然后做完操作之后，一次性取出展现使用，牛逼*/
    var Ryu = {
        attack: function () {
            console.log('攻击');
        },
        defense: function () {
            console.log('防御');
        },
        jump: function () {
            console.log('跳跃');
        },
        crouch: function () {
            console.log('蹲下');
        }
    };

    var makeCommand = function (receiver, state) { // 创建命令
        return function () {
            //传入一个对象和对应的方法名字，下面这行为返回一个函数，但没有执行哦。。
            receiver[state]();
        }
    };

    var commands = {
        "119": "jump", // W
        "115": "crouch", // S
        "97": "defense", // A
        "100": "attack" // D
    };
    var commandStack = []; // 保存命令的堆栈
    document.onkeypress = function (ev) {
        var keyCode = ev.keyCode,
            command = makeCommand(Ryu, commands[keyCode]);
        if (command) {
            command(); // 执行命令
            commandStack.push(command); // 将刚刚执行过的命令保存进堆栈
        }
    };

    document.getElementById('replay').onclick = function () { // 点击播放录像
        var command;
        while (command = commandStack.shift()) { // 从堆栈里依次取出命令并执行
            command();
        }
    };




     /*第三部分，*/

    /*宏命令是一组命令的集合，通过执行宏命令的方式，可以一次执行一批命令。想象一下，家
里有一个万能遥控器，每天回家的时候，只要按一个特别的按钮，它就会帮我们关上房间门，顺
便打开电脑并登录 QQ。就是命令集合吧*/



    //首先我们创建各种命令对象。比如关门等等，打开电脑，登陆qq
    var closeDoorCommand = {
        execute: function () {
            console.log('关门');
        }
    };

    var openPcCommand = {
        execute: function () {
            console.log('开电脑');
        }
    };

    var openQQCommand = {
        execute: function () {
            console.log('登录 QQ');
        }
    };

    // 接下来定义宏命令 MacroCommand，它的结构也很简单。macroCommand.add 方法表示把子命令添
    // 加进宏命令对象，当调用宏命令对象的 execute 方法时，会迭代这一组子命令对象，并且依次执
    // 行它们的 execute 方法：


    var MacroCommand = function () {
        return {
            commandsList: [],
            add: function (command) {
                this.commandsList.push(command);
            },
            execute: function () {
                for (var i = 0, command; command = this.commandsList[i++];) {
                    command.execute();
                }
            }
        }
    };

    /*将那些定义的方法依次放入我们其中的list，然后调用就可以了*/
    var macroCommand = MacroCommand();
    macroCommand.add(closeDoorCommand);
    macroCommand.add(openPcCommand);
    macroCommand.add(openQQCommand);
    macroCommand.execute();
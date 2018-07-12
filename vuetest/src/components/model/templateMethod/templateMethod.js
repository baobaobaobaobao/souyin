/*第一部分，作为抽象类的JavaScript实现。 模板方法实现*/


/*Beverage.prototype.init 被称为模板方法的原因是，该方法中封装了子类的算法框架，它作
为一个算法的模板，指导子类以何种顺序去执行哪些方法。在 Beverage.prototype.init 方法中，
算法内的每一个步骤都清楚地展示在我们眼前。*/

var Beverage = function () {};

Beverage.prototype.boilWater = function () {
  console.log('把水煮沸');
}

Beverage.prototype.brew = function () {};
Beverage.prototype.pourInCup = function () {}; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function () {}; // 空方法，应该由子类重写
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};


/*接下来是子类的编写*/

var Coffee = function () {};
Coffee.prototype - new Beverage();

Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
}

Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');

};
Coffee.prototype.addCondiments = function () {
  console.log('加糖和牛奶');
};
var Coffee = new Coffee();
Coffee.init();


/*第二部分，钩子函数就是子类可以选择是否使用父类的模板中某些方法实现，也可以自己写*/



// 在 Web 开发中也能找到很多模板方法模式的适用场景，比如我们在构建一系列的 UI 组件，
// 这些组件的构建过程一般如下所示：
// (1) 初始化一个 div 容器；
// (2) 通过 ajax 请求拉取相应的数据；
// (3) 把数据渲染到 div 容器里面，完成组件的构造；
// (4) 通知用户组件渲染完毕。
// 我们看到，任何组件的构建都遵循上面的 4 步，其中第(1)步和第(4)步是相同的。第(2)步不
// 同的地方只是请求 ajax 的远程地址，第(3)步不同的地方是渲染数据的方式。
// 于是我们可以把这 4 个步骤都抽象到父类的模板方法里面，父类中还可以顺便提供第(1)步和
// 第(4)步的具体实现。当子类继承这个父类之后，会重写模板方法里面的第(2)步和第(3)步。


/*在这个例子里，我们把挂钩的名字定为 customerWantsCondiments，接下来将挂钩放入 Beverage
类，看看我们如何得到一杯不需要糖和牛奶的咖啡，代码如下：*/

var Beverage = function () {};
Beverage.prototype.boilWater = function () {
  console.log('把水煮沸');
};
Beverage.prototype.brew = function () {
  throw new Error('子类必须重写 brew 方法');
};
Beverage.prototype.pourInCup = function () {
  throw new Error('子类必须重写 pourInCup 方法');
};
Beverage.prototype.addCondiments = function () {
  throw new Error('子类必须重写 addCondiments 方法');
};
Beverage.prototype.customerWantsCondiments = function () {
  return true; // 默认需要调料
};
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  if (this.customerWantsCondiments()) { // 如果挂钩返回 true，则需要调料
    this.addCondiments();
  }
};
var CoffeeWithHook = function () {};
CoffeeWithHook.prototype = new Beverage();
CoffeeWithHook.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
};
CoffeeWithHook.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
};
CoffeeWithHook.prototype.addCondiments = function () {
  console.log('加糖和牛奶');
};
CoffeeWithHook.prototype.customerWantsCondiments = function () {
  return window.confirm('请问需要调料吗？');
};
var coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();

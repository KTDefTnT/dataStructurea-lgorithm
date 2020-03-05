function Stack () {
  var items = [];
  // push 添加一个元素到栈顶
  this.push = function (item) {
    items.push(item);
  }
  // pop 弹出栈顶元素
  this.pop = function (item) {
    return items.pop();
  }
  // top 返回栈顶元素
  this.top = function () {
    return items[items.length - 1];
  }
  // isEmpty 判断栈是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }
  // size 返回栈里面元素个数
  this.size = function () {
    return items.length;
  }
  // clear 清空栈
  this.clear = function () {
    items = [];
  }
}

module.exports = {
  Stack
}
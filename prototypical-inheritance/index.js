const focusOnElement = () => {
  console.log("focus");
};

function HtmlElement() {
  this.click = () => {
    console.log("click");
  };
}

Object.assign(HtmlElement.prototype, { focusOnElement });

function HtmlSelectElement(initItems = []) {
  this.items = initItems;
  this.addItem = (val) => {
    this.items.push(val);
  };
  this.removeItem = (val) => {
    this.items.splice(this.items.pop(val));
  };
}

Object.assign(HtmlSelectElement.prototype, new HtmlElement());

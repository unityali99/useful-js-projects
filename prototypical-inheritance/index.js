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
  this.render = () => {
    return `<select>${this.items.map(
      (value) => `<option>${value}</option>`
    )}</select>`;
  };
}

Object.assign(HtmlSelectElement.prototype, new HtmlElement());

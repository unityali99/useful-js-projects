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
  this.render = () =>
    `<select>${this.items.map(
      (value) => `<option>${value}</option>`
    )}</select>`;
}

Object.assign(HtmlSelectElement.prototype, new HtmlElement());

function HtmlImgElement(src, alt = "Image") {
  this.src = src;
  this.alt = alt;
  this.render = () => `<img src="${this.src}" alt="${this.alt}"/>`;
}

Object.assign(HtmlImgElement.prototype, new HtmlElement());

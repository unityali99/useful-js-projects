const focusOnElement = () => {
  console.log("focus");
};

function HtmlElement() {}

Object.assign(HtmlElement.prototype, { focusOnElement });

const myElement = new HtmlElement();

myElement.click = () => {
  console.log("click");
};

myElement.focusOnElement();

function HtmlSelectElement() {}

const selectElement = Object.create(myElement);

selectElement.focusOnElement();
selectElement.click();

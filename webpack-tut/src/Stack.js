const privateProp = new WeakMap();

class Stack {
  constructor(initialStack = []) {
    if (!Array.isArray(initialStack))
      throw new Error("Input must be an array.");
    privateProp.set(this, initialStack);
  }

  push(item) {
    privateProp.get(this).push(item);
  }

  pop() {
    return privateProp.get(this).pop();
  }

  peek() {
    let arr = privateProp.get(this);
    return arr[arr.length - 1];
  }

  get count() {
    return privateProp.get(this).length;
  }
}

export default Stack;

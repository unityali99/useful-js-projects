const target = {
    message1: "hello",
    message2: "everyone",
    message3: "wassup"
  };
  
  const handler = {
    get: function(target, prop, receiver) {
        if(target[prop] === "hello")
            return "Greetings";

        else
            return target[prop];
    },

    set: function(target,prop,value)
    {
        if(value === "Bye")
            target[prop] = "GoodBye"

        else
            target[prop] = value
    }
  };
  
  const proxy2 = new Proxy(target, handler);

console.log(proxy2.message1)

proxy2.message1 = "Bye"

console.log(proxy2.message1)

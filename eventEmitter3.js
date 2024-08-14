const EventEmitter = require("events");

class WithTime extends EventEmitter {
  execute(url, asyncFunc) {
    this.emit("begin");

    this.on("data", (data) => console.log(data));
    this.on("data", () => console.log());

    asyncFunc(url, (data) => {
      this.emit("data", data);
      this.emit("end");
    });

    console.log(this);
  }
}

const fetchFunc = (url, cb) => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => cb(data));
};

const myEmitter = new WithTime();

console.log(myEmitter);

myEmitter.on("begin", () => console.log("Execuation began"));
myEmitter.on("end", () => console.log("Execuation ended"));

myEmitter.execute("https://jsonplaceholder.typicode.com/posts/1", fetchFunc);

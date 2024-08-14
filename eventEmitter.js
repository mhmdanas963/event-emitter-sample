const { time } = require("console");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const fooEmitter = new Emitter();

fooEmitter.on("foo", () => {
  console.log("foo event occurred 1");
});

fooEmitter.on("foo", () => {
  console.log("foo event occurred 2");
});

fooEmitter.on("foo", (value) => {
  console.log("foo event occurred with 1 parameter : ");
  console.log(value);
});

fooEmitter.on("foo", (value1, value2) => {
  console.log("foo event occurred with 2 parameters");
  console.log(value1, value2);
});

fooEmitter.emit("foo", "value1", "value2");

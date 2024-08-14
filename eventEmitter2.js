const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function f1() {
  console.log("Event one is occurred 1");
}

function f2() {
  console.log("Event one is occurred 2");
}

myEmitter.on("eventOne", f1);

myEmitter.on("eventOne", f2);

myEmitter.once("eventOne", () => {
  console.log("Event one is occured 3");
});

myEmitter.emit("eventOne");

myEmitter.off("eventOne", f1);

console.log(myEmitter);

console.log(myEmitter.listenerCount("eventOne"));

console.log(myEmitter.rawListeners("eventOne"));

// const events = {
//   event1: [() => console.log("Event1 occurred 1")],
// };

// function once(fn) {
//   events.event1.push(fn);
// }

// function emit() {
//   for (key in events) {
//     const element = events[key];
//     element.forEach(fn => {
//         fn()
//     });
//     console.log(element);
//   }
// }

// once(fn)

// emit();

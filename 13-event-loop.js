const fs = require("fs");

console.log("started a first task");

fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");

//callback has been offloaded by event loop and executed after immediate cdoes
//readFile is asynchronous and has been offloaded by event loop

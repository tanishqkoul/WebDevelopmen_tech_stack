// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello anchal!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// nodemon script.js for autoupdate
// node ./script.js for satrting server
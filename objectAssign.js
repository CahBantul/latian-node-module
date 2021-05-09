// core module
const os = require("os");
const fs = require("fs");

let cpuSpec = os.cpus();
let cpuSpecObj = Object.assign({}, cpuSpec);
let cpuSpecJSON = JSON.stringify(cpuSpecObj, null, 4);

// write to file cpu.json
fs.writeFile("cpu.json", cpuSpecJSON, (err) => {
  if (err) throw err;
  console.log(cpuSpecJSON);
});

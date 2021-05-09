// core module
const os = require("os");
const fs = require("fs");

let cpuSpec = os.cpus();
cpuSpecJSON = JSON.stringify(cpuSpec, null, 4);

// write to file cpu.json
fs.writeFile("cpu2.json", cpuSpecJSON, (err) => {
  if (err) throw err;
  console.log(cpuSpecJSON);
});

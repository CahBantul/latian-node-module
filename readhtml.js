const fs = require("fs");
const http = require("http");

const readHtml = fs.readFileSync("page.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log(`Request ${req.url}`);
  res.writeHead(200, { "content-Type": "text/html" });
  res.end(readHtml);
});
server.listen(3000, () => {
  console.log(`server berjalan pada port 3000`);
});

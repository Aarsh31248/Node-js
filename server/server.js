const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/data") {
    res.end("Data Received");
  }
  res.end("I am ON!");
});

server.listen(3333);

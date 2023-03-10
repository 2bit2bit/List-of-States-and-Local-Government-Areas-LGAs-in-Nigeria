const http = require("http");
const fs = require("fs");
const path = require("path");

let items = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      "List of States and Local Government Areas (LGAs) in Nigeria.json"
    ),
    "utf8"
  )
);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(items));
    res.end();
  })
  .listen(process.env.PORT || 3000);

  

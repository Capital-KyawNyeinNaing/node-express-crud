const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader("Content-Type", "text/html");
  // res.write("<h1>Hello Node JS</h1>");

  let path = "./view/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
      // res.end(data);
    }
  });
});

server.listen(8080, "localhost", () => {
  console.log("Server start");
});

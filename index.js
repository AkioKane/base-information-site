import http from "node:http";
import fs from "node:fs";
import url from "node:url";

const page404 = fs.readFileSync("./404.html", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  return data;
})


http.createServer(function (req, res) {
  const path = url.parse(req.url, true);
  let filename = "";
  if (path.pathname === "/") {
    filename = "./index.html";
  } else {
    filename = "." + path.pathname + ".html"
  }
  
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': "text/html"});
      res.write(page404);
      return res.end(); 
    } else {
      res.writeHead(200, {'Content-Type': "text/html"});
      res.write(data);
      return res.end();
    }
  })
}).listen(8080)
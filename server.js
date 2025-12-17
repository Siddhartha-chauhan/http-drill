import http from "http";
import { randomUUID } from "crypto";

const server = http.createServer((req, res) => {

  // GET /html
  if (req.method === "GET" && req.url === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
    <p>- Martin Fowler</p>
  </body>
</html>
    `);
  }

  // GET /json
  if (req.method === "GET" && req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      slideshow: {
        author: "Yours Truly",
        date: "date of publication",
        slides: [
          {
            title: "Wake up to WonderWidgets!",
            type: "all"
          },
          {
            title: "Overview",
            type: "all",
            items: [
              "Why <em>WonderWidgets</em> are great",
              "Who <em>buys</em> WonderWidgets"
            ]
          }
        ],
        title: "Sample Slide Show"
      }
    }));
  }

  // GET /uuid
  if (req.method === "GET" && req.url === "/uuid") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      uuid: randomUUID()
    }));
  }

  // GET /status/{status_code}
  if (req.method === "GET" && req.url.startsWith("/status/")) {
    const statusCode = Number(req.url.split("/")[2]);
    res.writeHead(statusCode);
    return res.end(`Status code: ${statusCode}`);
  }

  // GET /delay/{delay_in_seconds}
  if (req.method === "GET" && req.url.startsWith("/delay/")) {
    const delay = Number(req.url.split("/")[2]) * 1000;

    return setTimeout(() => {
      res.writeHead(200);
      res.end("Success after delay");
    }, delay);
  }

  // 404
  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

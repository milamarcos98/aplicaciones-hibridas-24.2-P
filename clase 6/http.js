const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Pagina principal")
    res.write("Pagina principal")
    res.write("Pagina principal")
    res.write("Pagina principal")
    res.write("Pagina principal")
    res.write("Pagina principal")
    res.write("Pagina principal")
    res.end("Fin");
  } else if (url === "/json" && method === "GET") {
    const data = {
      message: "Hola mundo!",
      date: new Date(),
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else if (url === "/html" && method === "GET") {
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola</h1>
    <p>Texto con html</p>
</body>
</html>
    `;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(htmlContent)
  }else if(url === "/redirect" && method === "GET"){
    res.writeHead(302, {'Location': '/'});
    res.end()
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("not found")
  }

  //   switch (req.method) {
  //     case "GET":
  //       if (url === "/") {
  //         res.writeHead(200, {'Content-Type': 'text/plain'});
  //         res.end("Hello World!")
  //       }else if(url === '/info'){
  //         // ...
  //       }
  //       break;
  //       case "POST":
  //         if (url === "/") {
  //           res.writeHead(200, {'Content-Type': 'text/plain'});
  //           res.end("Hello World!")
  //         }else if(url === '/info'){
  //           // ...
  //         }
  //   }
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});

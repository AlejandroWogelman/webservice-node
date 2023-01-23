const http = require("http");
http
  .createServer((req, res) => {
    /*     res.setHeader("Content-Dispositions", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" }); //CSV === EXEL */
    res.write("Hola mundo");

    res.end();
  })
  .listen(8080);

console.log("escuchando el puerto", 8080);

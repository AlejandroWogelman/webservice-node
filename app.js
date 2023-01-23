require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT;

//HANDLEBARS
app.set("view engine", "hbs"); //renderizar vistas sencillas
hbs.registerPartials(__dirname + "/views/partials");

//SERVIR CONTENIDO ESTATICO
app.use(express.static("public")); //PRIORIDAD, SI NO ENCUENTRA PUBLIC ("public"), SIGUE AVANZADNO
//EN PUBLIC BUSCA EL INDEX.HTML

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Alejandro",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  /*  res.sendFile(__dirname + "/007templated-roadtrip/generic.html"); */

  /*   res.sendFile(__dirname + "/public/generic.html"); */
  res.render("generic", {
    nombre: "Alejandro",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  /*   res.sendFile(__dirname + "/public/elements.html"); */
  res.render("elements", {
    nombre: "Alejandro",
    titulo: "Curso de Node",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respect ruta");
});
app.get("*", (req, res) => {
  //Cualquir ruta distinta entra acá

  res.sendFile(__dirname + "/public/404.html");
  //SENDFILE PODEMOS RESPONDER HTML
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost: ${port}`)
);

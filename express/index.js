const { request, response } = require("express");
const express = require("express");

const app = express();

app.get('/movies', (request, response) => {
    response.send("<h1> Movies </h1>");
});

app.get('/', (request, response) => {
    response.send("<h1> Home page </h1>");
});

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});
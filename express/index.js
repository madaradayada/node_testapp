const { request, response } = require("express");
const express = require("express");

const app = express();

// request - object which contains info about http request -> req
// response = object which contains methods to return response -> res

app.get('/movies', (req, res) => {
    res.send("<h1> Movies </h1>");
});

app.get('/', (req, res) => {
    res.send("<h1> Home page </h1>");
});

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});
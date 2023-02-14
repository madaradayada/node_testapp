const { request, response } = require("express");
const express = require("express");

const app = express();

// request - object which contains info about http request -> req
// response = object which contains methods to return response -> res

const movies = [{id: 1, name: "The Godfather"}];
const users = [{id: 12, name: "Bob"}];

app.use((req, res, next) => {
    console.log("middleware 2");

    next();
});

app.use((req, res, next) => {
    console.log("incoming request", {method: req.method, path: req.path});

    next();
});

app.get('/movies', (req, res) => {
    // console.log("incoming request", {method: req.method, path: req.path});
    res.json(movies);
});

app.get('/users', (req, res) => {
    // console.log("incoming request", {method: req.method, path: req.path});
    res.json(users);
});

app.listen(3001, () => {
    console.log("server is listening on port 3001")
});

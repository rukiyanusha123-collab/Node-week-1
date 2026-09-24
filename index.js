const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Request successful");
});

app.get("/created", (req, res) => {
    res.status(201).send("Resource created");
});

app.get("/bad-request", (req, res) => {
    res.status(400).send("Bad request");
});

app.get("/unauthorized", (req, res) => {
    res.status(401).send("Unauthorized");
});

app.get("/forbidden", (req, res) => {
    res.status(403).send("Forbidden");
});

app.get("/not-found", (req, res) => {
    res.status(404).send("Resource not found");
});

app.get("/server-error", (req, res) => {
    res.status(500).send("Internal server error");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
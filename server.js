const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to my first Node.js server!");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
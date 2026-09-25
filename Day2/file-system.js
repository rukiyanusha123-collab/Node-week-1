const fs = require("fs");

// Write data to a file
fs.writeFileSync("message.txt", "Hello from Node.js!");

// Read data from the file
const data = fs.readFileSync("message.txt", "utf8");

console.log("File content:", data);

// Add more data
fs.appendFileSync("message.txt", "\nWelcome to Day 2!");

// Read again
const updatedData = fs.readFileSync("message.txt", "utf8");

console.log("Updated content:", updatedData);   
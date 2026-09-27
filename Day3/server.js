require("dotenv").config({ path: "./.env" });

const port = process.env.PORT;

console.log("Server running on port:", port);
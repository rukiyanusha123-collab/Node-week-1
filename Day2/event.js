const EventEmitter = require("events");

const event = new EventEmitter();

// Listen for login event
event.on("login", (username) => {
    console.log(username + " logged in");
});

// Trigger the event
event.emit("login", "Aisha");
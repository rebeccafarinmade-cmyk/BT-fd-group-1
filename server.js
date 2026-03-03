const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Serve static files from root
app.use(express.static(__dirname));

app.use(express.json());

let events = [];

// Read
app.get("/events", (req, res) => {
  res.json(events);
});

// Create
app.post("/events", (req, res) => {
  events.push(req.body);
  res.json({ message: "Event added" });
});

// Delete
app.delete("/events/:id", (req, res) => {
  events.splice(req.params.id, 1);
  res.json({ message: "Deleted" });
});

app.listen(port, () => console.log("Server running"));

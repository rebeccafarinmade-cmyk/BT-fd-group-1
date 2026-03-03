// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data from requests
app.use(express.json());

// Sample "database"
let events = [
  { id: 1, name: "Event 1", date: "2026-03-03" },
    { id: 2, name: "Event 2", date: "2026-03-10" }
    ];

    // --- CRUD Routes ---

    // CREATE: Add a new event
    app.post('/events', (req, res) => {
      const newEvent = { id: Date.now(), ...req.body };
        events.push(newEvent);
          res.status(201).json(newEvent);
          });

          // READ: Get all events
          app.get('/events', (req, res) => {
            res.json(events);
            });

            // READ: Get a single event by ID
            app.get('/events/:id', (req, res) => {
              const event = events.find(e => e.id == req.params.id);
                if (event) res.json(event);
                  else res.status(404).send("Event not found");
                  });

                  // UPDATE: Edit an event by ID
                  app.put('/events/:id', (req, res) => {
                    const index = events.findIndex(e => e.id == req.params.id);
                      if (index !== -1) {
                          events[index] = { ...events[index], ...req.body };
                              res.json(events[index]);
                                } else res.status(404).send("Event not found");
                                });

                                // DELETE: Remove an event by ID
                                app.delete('/events/:id', (req, res) => {
                                  const index = events.findIndex(e => e.id == req.params.id);
                                    if (index !== -1) {
                                        const deleted = events.splice(index, 1);
                                            res.json(deleted[0]);
                                              } else res.status(404).send("Event not found");
                                              });

                                              // Start server
                                              app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
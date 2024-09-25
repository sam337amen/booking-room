const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db')

const app = express();
const PORT = 2000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies


// Create endpoint to create a new room in the database
app.post("/create", async (req, res) => {
    const { room_number, room_price, room_type, room_description } = req.body;

    try {
        // Return a 400 response if any required fields are missing
        if (!room_number || !room_price || !room_type || !room_description) {
            return res.status(400).json({ message: 'Room number, price, type, and description are required' });
        }

        // Check if a room with the same number already exists
        const existingRoom = await pool.query(
            "SELECT * FROM rooms WHERE room_number = $1",
            [room_number]
        );

        // If the room exists, respond with a 400 status
        if (existingRoom.rows.length > 0) {
            return res.status(400).json({ message: 'Room already exists' });
        }

        // Insert the new room into the database
        const newRoom = await pool.query(
            "INSERT INTO rooms (room_number, room_price, room_type, room_description) VALUES ($1, $2, $3, $4) RETURNING *",
            [room_number, room_price, room_type, room_description]
        );

        // Respond with 201 status and the created room
        res.status(201).json({ message: 'Room created successfully', room: newRoom.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Read/ Search endpoint to get rooms based on room type and price
app.get("/search", async (req, res) => {
    const { type, price } = req.query;

    try {
        const query = `
            SELECT * FROM rooms 
            WHERE ($1 IS NULL OR room_type = $1) AND ($2 IS NULL OR room_price <= $2)
        `;
        const values = [type || null, price || null];
        const result = await pool.query(query, values);
        
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update endpoint to edit an existing room
app.put("/update/:room_number", async (req, res) => {
    const { room_number } = req.params;
    const { room_price, room_type, room_description } = req.body;

    try {
        // Check if the room exists
        const existingRoom = await pool.query(
            "SELECT * FROM rooms WHERE room_number = $1",
            [room_number]
        );

        if (existingRoom.rows.length === 0) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Update the room details
        const updatedRoom = await pool.query(
            "UPDATE rooms SET room_price = $1, room_type = $2, room_description = $3 WHERE room_number = $4 RETURNING *",
            [room_price, room_type, room_description, room_number]
        );

        res.json({ message: 'Room updated successfully', room: updatedRoom.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Delete endpoint to remove a room
app.delete("/delete/:room_number", async (req, res) => {
    const { room_number } = req.params;

    try {
        // Check if the room exists
        const existingRoom = await pool.query(
            "SELECT * FROM rooms WHERE room_number = $1",
            [room_number]
        );

        if (existingRoom.rows.length === 0) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Delete the room from the database
        await pool.query(
            "DELETE FROM rooms WHERE room_number = $1",
            [room_number]
        );

        res.json({ message: 'Room deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
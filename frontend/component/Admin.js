import React, { useState, useEffect } from 'react';
import './RoomCSS/admin.css';

// Admin component for managing rooms
const Admin = () => {
    // State to hold the list of rooms
    const [rooms, setRooms] = useState([]);
    // State to control modal visibility for adding/editing rooms
    const [modalVisible, setModalVisible] = useState(false);
    // State to hold form values for the room
    const [formValues, setFormValues] = useState({ number: '', price: '', type: '', description: '' });
    // State to track the index of the room being edited
    const [editIndex, setEditIndex] = useState(null);

    // Fetch rooms when the component mounts
    useEffect(() => {
        fetchRooms();
    }, []);

    // Function to fetch rooms from the server
    const fetchRooms = async () => {
        try {
            const response = await fetch('http://localhost:5000/search'); // Changed to /search
            const data = await response.json();
            // Check if the fetched data is an array
            if (Array.isArray(data)) {
                setRooms(data); // Update state with the fetched rooms
            } else {
                console.error('Expected an array but received:', data);
                setRooms([]); // Reset rooms if the data is not an array
            }
        } catch (error) {
            console.error('Error fetching rooms:', error);
            setRooms([]); // Reset rooms on error
        }
    };

    // Function to reset the form for adding a new room
    const resetForm = () => {
        setFormValues({ number: '', price: '', type: '', description: '' }); // Clear form values
        setEditIndex(null); // Reset edit index
        setModalVisible(true); // Show the modal
    };

    // Function to save the room (either to add a new room or update an existing one)
    const saveRoom = async () => {
        try {
            if (editIndex !== null) {
                // Update existing room
                const response = await fetch(`http://localhost:5000/update/${rooms[editIndex].id}`, { // Changed to /update
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });
                const updatedRoom = await response.json();
                // Update the rooms state with the modified room
                const updatedRooms = rooms.map((room, index) => (index === editIndex ? updatedRoom : room));
                setRooms(updatedRooms);
            } else {
                // Add a new room
                const response = await fetch('http://localhost:5000/create', { // Changed to /create
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });
                const newRoom = await response.json();
                setRooms([...rooms, newRoom]); // Append the new room to the rooms state
            }
            setModalVisible(false); // Close the modal after saving
        } catch (error) {
            console.error('Error saving room:', error);
        }
    };

    // Function to populate the form with the selected room's details for editing
    const editRoom = (index) => {
        setFormValues(rooms[index]); // Set form values to the selected room
        setEditIndex(index); // Set index to the room being edited
        setModalVisible(true); // Show the modal
    };

    // Function to delete a room
    const deleteRoom = async (index) => {
        try {
            const response = await fetch(`http://localhost:5000/delete/${rooms[index].id}`, { // Changed to /delete
                method: 'DELETE',
            });
            if (response.ok) {
                // Filter out the deleted room from the rooms state
                const updatedRooms = rooms.filter((_, i) => i !== index);
                setRooms(updatedRooms);
            }
        } catch (error) {
            console.error('Error deleting room:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Room Management</h2>
            <button className="btn btn-primary mb-3" onClick={resetForm}>Add Room</button>

            {/* Room Management table with edit/delete actions */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Room Price</th>
                        <th>Room Type</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.id}>
                            <td>{room.room_number}</td>
                            <td>{room.room_price}</td>
                            <td>{room.room_type}</td>
                            <td>{room.room_description}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => editRoom(rooms.indexOf(room))}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteRoom(rooms.indexOf(room))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for Add/Edit Room */}
            {modalVisible && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{editIndex !== null ? 'Edit Room' : 'Add Room'}</h5>
                                <button type="button" className="close" onClick={() => setModalVisible(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Room Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formValues.number}
                                            onChange={(e) => setFormValues({ ...formValues, number: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Room Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={formValues.price}
                                            onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Room Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formValues.type}
                                            onChange={(e) => setFormValues({ ...formValues, type: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Room Description</label>
                                        <textarea
                                            className="form-control"
                                            value={formValues.description}
                                            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={saveRoom}>Save Room</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
CREATE DATABASE postgreas

CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    room_number VARCHAR(50) NOT NULL,
    room_price NUMERIC NOT NULL,
    room_type VARCHAR(50) NOT NULL,
    room_description VARCHAR(255) NOT NULL
);

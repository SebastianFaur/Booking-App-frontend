/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data despre camere
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:8080/BookingApp-1.0-SNAPSHOT/resources/rooms"); // Înlocuiește cu endpoint-ul real
        setRooms(response.data);
        console.log("s-a dat fetch");
      } catch (err) {
        setError("Eroare la obținerea datelor despre camere.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <p>Se încarcă datele...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      {rooms.map((room) => (
        <div
          key={room.id}
          style={{
            ...styles.card,
            backgroundColor: room.available ? "#e7f9e7" : "#f9e7e7",
          }}
        >
          <h2>{room.name}</h2>
          <p>
            <strong>Descriere:</strong> {room.description}
          </p>
          <p>
            <strong>Preț:</strong> {room.price} RON
          </p>
          <p>
            <strong>Status:</strong> {room.available ? "Disponibilă" : "Indisponibilă"}
          </p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    padding: "16px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
  },
};

export default RoomsList;

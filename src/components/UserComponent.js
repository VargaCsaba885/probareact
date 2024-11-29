import React, { useState, useEffect } from "react";
import axios from "axios";

function UserDetails({ id }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Csak akkor hívjuk meg az API-t, ha van ID
    if (!id) return;

    axios
      .get("http://localhost:8081/api/user/${id}") // Backend végpont
      .then((response) => {
        setUser(response.data); // Adatok mentése state-be
      })
      .catch((err) => {
        setError(err.message); // Hibakezelés
      });
  }, [id]); // Az ID változására reagál

  if (error) {
    return <p>Hiba történt: {error}</p>;
  }

  if (!user) {
    return <p>Betöltés...</p>;
  }

  return (
    <div>
      <h2>Felhasználó Részletei</h2>
      <p>ID: {user.id}</p>
      <p>Név: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* További mezők itt */}
    </div>
  );
}

export default UserDetails;

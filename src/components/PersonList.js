import React, { useState, useEffect } from "react";
import axios from "axios";

export const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setPersons(res.data));
  }, []);

  return (
    <div>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

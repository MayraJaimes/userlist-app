import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const Users = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const _fetchUsers = () => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => (setPeople(data), setIsLoading(false)))
      .catch((error) => (setError(error), setIsLoading(false)));
  };

  useEffect(() => {
    _fetchUsers();
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1>Our team:</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <User
              name={person.name}
              username={person.username}
              email={person.email}
              company={person.company.name}
              address={person.address}
              phone={person.phone}
              website={person.website}
              catchPhrase={person.company.catchPhrase}
              bs={person.company.bs}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

import React, { useState, useEffect } from "react";
import axios from "axios";

export const PersonInput = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = name;
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={} />
        </label>
      </form>
    </div>
  );
};

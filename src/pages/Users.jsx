import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    for (let page_number = 1; page_number < 3; page_number++) {
      const api = await fetch(
        `https://reqres.in/api/users?page=${page_number}`
      );
      const usersData = await api.json();
      setUsers((prevUsers) => [...prevUsers, ...usersData.data]);
    }
  };

  return (
    <div className="App">
      <div className="cards">
        {users.map((user) => (
          <Card
            key={user.id}
            user_email={user.email}
            first_name={user.first_name}
            last_name={user.last_name}
            img_url={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default Users;

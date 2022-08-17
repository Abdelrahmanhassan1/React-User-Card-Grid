import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  let page_number = 1;
  const getUsers = async () => {
    const api = await fetch(`https://reqres.in/api/users?page=${page_number}`);
    const usersData = await api.json();
    setUsers(usersData.data);
  };

  const setPage = (event) => {
    page_number = event.target.value;
    getUsers();
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
      <footer>
        <button onClick={setPage} value="1">
          Page 1
        </button>

        <button onClick={setPage} value="2">
          Page 2
        </button>
      </footer>
    </div>
  );
}

export default Users;

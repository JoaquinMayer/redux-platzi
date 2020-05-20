import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

import { useEffect, useState } from "react";
import ExportButtons from "../components/ExportButtons";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h3>Users List</h3>

      <ExportButtons data={users} />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

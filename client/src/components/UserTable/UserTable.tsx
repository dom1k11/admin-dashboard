import { useState } from "react";
import "./UserTable.css";

const UserTable = () => {
  const [users] = useState([
    {
      id: 1,
      name: "Dominik Sedusov",
      email: "dominik@example.com",
      status: "Active",
      last_seen: "5 minutes ago",
    },
    {
      id: 2,
      name: "Pavel Lebedev",
      email: "p.lebedev@example.com",
      status: "Blocked",
      last_seen: "10 minutes ago",
    },
  ]);

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Status</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td className={u.status.toLowerCase()}>{u.status}</td>
              <td>{u.last_seen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

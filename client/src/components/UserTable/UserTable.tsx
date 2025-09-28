// UserTable.tsx
import type { User } from "../../types/user";
import "./UserTable.css";

type UserTableProps = {
  users: User[];
};

const UserTable = ({ users }: UserTableProps) => {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>E-mail</th> 
            <th>Status</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              className={u.status.toLowerCase() === "blocked" ? "row-blocked" : ""}
            >
              <td><input type="checkbox" /></td>
              <td className={u.status.toLowerCase() === "blocked" ? "name-blocked" : ""}>
                {u.name}
              </td>
              <td>{u.email}</td>
              <td className={u.status.toLowerCase()}>{u.status}</td>
              <td>{new Date(u.last_login).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

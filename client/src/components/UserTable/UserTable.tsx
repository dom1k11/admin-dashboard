import type { User } from "../../types/user";
import "./UserTable.css";
import { toggleSelection } from "../../helpers/selection";

type UserTableProps = {
  users: User[];
  selectedIds: number[];
  setSelectedIds: (ids: number[]) => void;
};

const UserTable = ({ users, selectedIds, setSelectedIds }: UserTableProps) => {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={
                  users.length > 0 && selectedIds.length === users.length
                }
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedIds(users.map((u) => u.id))
                    : setSelectedIds([])
                }
              />
            </th>
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
              className={
                u.status.toLowerCase() === "blocked" ? "row-blocked" : ""
              }
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(u.id)}
                  onChange={() =>
                    setSelectedIds(toggleSelection(selectedIds, u.id))
                  }
                />
              </td>
              <td
                className={
                  u.status.toLowerCase() === "blocked" ? "name-blocked" : ""
                }
              >
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

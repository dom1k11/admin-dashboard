import Navbar from "../components/Navbar/Navbar";
import UserTable from "../components/UserTable/UserTable";
import Header from "../components/Header/Header";
import { useUsers } from "../hooks/useUsers";
import { deleteSelected, deleteUnverified } from "../services/userService";
import { useState } from "react";

const Dashboard = () => {
  const { users, loadUsers } = useUsers();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  async function handleRemoveUnverified() {
    await deleteUnverified();
    await loadUsers();
  }

  async function handleRemoveSelected() {
    await deleteSelected(selectedIds);
    await loadUsers();
    setSelectedIds([]);
  }

  return (
    <>
      <Header />
      <Navbar
        removeSelected={handleRemoveSelected}
        removeUnverified={handleRemoveUnverified}
      />
      <UserTable
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        users={users}
      />
    </>
  );
};

export default Dashboard;

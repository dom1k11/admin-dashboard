import Navbar from "../components/Navbar/Navbar";
import UserTable from "../components/UserTable/UserTable";
import Header from "../components/Header/Header";
import { useUsers } from "../hooks/useUsers";
import { deleteUnverified } from "../services/userService";

const Dashboard = () => {
  const { users, loadUsers } = useUsers();

  async function handleRemoveUnverified() {
    await deleteUnverified();
    await loadUsers();
  }

  return (
    <>
      <Header />
      <Navbar removeUnverified={handleRemoveUnverified} />
      <UserTable users={users} />
    </>
  );
};

export default Dashboard;

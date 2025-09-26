import Navbar from "../components/Navbar/Navbar";
import UserTable from "../components/UserTable/UserTable";
import Header from "../components/Header/Header";

const Dashboard = () => {
  return (
    <>
      {" "}
      <Header></Header>
      <Navbar></Navbar>
      <UserTable></UserTable>;
    </>
  );
};

export default Dashboard;

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Password" />
      <button className="btn btn-primary" onClick={handleLogin}>Sign in</button>
    </div>
  );
};

export default LoginPage;

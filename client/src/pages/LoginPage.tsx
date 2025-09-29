import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }
  function handleGoToRegister(){
    navigate("/register")
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Password" />
      <button className="btn btn-primary" onClick={handleLogin}>Sign in</button>< br></br>
      <button className="btn btn-light" onClick={handleGoToRegister}>New here? Sign up</button>
      
    </div>
  );
};

export default LoginPage;

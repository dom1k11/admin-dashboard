import "./LoginForm.css";

import { LoginFormProps } from "../../types/loginFormProps";

const LoginForm = ({
  name,
  password,
  loading,
  error,
  onChange,
  onSubmit,
  onGoToRegister,
}: LoginFormProps) => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <label>
        Name
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </label>

      <label>Password</label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => onChange("password", e.target.value)}
      />

      <button className="btn btn-primary" onClick={onSubmit} disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <br />

      <button className="btn btn-light" onClick={onGoToRegister}>
        New here? Sign up
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginForm;

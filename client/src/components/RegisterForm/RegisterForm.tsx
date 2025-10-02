import "./RegisterForm.css";
import { RegisterFormProps } from "../../types/registerFormProps";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({
  name,
  email,
  password,
  errors,
  success,
  onChange,
  onSubmit,
}: RegisterFormProps) => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <h1>Sign up</h1>

      <label>
        Name
        <input
          placeholder="John Doe"
          type="text"
          value={name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </label>
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <label>
        Email
        <input
          placeholder="email@example.com"
          type="text"
          value={email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </label>
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <label>
        Password
        <input
          placeholder="Minimum 3 characters"
          type="password"
          value={password}
          onChange={(e) => onChange("password", e.target.value)}
        />
      </label>
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button className="btn btn-primary" onClick={onSubmit}>
        Sign up
      </button>
      <button className="btn btn-light" onClick={() => navigate("/login")}>
        Back to login
      </button>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default RegisterForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import { login } from "../services/loginService";
const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(field: "name" | "password", value: string) {
    setForm({ ...form, [field]: value });
  }

  async function handleLogin() {
    setError("");
    setLoading(true);

    try {
      await login(form.name, form.password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginForm
      name={form.name}
      password={form.password}
      loading={loading}
      error={error}
      onChange={handleChange}
      onSubmit={handleLogin}
      onGoToRegister={() => navigate("/register")}
    />
  );
};

export default LoginPage;

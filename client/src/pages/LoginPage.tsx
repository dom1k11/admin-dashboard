import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

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
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }

      await res.json();
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

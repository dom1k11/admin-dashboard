import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/registerService";
import { validateRegistrationForm } from "../utils/validate";
import { ValidationErrors } from "../types/validation";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [success, setSuccess] = useState("");

  function handleChange(field: "name" | "email" | "password", value: string) {
    setForm({ ...form, [field]: value });
  }

  async function handleRegister() {
    setErrors({});
    setSuccess("");

    const newErrors = validateRegistrationForm(
      form.name,
      form.email,
      form.password
    );
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await register(form.name, form.email, form.password);
      setSuccess(
        "✅ Registration successful! Check your email and verify to log in!"
      );
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      console.error("Registration failed", err);
      setErrors({ email: "❌ This email is already registered" });
    }
  }

  return (
    <RegisterForm
      name={form.name}
      email={form.email}
      password={form.password}
      errors={errors}
      success={success}
      onChange={handleChange}
      onSubmit={handleRegister}
    />
  );
};

export default RegisterPage;

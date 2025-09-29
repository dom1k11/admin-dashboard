import { ValidationErrors } from "./validation";
export type RegisterFormProps = {
  name: string;
  email: string;
  password: string;
  errors: ValidationErrors;
  success: string;
  onChange: (field: "name" | "email" | "password", value: string) => void;
  onSubmit: () => void;
};
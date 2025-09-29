import { ValidationErrors } from "./validation";

export type LoginFormProps = {
  name: string;
  password: string;
  loading: boolean;
  error: ValidationErrors;
  onChange: (field: "name" | "password", value: string) => void;
  onSubmit: () => void;
  onGoToRegister: () => void;
};

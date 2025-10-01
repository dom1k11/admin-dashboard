
export type LoginFormProps = {
  name: string;
  password: string;
  loading: boolean;
  error: string;
  onChange: (field: "name" | "password", value: string) => void;
  onSubmit: () => void;
  onGoToRegister: () => void;
};

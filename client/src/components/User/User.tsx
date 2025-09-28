type UserProps = {
  user: string;
};

export default function User({ user }: UserProps) {
  return <p>{user}</p>;
}

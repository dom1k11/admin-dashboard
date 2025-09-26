type UserProps = {
  task: string;
};

export default function User({ task }: UserProps) {
  return <p>{task}</p>;
}

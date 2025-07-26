type Props = {
  message: string;
};

export default function MainContent({ message }: Props) {
  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold">{message}</h2>
    </main>
  );
}

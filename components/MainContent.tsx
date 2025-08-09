// Kayle' contribution: Simple reusable main content component with message prop

interface MainContentProps {
  message: string;
}

export default function MainContent({ message }: MainContentProps) {
  return (
    <main className="text-center text-gray-700 py-6">
      <h2 className="text-2xl font-semibold">{message}</h2>
    </main>
  );
}

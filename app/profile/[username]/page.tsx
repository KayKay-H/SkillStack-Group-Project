// Kayle's contribution: Dynamic route to display user profile info
// Mauwanu's contribution: Basic Tailwind styling

'use client';

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;

  return (
    <main className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        Profile: {username}
      </h1>
      <p className="text-gray-600">
        Welcome to {username}’s profile page. Here you can view and edit user information.
      </p>
    </main>
  );
}

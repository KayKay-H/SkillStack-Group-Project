// Kayle's contribution: Dynamic route to display user profile info
// Mauwanu's contribution: Basic Tailwind styling


interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;
}

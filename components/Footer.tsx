// Mauwanu's contribution: Styled footer with current year and center alignment

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-auto">
      &copy; {new Date().getFullYear()} SkillStack. All rights reserved.
    </footer>
  );
}

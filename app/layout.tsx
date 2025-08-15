import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProjectsProvider } from '@/context/ProjectsContext';
import { SkillsProvider } from '@/context/SkillsContext';

export const metadata = {
  title: 'SkillStack',
  description: 'Collaborative skill-building platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ProjectsProvider>
          <SkillsProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SkillsProvider>
        </ProjectsProvider>
      </body>
    </html>
  );
}

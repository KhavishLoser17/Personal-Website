import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-y-auto antialiased">
      {/* Background Image */}
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center h-full p-4 space-y-16 container mx-auto">
        <Navbar />
        <Hero />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <ContactForm />
        <Footer />

      </div>
    </div>
  );
}

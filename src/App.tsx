import FloatingPaths from './components/ui/FloatingPaths';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Problems from './components/Problems';
import HowItWorks from './components/HowItWorks';
import Differentiation from './components/Differentiation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-rich-black text-gray-300 font-sans selection:bg-neon-red selection:text-black overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingPaths />
      </div>

      <main className="relative z-10">
        <Hero />
        <Authority />
        <Problems />
        <HowItWorks />
        <Differentiation />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

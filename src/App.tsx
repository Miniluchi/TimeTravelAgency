import Header from './components/Header';
import Hero from './components/Hero';
import Agency from './components/Agency';
import Destinations from './components/Destinations';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e0d0]">
      <Header />
      <main>
        <Hero />
        <Agency />
        <Destinations />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

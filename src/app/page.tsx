
import Hero from '../components/landing/Hero';
import StoryCarousel from '../components/landing/StoryCarousel';
import CTA from '../components/landing/CTA'
import About from '../components/landing/About';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StoryCarousel />
      <About />
      <CTA />
    </div>
  );
}
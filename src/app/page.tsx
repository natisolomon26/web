
import Hero from '../components/landing/Hero';
import StoryCarousel from '../components/landing/StoryCarousel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StoryCarousel />
    </div>
  );
}
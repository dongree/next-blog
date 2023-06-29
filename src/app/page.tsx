import Profile from '@/components/Profile';
import FeaturedPosts from '@/components/FeaturedPosts';
import CarouselPosts from '@/components/CarouselPosts';

export default function Home() {
  return (
    <section>
      <Profile />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}

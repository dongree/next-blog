import { getNonFeaturedPosts } from '@/service/posts';
import MultiCarousel from './MultiCarousel';
import Card from './Card';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section>
      <h2 className="text-lg font-bold my-2">You may Like</h2>
      <MultiCarousel>
        {posts.map(post => (
          <Card key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}

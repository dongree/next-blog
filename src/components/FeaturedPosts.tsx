import PostsGrid from './PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className="text-lg font-bold my-2">Featured Post</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

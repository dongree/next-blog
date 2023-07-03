import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';

export const metadata = {
  title: 'All Posts',
  description: 'Dongree의 Post 페이지입니다.',
};

export default async function Postpage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}

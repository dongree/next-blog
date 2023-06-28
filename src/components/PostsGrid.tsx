import { Post } from '@/service/posts';
import Card from './Card';

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {posts.map(post => (
        <li key={post.path}>
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
}

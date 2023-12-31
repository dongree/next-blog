import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  pre: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then(posts => posts.filter(post => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then(posts => posts.filter(post => !post.featured));
}

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

// export async function getAllPosts(): Promise<Post[]> {
//   const filePath = path.join(process.cwd(), 'public', 'data', 'posts.json');
//   return readFile(filePath, 'utf-8')
//     .then<Post[]>(JSON.parse)
//     .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
// }

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(
    process.cwd(),
    'public',
    'data',
    'posts',
    `${fileName}.md`
  );

  const posts = await getAllPosts();
  const post = posts.find(post => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  const idx = posts.indexOf(post);

  const next = idx > 0 ? posts[idx - 1] : null;
  const pre = idx < posts.length - 1 ? posts[idx + 1] : null;

  const content = await readFile(filePath, 'utf-8');
  return { ...post, content, next, pre };
}

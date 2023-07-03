import PageMover from '@/components/PageMover';
import PostContent from '@/components/PostContent';
import { getFeaturedPosts, getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function Postpage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, pre } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-50 m-4">
      <Image
        src={`/img/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="w-full max-h-[500px]"
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {pre && <PageMover post={pre} type="pre" />}
        {next && <PageMover post={next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map(post => ({
    slug: post.path,
  }));
}

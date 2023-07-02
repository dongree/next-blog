import PageMover from '@/components/PageMover';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

type Props = {
  params: {
    slug: string;
  };
};

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

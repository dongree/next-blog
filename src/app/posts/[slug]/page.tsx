import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import { AiFillCalendar } from 'react-icons/ai';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Postpage({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-50 m-4">
      <Image
        src={`/img/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="w-full max-h-[500px]"
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiFillCalendar />
          <time className="font-semibold ml-2">{date.toString()}</time>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg font-semibold">{description}</p>
        <div className=" h-1 w-40 bg-sky-600 mb-10 mt-3"></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}

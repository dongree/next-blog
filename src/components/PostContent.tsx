import { AiFillCalendar } from 'react-icons/ai';
import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';

type Props = {
  post: PostData;
};

export default function PostContent({ post }: Props) {
  const { title, description, date, content } = post;

  return (
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
  );
}

import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'pre' | 'next';
};
const ICON_CLASS =
  'text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl';

export default function PageMover({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full max-h-56">
      <Image
        className=" w-full opacity-80"
        src={`/img/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full flex justify-around items-center text-white px-8">
        {type === 'pre' && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h2 className=" text-2xl font-bold">{title}</h2>
          <p className="font-semibold">{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}

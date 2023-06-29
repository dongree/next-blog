import Image from 'next/image';

import Link from 'next/link';
import { Post } from '@/service/posts';

type Props = {
  post: Post;
};

export default function Card({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md shadow-lg">
        <Image
          src={`/img/${path}.png`}
          alt={title}
          width={300}
          height={200}
          className="w-full "
        />
        <div className="flex flex-col items-center p-3">
          <time className="self-end">{date.toString()}</time>
          <h3 className="font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className=" bg-green-200 bg-opacity-80	px-2 text-sm">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}

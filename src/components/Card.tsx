import Image from 'next/image';
import cardImg from '../../public/img/review-2021.png';
// import cardImg from '../../public/img/review-2021.png';

import { Card } from './CardBoard';
import Link from 'next/link';

type Props = {
  data: Card;
};

export default function Card({
  data: { title, description, date, category, path },
}: Props) {
  return (
    <Link href="/" className="flex flex-col  shadow-lg">
      <Image
        src={`/img/${path}.png`}
        alt="card"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
      <div className="flex flex-col items-center p-3">
        <p className="self-end">{date}</p>
        <p className="font-bold">{title}</p>
        <p>{description}</p>
        <p className=" bg-green-200 bg-opacity-80	px-2">{category}</p>
      </div>
    </Link>
  );
}

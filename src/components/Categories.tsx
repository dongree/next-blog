import { PropsWithRef } from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center mx-4">
      <h3 className="font-bold text-lg mb-2 border-b border-sky-500">
        Caregory
      </h3>
      <ul className="flex flex-col gap-1">
        {categories.map(category => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              selected === category && 'text-sky-500 font-bold'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}

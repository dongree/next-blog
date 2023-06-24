'use client';
import { useEffect, useState } from 'react';
import Card from './Card';

export type Card = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export default function CardBoard() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('/data/posts.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {cards
        .filter((card: Card) => card.featured)
        .map((card: Card, idx) => {
          return <Card key={idx} data={card} />;
        })}
    </div>
  );
}

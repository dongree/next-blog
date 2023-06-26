import Profile from '@/components/Profile';
import CardBoard from '@/components/CardBoard';

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <Profile />
      <section className="w-[calc(100%_-_5rem)]">
        <p className="text-lg font-bold">Featured Post</p>
        <CardBoard />
      </section>
    </section>
  );
}

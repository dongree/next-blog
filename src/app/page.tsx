import Profile from '@/components/Profile';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Profile />
    </main>
  );
}

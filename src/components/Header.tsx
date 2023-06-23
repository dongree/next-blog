import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between bg-gray-100 px-10 py-5">
      <Link href="/" className=" font-bold text-xl">
        dongrees blog
      </Link>
      <nav>
        <Link href="/" className="px-2">
          home
        </Link>
        <Link href="/about" className="px-2">
          about
        </Link>
        <Link href="/posts" className="px-2">
          posts
        </Link>
        <Link href="/contact" className="px-2">
          contact
        </Link>
      </nav>
    </header>
  );
}

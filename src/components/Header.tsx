import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 px-10 py-5">
      <Link href="/">
        <h1 className=" font-bold text-xl">{"dongree's blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}

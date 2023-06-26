import Image from 'next/image';
import profileImg from '../../public/img/profile.jpg';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        src={profileImg}
        alt="profile"
        height={220}
        className="mx-auto rounded-full aspect-square	object-cover"
        priority
      />
      <h2 className=" text-xl font-bold mt-2">Hi I&apos;m dongree</h2>
      <h3 className="font-semibold">Front-end Developer</h3>
      <p>꾸준함을 추구하는 dongree</p>
      <Link href="/contact">
        <button className="bg-yellow-500 px-5 py-1 rounded-2xl font-bold mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}

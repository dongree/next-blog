import Image from 'next/image';
import profileImg from '../../public/img/profile.jpg';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="flex flex-col items-center m-5">
      <Image
        src={profileImg}
        alt="profile"
        height={200}
        className="rounded-full aspect-square	object-cover"
      />
      <p className=" text-xl font-bold">Hi I&apos;m dongree</p>
      <p className="font-semibold">Front-end Developer</p>
      <p>꾸준함을 추구하는 dongree</p>
      <Link
        href="/contact"
        className="bg-yellow-500 px-5 py-1 rounded-2xl font-bold"
      >
        Contact Me
      </Link>
    </section>
  );
}

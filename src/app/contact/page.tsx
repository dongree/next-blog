import ContactForm from '@/components/ContactForm';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center my-2">
      <h3 className="text-2xl font-bold my-2">Contact Me</h3>
      <p>info@dream-coding.com</p>
      <ul className="flex gap-2 text-2xl my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h3 className="text-2xl font-bold my-4">Or Send me an email</h3>
      <ContactForm />
    </section>
  );
}

'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

type Data = {
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [data, setData] = useState<Data>({
    email: '',
    subject: '',
    message: '',
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData(preData => ({ ...preData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setBanner({ message: '성공했어!', state: 'success' });
    setData({
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        className="flex flex-col bg-blue-950 p-5 rounded-md  w-full gap-1 my-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="text-white font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          required
          autoFocus
          onChange={handleChange}
        />
        <label htmlFor="subject" className="text-white font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={data.subject}
          onChange={handleChange}
        />
        <label htmlFor="message" className="text-white font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={data.message}
          onChange={handleChange}
        />
        <button className=" bg-yellow-400 text-black font-bold hover:bg-yellow-500">
          Submit
        </button>
      </form>
    </section>
  );
}

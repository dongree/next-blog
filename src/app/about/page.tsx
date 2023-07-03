import Profile from '@/components/Profile';

export const metadata = {
  title: 'About Me',
  description: 'Dongree의 About 페이지입니다.',
};

const TITLE_CLASS = 'font-bold text-xl my-1';

export default function AboutPage() {
  return (
    <section>
      <Profile />
      <div className="bg-gray-100 flex flex-col items-center rounded-md p-5 shadow-md my-5">
        <h3 className={TITLE_CLASS}>Who Am I?</h3>
        <p className="text-center">
          꾸준한 프론트엔드 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h3 className={TITLE_CLASS}>Career</h3>
        <p className="text-center">
          소프트웨어마에스트로 14기(-Now)
          <br /> UMC 2기(2022)
        </p>
        <h3 className={TITLE_CLASS}>Skills</h3>
        <p className="text-center">
          React, Node, Next <br /> Git, Clean Code <br /> VS Code, InteliJ
        </p>
      </div>
    </section>
  );
}

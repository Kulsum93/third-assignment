import Image from "next/image";
import dubai from "../public/dubai.jpg";
import istanbul from "../public/istanbul.jpg";
import photographyImage from "../public/photographyimage1.jpg";
import chicago from "../public/chicago.jpg";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-200 h-screen flex-col items-center justify-center">
        <h1 className="text-6xl p-3 m-4">Welcome to my Travel Blog</h1>
        <p className="text-lg text-center">Here Is MY Work</p>
        <Image src="/photographyimage1.jpg" alt="photographyimage" width={800} height={700} />
      </section>

      <section className="text-center">
        <h1 className="text-6xl">About Me</h1>
        <p className="text-lg">
          Hello! My name's Kulsum JB, I am a professional photographer who loves to travel around the world
          using my Canon EOS R5 Mark II with a specification of Autofocus: 1,053-area AF, eye-control AF. 
          Screen type: 3.2-inch tilting touchscreen, 2.1m-dots with a travel experience of about 12 years.
        </p>
      </section>

      <section>
        <h1 className="text-6xl text-center p-10">Skills</h1>
        <ul className="text-lg text-center">
          <li className="p-6">Photography</li>
          <li className="p-6">Graphics Designing</li>
          <li className="p-6">Interior Designing</li>
          <li className="p-6">Traveling</li>
          <li className="p-6">Freelancing</li>
        </ul>
      </section>

      <section className="text-center">
      <h1  className="text-6xl text-center p-6 "> E<span className="text-rose-600">X</span>perience</h1>
        <h2 className="text-rose-600 text-lg font-bold">I have traveled to Dubai</h2>
        <Image src="/dubai.jpg" alt="Dubai" width={800} height={700} />
        
        <h2 className="text-rose-600 text-lg font-bold ">I have traveled to Chicago, US</h2>
        <Image src="/chicago.jpg" alt="Chicago" width={800} height={700} />
        
        <h2 className="text-rose-600 text-lg font-bold">I have travelled Istanbul</h2>
        <Image src="/istanbul.jpg" alt="Istanbul" width={800} height={700} />
        
      </section>
    </>
  );
};

export default Hero;

    

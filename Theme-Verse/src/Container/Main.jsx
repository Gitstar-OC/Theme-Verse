import HomeLogo from "../assets/HomeLogo.svg";
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const paragraph = document.getElementById('hover-paragraph');
    const words = paragraph.innerText.split(' ');
    paragraph.innerHTML = words.map(word => {
      if (['designer', 'developer', 'entrepreneur'].includes(word.toLowerCase().replace(/[.,!]/g, ''))) {
        return `<span class='hover-word special-word'>${word}</span>`;
      }
      return `<span class='hover-word'>${word}</span>`;
    }).join(' ');

    const image = document.getElementById('image');
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const moveX = (x / window.innerWidth - 0.5) * 30;
      const moveY = (y / window.innerHeight - 0.5) * 30;
      image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    };
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section
      className="h-[100vh] theme-bg flex items-center w-full max-w-screen-xl mx-auto px-4 relative overflow-hidden"
      id="section"
    >
      <div
        className="flex flex-col md:flex-row items-center w-full"
        style={{ marginLeft: "30px" }}
      >
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="font-cF text-[64px] font-normal leading-normal text-heading mb-4 relative">
            Theme Verse
            <svg className="absolute bottom-[-10px] left-0 w-[50%] h-5" viewBox="0 0 50 20" preserveAspectRatio="none">
              <path d="M0 10 C 10 20, 30 0, 50 10" stroke="url(#rainbow)" strokeWidth="5" fill="transparent" />
              <defs>
                <linearGradient id="rainbow">
                  <stop offset="0%" stopColor="#FF0000" />
                  <stop offset="16.6%" stopColor="#FF7F00" />
                  <stop offset="33.3%" stopColor="#FFFF00" />
                  <stop offset="50%" stopColor="#00FF00" />
                  <stop offset="66.6%" stopColor="#0000FF" />
                  <stop offset="83.3%" stopColor="#4B0082" />
                  <stop offset="100%" stopColor="#8B00FF" />
                </linearGradient>
              </defs>
            </svg>
          </h1>
          <p id="hover-paragraph" className="font-cL text-[32px] font-normal leading-normal mb-8 text-border dark:text-third light:text-[#0F94B2]">
            Welcome to our website! Explore our services, discover our work, and
            get inspired. Whether you’re a designer, developer, or entrepreneur,
            you can share your Figma design with us by providing a link. Contact
            us today to turn your vision into reality! Our team of experts will
            transform your Figma files into a stunning, fully functional website
            that reflects your unique style and brand.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0 md:ml-8">
          <img
            src={HomeLogo}
            alt="Example"
            id="image"
            className="rounded-[25px] border-[3px] border-[#0F94B2] dark:border-third transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
        </div>
      </div>
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>
    </section>
  );
};

export default Main;

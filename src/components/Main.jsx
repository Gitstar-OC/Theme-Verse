import { useEffect } from 'react';
import HomeLogo from '../assets/HomeLogo.svg';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure you import the CSS file

const Main = () => {
  useEffect(() => {
    const onMouseMove = (e) => {
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const contentElement = document.getElementById('content');
    const imageElement = document.getElementById('image-container');
    contentElement.classList.add('content-slide-in');
    imageElement.classList.add('image-slide-in');
  }, []);

  const words = [
    "Welcome", "!!", "Theme", "Verse", "is", "a", "platform", "where", "you", "can", "share", "your", "Figma", "design",
    "with", "us", "by", "providing", "a", "link", "our", "team", "will", "see", "it,", "and", "provide", "you", "it's",
    "complete", "code", "Contact", "Today", "!!"
  ];

  const renderWord = (word, index) => {
    const cleanedWord = word.replace(/[.,!]/g, '');
    if (['Theme', 'Verse', 'Contact', 'Today'].includes(cleanedWord)) {
      if (cleanedWord === 'Contact' || cleanedWord === 'Today') {
        return (
          <Link key={index} to="/contact" className="hover-word special-word">
            {word}
          </Link>
        );
      }
      return <span key={index} className="hover-word special-word">{word}</span>;
    }
    return <span key={index} className="hover-word">{word}</span>;
  };

  return (
    <section
      className="pt-[55px] h-[calc(100vh-55px)] bg-light-bg dark:bg-dark-bg flex items-center w-full max-w-screen-xl mx-auto px-4 relative mb-0"
      id="section"
    >
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div className="parallax-container absolute inset-0 overflow-hidden">
        <div className="parallax-layer layer1" data-speed="2"></div>
        <div className="parallax-layer layer2" data-speed="5"></div>
      </div>
      <div className="parallax-content flex flex-col sm:flex-row items-center w-full z-10 relative">
        <div id="content" className="text-center sm:text-left w-full sm:w-1/2 mb-0 sm:mb-0 sm:mr-4 flex flex-col">
          <h1 className="font-cF text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-normal text-heading mb-4 relative inline-block self-start break-words">
            Theme Verse
            <svg className="absolute bottom-[-10px] left-0 w-[100%] h-5" viewBox="0 0 50 20" preserveAspectRatio="none">
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
          <p id="hover-paragraph" className="font-cL text-[16px] md:text-[24px] lg:text-[32px] font-normal leading-normal mb-8 text-black dark:text-white light:text-[#0F94B2] break-words">
            {words.map((word, index) => renderWord(word, index))}
          </p>
        </div>
        <div id="image-container" className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-0 sm:mt-0">
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="relative w-[400px] h-[360px] rounded-[25px] bg-light-image-bg dark:bg-dark-image-bg transition-colors duration-300">
              <img
                src={HomeLogo}
                alt="Logo"
                id="image"
                className="rounded-[25px] border-[5px] border-[#0F94B2] dark:border-[#A6D2EA] absolute top-[50%] right-[-10%] w-[100%] h-[100%] transform -translate-y-1/2 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Main;

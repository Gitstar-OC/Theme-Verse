import HomeLogo from "../assets/HomeLogo.svg";
import { useEffect } from "react";
import { Tilt } from 'react-tilt';

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

  return (
    <section
      className="pt-[55px] h-[calc(100vh-55px)] bg-light-bg dark:bg-dark-bg flex items-center w-full max-w-screen-xl mx-auto px-4 relative"
      id="section"
    >
      <div className="parallax-container absolute inset-0 overflow-hidden">
        <div className="parallax-layer layer1" data-speed="2"></div>
        <div className="parallax-layer layer2" data-speed="5"></div>
      </div>
      <div className="parallax-content flex flex-col sm:flex-row items-center w-full z-10 relative">
        <div id="content" className="text-center sm:text-left w-full sm:w-1/2 mb-8 sm:mb-0 sm:mr-4 flex flex-col">
          <h1 className="font-cF text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-normal text-heading mb-4 relative inline-block self-start break-words text-[#1A3DF8]">
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
          <p id="hover-paragraph" className="font-cL text-[16px] md:text-[24px] lg:text-[32px] font-normal leading-normal mb-8 text-border dark:text-third light:text-[#0F94B2] break-words text-[#A6D2EA]">
            Welcome !! Explore our services, discover our work, and get inspired. Whether you’re a designer, developer, or entrepreneur, you can share your Figma design with us by providing a link. Contact us today to turn your vision into reality! Our team of experts will transform your Figma files into a stunning, fully functional website that reflects your unique style and brand.
          </p>
        </div>
        <div id="image-container" className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-8 sm:mt-0">
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="relative w-[400px] h-[360px] rounded-[25px] m-[14px_0_100px_0] bg-light-image-bg dark:bg-dark-image-bg transition-colors duration-300">
              <img
                src={HomeLogo}
                alt="Logo"
                id="image"
                className="rounded-[25px] border-[3px] border-[#A6D2EA] dark:border-[#4B0082] absolute top-[50%] right-[-10%] w-[100%] h-[100%] transform -translate-y-1/2 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Main;





//  import HomeLogo from "../assets/HomeLogo.svg";
// import { useEffect } from "react";
// import { Tilt } from 'react-tilt'; // Import Tilt using named export

// const Main = () => {
//   useEffect(() => {
//     const paragraph = document.getElementById('hover-paragraph');
//     const words = paragraph.innerText.split(' ');
//     paragraph.innerHTML = words.map(word => {
//       if (['designer', 'developer', 'entrepreneur'].includes(word.toLowerCase().replace(/[.,!]/g, ''))) {
//         return `<span class='hover-word special-word'>${word}</span>`;
//       }
//       return `<span class='hover-word'>${word}</span>`;
//     }).join(' ');

//     const onMouseMove = (e) => {
//       const layers = document.querySelectorAll('.parallax-layer');
//       layers.forEach(layer => {
//         const speed = layer.getAttribute('data-speed');
//         const x = (window.innerWidth - e.pageX * speed) / 100;
//         const y = (window.innerHeight - e.pageY * speed) / 100;
//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//       });
//     };

//     document.addEventListener('mousemove', onMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);
//     };
//   }, []);

//   return (

//     <section
//       className="h-[100vh] bg-light-bg dark:bg-dark-bg flex items-center w-full max-w-screen-xl mx-auto px-4 relative overflow-hidden"
//       id="section"
//     >
//       <div className="parallax-container absolute inset-0 overflow-hidden">
//         <div className="parallax-layer layer1" data-speed="2"></div>
//         <div className="parallax-layer layer2" data-speed="5"></div>
//       </div>
//       <div className="parallax-content flex flex-col sm:flex-row items-center w-full z-10 relative">
//         <div className="text-center sm:text-left w-full sm:w-1/2 mb-8 sm:mb-0 sm:mr-8">
//           <h1 className="font-cF text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-normal text-heading mb-4 relative">
//             Theme Verse
//             <svg className="absolute bottom-[-10px] left-0 w-[50%] h-5" viewBox="0 0 50 20" preserveAspectRatio="none">
//               <path d="M0 10 C 10 20, 30 0, 50 10" stroke="url(#rainbow)" strokeWidth="5" fill="transparent" />
//               <defs>
//                 <linearGradient id="rainbow">
//                   <stop offset="0%" stopColor="#FF0000" />
//                   <stop offset="16.6%" stopColor="#FF7F00" />
//                   <stop offset="33.3%" stopColor="#FFFF00" />
//                   <stop offset="50%" stopColor="#00FF00" />
//                   <stop offset="66.6%" stopColor="#0000FF" />
//                   <stop offset="83.3%" stopColor="#4B0082" />
//                   <stop offset="100%" stopColor="#8B00FF" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </h1>
//           <p id="hover-paragraph" className="font-cL text-[16px] md:text-[24px] lg:text-[32px] font-normal leading-normal mb-8 text-border dark:text-third light:text-[#0F94B2]">
//             Welcome to our website! Explore our services, discover our work, and
//             get inspired. Whether you’re a designer, developer, or entrepreneur,
//             you can share your Figma design with us by providing a link. Contact
//             us today to turn your vision into reality! Our team of experts will
//             transform your Figma files into a stunning, fully functional website
//             that reflects your unique style and brand.
//           </p>
//         </div>
//         <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mt-8 sm:mt-0">
//           <Tilt className="Tilt" options={{ max : 25 }}>
//             <img
//               src={HomeLogo}
//               alt="Example"
//               id="image"
//               className="w-[100%] sm:w-[50%] md:w-[40%] lg:w-[120%] rounded-[25px] border-[3px] border-[#0F94B2] dark:border-third transition-transform duration-500 hover:scale-105"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main;

// const Main = () => {
//   return (
// <div className="bg-[#000000] relative p-[166px_143px_162px_143px] w-[fit-content] box-sizing-border">
// <div className="relative flex flex-row box-sizing-border">
//   <div className="m-[0_109.7px_0_0] flex flex-col box-sizing-border">
//     <div className="m-[0_0_27px_0] inline-block self-start break-words font-cF font-normal text-[64px] text-[#1A3DF8]">
//       Theme Verse
//     </div>
//     <span className="break-words font-cL font-normal text-[32px] text-[#A6D2EA]">
//             Welcome to our website! Explore our services, discover our work, and get inspired. Whether you’re a designer, developer, or entrepreneur, you can share your Figma design with us by providing a link. Contact us today to turn your vision into reality! Our team of experts will transform your Figma files into a stunning, fully functional website that reflects your unique style and brand.
//     </span>
//   </div>
//   <div className="rounded-[25px] bg-[#000000] m-[14px_0_100px_0] w-[380px] h-[340px]">
//   </div>
// </div>
// <div className="rounded-[25px] border-[3px_solid_#A6D2EA] absolute top-[180px] right-[191px] w-[373px] h-[335px]">
//   <img src={HomeLogo} alt="Logo" />
// </div>
// </div>
//   )
// }

// export default Main;



{/**import HomeLogo from "../assets/HomeLogo.svg";
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

    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
            out_mode: 'bounce',
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#0F94B2',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
        },
      });
    }

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

export default Main; */}
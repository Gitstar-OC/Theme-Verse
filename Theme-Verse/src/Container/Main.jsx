import HomeLogo from "../assets/HomeLogo.svg";
// import ExampleImage from "../assets/example-image.png"; // Ensure this path is correct

const Main = () => {
  return (
    <section className='h-[100vh] theme-bg flex items-center justify-center' id='section'>
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl mx-auto px-4'>
        <div className='text-center md:text-left md:w-1/2 mb-8 md:mb-0'>
          <img src={HomeLogo} alt="Home Logo" className='mx-auto md:mx-0 mb-8 md:mb-12' />
          <h1 className='font-cF text-[64px] font-normal leading-normal text-heading mb-4'>Theme Verse</h1>
          <p className='font-cL text-[32px] font-normal leading-normal mb-8 dark:text-third light:text-[#0F94B2]'>
            Welcome to our website! Explore our services, discover our work, and get inspired. Whether you’re a designer, developer, or entrepreneur, you can share your Figma design with us by providing a link. Contact us today to turn your vision into reality! Our team of experts will transform your Figma files into a stunning, fully functional website that reflects your unique style and brand.
          </p>
        </div>
        <div className='relative md:w-1/2'>
          <img
            src={HomeLogo}
            alt="Example"
            className='rounded-[25px] border-3 border-third'
          />
          <div className='absolute inset-0 rounded-[25px] bg-third opacity-0 md:opacity-0 light:bg-[#A6D2EA] light:opacity-50' />
        </div>
      </div>
    </section>
  );
};

export default Main;

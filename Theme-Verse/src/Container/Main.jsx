import HomeLogo from "../assets/HomeLogo.svg";

const Main = () => {
  return (
    <section
      className="h-[100vh] theme-bg flex items-center w-full max-w-screen-xl mx-auto px-4"
      id="section"
    >
      <div
        className="flex flex-col md:flex-row items-center w-full"
        style={{ marginLeft: "30px" }}
      >
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="font-cF text-[64px] font-normal leading-normal text-heading mb-4">
            Theme Verse
          </h1>
          <p className="font-cL text-[32px] font-normal leading-normal mb-8 text-border dark:text-third light:text-[#0F94B2] hover:text-primary hover:text-hover-lg">
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
            className="rounded-[25px] border-[3px] border-[#0F94B2] dark:border-third"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;



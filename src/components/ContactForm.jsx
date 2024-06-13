import { useState, useRef, useEffect } from "react";
import { Profile } from "./Exports";
import { FaPersonCircleQuestion, FaRegBuilding } from "react-icons/fa6";
import { IoMdPerson, IoIosLink, IoIosChatboxes } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import "../index.css"; // Ensure you import the CSS file

const CustomInput = ({ icon: Icon, placeholder, type, name, isFocused, setIsFocused, hasError }) => (
  <div className="relative w-full mb-2 flex-1">
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className="inputItem input100 w-full h-[3rem] bg-gray-200 text-black text-[1.25rem] rounded-[10px] pl-[2.5rem] pr-[30px] font-cL placeholder:font-cL placeholder:text-[20px] placeholder:text-slate-800"
      onFocus={() => setIsFocused(name)}
      onBlur={() => setIsFocused('')}
    />
    <ErrorMessage name={name} component="div" className="text-red-600" />
    <span className={`symbol-input100 absolute left-0 bottom-0 h-full flex items-center pl-2 pointer-events-none transition-all duration-200 ${hasError ? "text-[#FF3333]" : isFocused ? "text-[#1A3DF8]" : "text-slate-800"}`}>
      <Icon />
    </span>
  </div>
);

const CustomTextarea = ({ name, placeholder, isFocused, setIsFocused, hasError }) => (
  <div className="relative w-full mb-2 flex-1">
    <Field
      as="textarea"
      name={name}
      placeholder={placeholder}
      className="inputItem input100 w-full h-[10rem] bg-gray-200 text-black text-[1.25rem] rounded-[10px] pl-[2.5rem] pr-[30px] pt-[1.5rem] font-cL placeholder:font-cL placeholder:text-[20px] placeholder:text-slate-800"
      onFocus={() => setIsFocused(name)}
      onBlur={() => setIsFocused('')}
    />
    <ErrorMessage name={name} component="div" className="text-red-600" />
    <span className={`symbol-input100 absolute left-0 top-0 h-full flex items-center pl-2 pt-[1.5rem] pointer-events-none transition-all duration-200 ${hasError ? "text-[#FF3333]" : isFocused ? "text-[#1A3DF8]" : "text-slate-800"}`}>
      <IoIosChatboxes />
    </span>
  </div>
);

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'Name must be less than 25 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  position: Yup.string()
    .required('Position is required'),
  company: Yup.string()
    .required('Company is required'),
  figmaLink: Yup.string()
    .url('Invalid URL')
    .required('Figma link is required'),
  message: Yup.string()
    .min(40, 'Message must be at least 40 words')
    .required('Message is required'),
});

const ContactForm = () => {
  const sectionRef = useRef(null);
  const seeAllRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (seeAllRef.current) {
      observer.observe(seeAllRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (seeAllRef.current) {
        observer.unobserve(seeAllRef.current);
      }
    };
  }, []);

  return (
    <div className="theme-bg  flex flex-col items-center justify-start mb-20 mt-20" id="section">
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div ref={sectionRef} className={`rectangleDiv transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} mb-8 mt-8 flex items-center justify-center`}>
        <div className="projectItem text-[3rem] text-center font-cF">Contact</div>
      </div>

      <div className="flex space-x-10">
        <div className="shadow-lg rounded-l-[25px] bg-gray-800 bg-opacity-20 relative p-10 w-[711px] flex flex-col space-y-8 contactDiv">
          <div className="text-[3rem] font-cF text-black dark:text-white">Get In Touch</div>
          <Formik
            initialValues={{ name: '', email: '', position: '', company: '', figmaLink: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('Form data', values);
              // Handle form submission
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="flex flex-col space-y-6">
                <div className="flex space-x-6">
                  <CustomInput
                    icon={IoMdPerson}
                    placeholder="Name"
                    type="text"
                    name="name"
                    isFocused={isFocused === 'name'}
                    setIsFocused={setIsFocused}
                    hasError={errors.name && touched.name}
                  />
                  <CustomInput
                    icon={IoMail}
                    placeholder="Email"
                    type="email"
                    name="email"
                    isFocused={isFocused === 'email'}
                    setIsFocused={setIsFocused}
                    hasError={errors.email && touched.email}
                  />
                </div>
                <div className="flex space-x-6">
                  <CustomInput
                    icon={FaPersonCircleQuestion}
                    placeholder="Position"
                    type="text"
                    name="position"
                    isFocused={isFocused === 'position'}
                    setIsFocused={setIsFocused}
                    hasError={errors.position && touched.position}
                  />
                  <CustomInput
                    icon={FaRegBuilding}
                    placeholder="Company"
                    type="text"
                    name="company"
                    isFocused={isFocused === 'company'}
                    setIsFocused={setIsFocused}
                    hasError={errors.company && touched.company}
                  />
                </div>
                <CustomInput
                  icon={IoIosLink}
                  placeholder="https://www.figma.com/"
                  type="text"
                  name="figmaLink"
                  isFocused={isFocused === 'figmaLink'}
                  setIsFocused={setIsFocused}
                  hasError={errors.figmaLink && touched.figmaLink}
                />
                <CustomTextarea
                  name="message"
                  placeholder="Message"
                  isFocused={isFocused === 'message'}
                  setIsFocused={setIsFocused}
                  hasError={errors.message && touched.message}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-[15px] p-2 border-2 cursor-pointer border-[#0f94b2] bg-[#a6d2ea] dark:border-[#a6d2ea] dark:bg-[#000000] mx-40"
                  id="send"
                  disabled={isSubmitting}
                >
                  <div className="projectItem animate-bounce">
                    <BsFillSendFill className="mr-2 mb-3 text-[2rem]" />
                    <span className="projectItem text-[2.5rem] text-center font-cL">Send</span>
                  </div>
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="shadow-[0px_10px_15px_-3px_#1A3DF8] rounded-r-[25px] bg-[rgba(74,74,74,0.2)] relative flex flex-col p-8 w-[361px]">
          <div className="self-center w-[200px] h-[196.5px] flex items-center justify-center">
            <Profile size="small" />
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[28px] text-black dark:text-white flex items-center">
              <IoMail className="mr-2" /> <span>Mail Me</span>
            </div>
            <div className="flex items-center text-black dark:text-white">
              <h3 style={{ fontSize: "1.5rem" }} className="font-cL">chandankarom07@gmail.com</h3>
            </div>
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[1.75rem] text-black dark:text-white">Follow On Github</div>
            <a href="https://github.com/Gitstar-OC" className="flex items-center text-[1.5rem] font-cL text-black dark:text-white cursor-pointer">
              <FaGithub className="mr-2 mb-3" /> Gitstar-OC
            </a>
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[1.75rem] text-black dark:text-white">Reach me on Social Media</div>
            <a href="https://www.instagram.com/chandankar_om/" className="flex items-center text-[1.5rem] font-cL text-black dark:text-white cursor-pointer">
              <FaInstagram className="mr-2 mb-3" /> Instagram
            </a>
            <a href="https://www.linkedin.com/in/om-chandankar" className="flex items-center mt-2 text-[1.5rem] font-cL text-black dark:text-white cursor-pointer">
              <FaLinkedin className="mr-2 mb-3" /> LinkedIn
            </a>
            <a href="https://x.com/Om_Chandankar" className="flex items-center mt-2 text-[1.5rem] font-cL text-black dark:text-white cursor-pointer">
              <FaTwitter className="mr-2 mb-3" /> Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

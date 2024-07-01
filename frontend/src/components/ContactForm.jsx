import { useState, useRef, useEffect } from "react";
import { Profile } from "./Exports";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPersonCircleQuestion, FaRegBuilding } from "react-icons/fa6";
import { IoMdPerson, IoIosLink, IoIosChatboxes } from "react-icons/io";

import { BsFillSendFill } from "react-icons/bs";
import { SuccessfulMessage } from "../Messages/Exports"; // Corrected import statement
import { IoMail } from "react-icons/io5"
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import axios from 'axios';


const CustomInput = ({
  icon: Icon,
  placeholder,
  type,
  name,
  isFocused,
  setIsFocused,
  hasError,
}) => (
  <div className="relative w-full  mb-2 flex-1">
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className="inputItem w-full h-[3.5rem] bg-gray-200 text-black text-[1.5rem] rounded-[10px] pl-[3rem] pr-[30px] font-cL placeholder:font-cL placeholder:text-[1.5rem] placeholder:text-slate-400"
      onFocus={() => setIsFocused(name)}
      onBlur={() => setIsFocused("")}
    />
    <ErrorMessage name={name} component="div" className="text-red-600 mt-2" />
    <span
      className={`absolute left-2 bottom-2 h-full flex items-center transition-all duration-200 ${
        hasError
          ? "text-[#FF3333]"
          : isFocused
          ? "text-[#1A3DF8]"
          : "text-slate-800"
      }`}
    >
      <Icon className="text-[2rem]" />
    </span>
  </div>
);

const CustomTextarea = ({
  name,
  placeholder,
  isFocused,
  setIsFocused,
  hasError,
}) => (
  <div className="relative w-full mb-2 flex-1">
    <Field
      as="textarea"
      name={name}
      placeholder={placeholder}
      className="inputItem  w-full h-[10rem] bg-gray-200 text-black text-[1.5rem] rounded-[10px] pl-[3rem] pr-[30px] pt-[2rem] font-cL placeholder:font-cL placeholder:text-[1.5rem] placeholder:text-slate-400"
      onFocus={() => setIsFocused(name)}
      onBlur={() => setIsFocused("")}
    />
    <ErrorMessage name={name} component="div" className="text-red-600 mt-2" />
    <span
      className={`symbol-input100 absolute left-2 top-2 h-full flex items-start pt-[1.5rem] transition-all duration-200 ${
        hasError
          ? "text-[#FF3333]"
          : isFocused
          ? "text-[#1A3DF8]"
          : "text-slate-800"
      }`}
    >
      <IoIosChatboxes className="text-[2rem]" />
    </span>
  </div>
);

const SocialMediaInput = ({
  platform,
  setPlatform,
  name,
  isFocused,
  setIsFocused,
  hasError,
}) => {
  const platformIcons = {
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    github: FaGithub,
  };

  const platformPlaceholders = {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/in/",
    twitter: "https://x.com/",
    github: "https://github.com/",
  };

  const Icon = platformIcons[platform];

  const inputRef = useRef(null);
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  useEffect(() => {
    if (platform && inputRef.current) {
      const link = platformPlaceholders[platform];
      setFieldValue(name, link);
      setTimeout(() => {
        inputRef.current.setSelectionRange(link.length, link.length);
        inputRef.current.focus();
      }, 0);
    }
  }, [platform, setFieldValue, name]);

  return (
    <div className="relative w-full mb-4 flex-1 overflow-hidden">
      <div className="flex items-center">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="bg-gray-200 text-black text-[1.5rem] rounded-[10px] h-[3rem] mr-2 font-cL"
        >
          <option value="" disabled>
            Select Platform
          </option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">LinkedIn</option>
          <option value="twitter">Twitter</option>
          <option value="github">GitHub</option>
        </select>
        <div className="relative flex-1">
          <input
            {...field}
            ref={inputRef}
            type="text"
            className="inputItem input100 h-[3rem] w-full bg-gray-200 text-black text-[1.25rem]  rounded-[10px] pl-[10px] font-cL"
            onFocus={() => setIsFocused(name)}
            onBlur={() => setIsFocused("")}
          />
        </div>
      </div>
      <ErrorMessage name={name} component="div" className="text-red-600 mt-2" />
      {Icon && (
        <span
          className={`symbol-input100 absolute left-28 bottom-1 h-full flex items-center transition-all duration-200 ${
            hasError
              ? "text-[#FF3333]"
              : isFocused
              ? "text-[#1A3DF8]"
              : "text-slate-800"
          }`}
        >
          <Icon className="text-[1.5rem]" />
        </span>
      )}
    </div>
  );
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name must be less than 25 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  socialMedia: Yup.string().required("Social media username is required").max(45, "Username should be under 45 characters"),
  position: Yup.string().required("Position is required").max(30, "Maximum number of characters should be 30"),
  company: Yup.string().required("Company is required").max(30, "Maximum number of characters should be 30"),
  figmaLink: Yup.string().url("Invalid URL").max(30, "The link is too long, try it making short using link shortner"), // Figma link is optional
  message: Yup.string()
    .min(40, "Message must be at least 40 characters")
    .required("Message is required")
    .max(150, "Sorry, Your message is too long!! Make it short and sweet. I will reply you back"),
});

const ContactForm = () => {
  // existing state and refs
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState("");
  const [platform, setPlatform] = useState("");
  const [formError, setFormError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccessMessage(false);
  };

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="theme-bg flex flex-col items-center justify-start pb-20 mt-20" id="section">
      <div className="backgroundAnim backgroundAnim1"></div>
      <div className="backgroundAnim backgroundAnim2"></div>
      <div className="backgroundAnim backgroundAnim3"></div>
      <div className="backgroundAnim backgroundAnim4"></div>
      <div className="backgroundAnim backgroundAnim5"></div>
      <div
        ref={sectionRef}
        className={`rectangleDiv transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } mb-8 mt-8 flex items-center justify-center`}
      >
        <div className="projectItem text-[3rem] text-center font-cF">Contact</div>
      </div>

      <div className="flex space-x-10 mt-10">
        <div className="shadow-lg rounded-l-[25px] bg-gray-800 bg-opacity-20 relative p-10 w-[711px] flex flex-col space-y-8 contactDiv content-slide-in">
          <div className="text-[3rem] font-cF text-black dark:text-white">Get In Touch</div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              socialMedia: "",
              position: "",
              company: "",
              figmaLink: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              axios.post('http://127.0.0.1:5000/api/contact', values)
                .then(response => {
                  console.log(response.data);
                  setShowSuccessMessage(true);
                  resetForm();
                  setFormError("");
                })
                .catch(error => {
                  if (error.response && error.response.data) {
                    setFormError(error.response.data.error);
                  } else {
                    setFormError("There was an error submitting the form!");
                    console.log(error)
                  }
                  console.error('There was an error submitting the form!', error);
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
              // setTimeout(() => {
              //   console.log(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              //   setShowSuccessMessage(true);
              //   resetForm();
              // }, 400);
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col space-y-4">
                <CustomInput
                  icon={IoMdPerson}
                  placeholder="Name"
                  type="text"
                  name="name"
                  isFocused={isFocused === "name"}
                  setIsFocused={setIsFocused}
                  hasError={errors.name && touched.name}
                />
                <CustomInput
                  icon={IoMail}
                  placeholder="Email"
                  type="email"
                  name="email"
                  isFocused={isFocused === "email"}
                  setIsFocused={setIsFocused}
                  hasError={errors.email && touched.email}
                />
                <SocialMediaInput
                  platform={platform}
                  setPlatform={setPlatform}
                  name="socialMedia"
                  isFocused={isFocused === "socialMedia"}
                  setIsFocused={setIsFocused}
                  hasError={errors.socialMedia && touched.socialMedia}
                />
                <CustomInput
                  icon={FaPersonCircleQuestion}
                  placeholder="Position"
                  type="text"
                  name="position"
                  isFocused={isFocused === "position"}
                  setIsFocused={setIsFocused}
                  hasError={errors.position && touched.position}
                />
                <CustomInput
                  icon={FaRegBuilding}
                  placeholder="Company"
                  type="text"
                  name="company"
                  isFocused={isFocused === "company"}
                  setIsFocused={setIsFocused}
                  hasError={errors.company && touched.company}
                />
                <CustomInput
                  icon={IoIosLink}
                  placeholder="https://www.figma.com/"
                  type="text"
                  name="figmaLink"
                  isFocused={isFocused === "figmaLink"}
                  setIsFocused={setIsFocused}
                  hasError={errors.figmaLink && touched.figmaLink}
                />
                <CustomTextarea
                  name="message"
                  placeholder="Message"
                  isFocused={isFocused === "message"}
                  setIsFocused={setIsFocused}
                  hasError={errors.message && touched.message}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-[15px] p-2 border-2 cursor-pointer border-[#0f94b2] bg-[#a6d2ea] dark:border-[#a6d2ea] dark:bg-[#000000] mx-40"
                  id="send"
                >
                  <div className="projectItem icon-bounce">
                    <BsFillSendFill className="mr-2 mb-3 text-[2rem]" />
                    <span className="projectItem text-[2.5rem] text-center font-cL">Send</span>
                  </div>
                </button>
                <div className="text-red-500">
                  {formError} {/* Display form error */}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="shadow-[0px_10px_15px_-3px_#1A3DF8] rounded-r-[25px] bg-[rgba(74,74,74,0.2)] relative flex flex-col p-8 w-[361px] image-slide-in">
          <div className="self-center w-[200px] h-[196.5px] flex items-center justify-center">
            <Profile size="small" />
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[28px] text-black dark:text-white flex items-center">
              <IoMail className="mr-2" /> <span>Mail Me</span>
            </div>
            <div className="flex items-center text-black dark:text-white">
              <h3 style={{ fontSize: "1.5rem" }} className="font-cL">oc@theme-verse.com</h3>
            </div>
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[1.75rem] text-black dark:text-white">Follow On Github</div>
            <a
              href="https://github.com/Gitstar-OC"
              className="flex items-center text-[1.5rem] font-cL text-black dark:text-white cursor-pointer hover:underline dark:hover:text-secondary "
            >
              <FaGithub className="mr-2 mb-3" /> Gitstar-OC
            </a>
          </div>
          <div className="bg-[#1A3DF8] my-8 w-full h-[1px]"></div>
          <div className="flex flex-col">
            <div className="mb-4 font-cF text-[1.75rem] text-black dark:text-white">Reach me on Social Media</div>
            <a
              href="https://www.instagram.com/chandankar_om/"
              className="flex items-center text-[1.5rem] font-cL text-black dark:text-white cursor-pointer hover:underline dark:hover:text-secondary"
            >
              <FaInstagram className="mr-2 mb-3" /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/om-chandankar"
              className="flex items-center mt-2 text-[1.5rem] font-cL text-black dark:text-white cursor-pointer hover:underline dark:hover:text-secondary"
            >
              <FaLinkedin className="mr-2 mb-3" /> LinkedIn
            </a>
            <a
              href="https://x.com/Om_Chandankar"
              className="flex items-center mt-2 text-[1.5rem] font-cL text-black dark:text-white cursor-pointer hover:underline dark:hover:text-secondary"
            >
              <FaTwitter className="mr-2 mb-3" /> Twitter
            </a>
          </div>
        </div>
      </div>
      {showSuccessMessage && <SuccessfulMessage onClose={handleSuccessClose} />}
    </div>
  );
};

export default ContactForm;

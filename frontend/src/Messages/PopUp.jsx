// import { useEffect } from "react";
// import { ImSad } from "react-icons/im";
// import { SlSizeActual } from "react-icons/sl";

// // CSS for overlay and disabling scroll

// const styles = `
//   .no-scroll {
//     overflow: hidden;
//   }
// `;

// const PopUp = ({ onResize }) => {
//   useEffect(() => {
//     // Add no-scroll class to body when component mounts
//     document.body.classList.add("no-scroll");

//     // Remove no-scroll class from body when component unmounts
//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, []);

//   return (
//     <>
//       {/* Inject styles */}
//       <div>{styles}</div>
//       <div className="message-overlay message-animation">
//         <div className="bg-message bg-fixed bg-cover rounded-[25px] relative mt-32 mb-32 ml-96 mr-[25rem]">
//           <div className="flex flex-col ml-10">
//             <div className="flex mt-10">
//               <ImSad className="w-16 h-16 mt-4 text-white hover:text-[#09FFB5] dark:hover:text-[#09FFB5] icon-bounce" />
//               <h1 className="font-cF text-[2.5rem] ml-4 mr-20 text-white">
//                 Oops, looks like a minor issue
//               </h1>
//             </div>

//             <p className="font-cL text-[1.75rem] text-white mt-4 ml-24 mr-10">
//               For the website to look proper and stunning, we would recommend you to view it at 90% of the screen size. 😃
//             </p>
//             <div className="mt-4 mb-4 flex justify-center items-center">
//               <div
//                 className="rounded-[15px] cartItem bg-[#a6d2ea] border-[#0f94b2] dark:border-[#a6d2ea] dark:bg-black border-[3px] h-[5rem] w-[450px] flex justify-center items-center cursor-pointer mt-4 mb-4"
//                 onClick={onResize}
//               >
//                 <div className="projectItem text-[40px] cursor-pointer animate-bounce flex items-center">
//                   Resize now <SlSizeActual className="ml-4 animate-bounce w-8 h-8" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PopUp;
// // 
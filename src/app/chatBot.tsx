// import React, { useState } from "react";

// function ChatPage() {
//   const [showSuggestions, setShowSuggestions] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const [message, setMessage] = useState("");

//   function handleSend() {
//     // Send the message
//     setMessage("");
//   }

//   function handleUpload() {
//     // Upload file
//   }

//   function handleDarkModeToggle() {
//     setDarkMode(!darkMode);
//   }

//   function handleInputChange(event) {
//     setMessage(event.target.value);
//   }

//   return (
//     <div
//       className={`flex flex-col h-screen ${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
//       }`}
//     >
//       <div className="flex-1 flex">
//         <div className="flex flex-col w-1/4 p-4">
//           <div className="flex items-center mb-4">
//             <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
//             <span className="text-lg font-semibold">Chat App</span>
//           </div>
//           <div className="border-b border-gray-300 mb-4"></div>
//           <p className="text-gray-500 mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//           <button
//             className={`rounded-full w-8 h-8 ${
//               darkMode ? "bg-gray-800" : "bg-gray-200"
//             } flex items-center justify-center`}
//             onClick={handleDarkModeToggle}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className={`w-4 h-4 ${darkMode ? "text-white" : "text-gray-800"}`}
//             >
//               {darkMode ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17.657 6.343a8 8 0 10-11.314 0M12 2v4m0 12v4m6.708-10.708a4 4 0 11-5.656 0M6.343 17.657a8 8 0 000-11.314M15.364 8.636a4 4 0 000 5.656"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 6a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 00-6-6z"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         <div className="flex-1 p-4">
//           {showSuggestions ? (
//             <div className="flex flex-wrap mb-4">
//               <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
//                 <div className="bg-white shadow-sm rounded-lg p-4 text-center">
//                   <p className="text-gray-800 font-medium mb-2">
//                     How can I help you?
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
//                 <div
//                   className="bg-white shadow-sm
// rounded-lg p-4 text-center"
//                 >
//                   <p className="text-gray-800 font-medium mb-2">
//                     Do you have any sales?
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
//                 <div className="bg-white shadow-sm rounded-lg p-4 text-center">
//                   <p className="text-gray-800 font-medium mb-2">
//                     What are your hours?
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
//                 <div className="bg-white shadow-sm rounded-lg p-4 text-center">
//                   <p className="text-gray-800 font-medium mb-2">
//                     Can I make a reservation?
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : null}
//           <div className="flex flex-col flex-1 mb-4">
//             <div className="flex-1 overflow-y-scroll py-2">
//               {/* Chat messages go here */}
//             </div>
//             <div className="flex items-center">
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
//                   placeholder="Type a message..."
//                   value={message}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <button
//                 className="flex-none w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center ml-2"
//                 onClick={handleSend}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="flex-none w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center ml-2"
//                 onClick={handleUpload}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatPage;

import React, { useEffect, useState } from "react";
// import petronImg from "./petron.jpg";
import { HiOutlineUpload } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import { CiMenuBurger } from "react-icons/ci";
import useChatGPT from "./hooks/useChatGpt";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf";

if (typeof window !== "undefined") {
  console.log("pdfjs.version", pdfjs?.version);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
}

function ServiceModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="relative bg-white rounded-lg py-6 px-6 max-w-md w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="absolute top-0 right-0 mt-3 mr-3">
            <button
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.708 6.708a2 2 0 112.828 2.828L14.828 12l-5.293 5.293a2 2 0 11-2.828-2.828L12 9.172 6.708 3.88a2 2 0 010 2.828z" />
              </svg>
            </button>
          </div>
          <div className="text-center">
            {/* <img src={petronImg} alt="Petron" className="h-48 mx-auto" /> */}
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Petron Fuel Services
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              risus leo. Vivamus euismod odio sed mauris faucibus, sit amet
              consectetur quam fringilla. Nullam molestie elit vel justo
              elementum, sit amet vulputate felis fermentum.
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              className="mr-2 bg-gray-200 rounded-lg px-4 py-2 text-gray-700"
              onClick={onClose}
            >
              Close
            </button>
            <button className="bg-blue-600 rounded-lg px-4 py-2 text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyInput({ isDark, handleUpload }: any) {
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   console.log({ pdfjsLib });
  //   pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
  // }, []);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    console.log({ file });
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      setFile(file);
      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const arrayBuffer = fileReader.result;
        const pdfData = new Uint8Array(arrayBuffer);
        const pdfDocument = await pdfjs.getDocument({ data: pdfData }).promise;
        console.log({ pages: pdfDocument.numPages });

        let text = "";
        for (let i = 1; i <= pdfDocument.numPages; i++) {
          const pdfPage = await pdfDocument.getPage(i);
          const pageTextContent = await pdfPage.getTextContent();
          const pageText = pageTextContent.items
            .map((item) => item.str)
            .join("");
          text += pageText;
        }
        console.log({ text: JSON.stringify(text) });
        handleUpload(text);
        // setPages(newPages);
      };

      fileReader.readAsArrayBuffer(file);
    } else {
      setSelectedFile(null);
      alert("Please select a PDF, DOC, or DOCX file.");
    }
  };

  // const extractTextFromPage = async (page) => {
  //   const textContent = await page.getTextContent();
  //   return textContent.items.map((item) => item.str).join("");
  // };

  // const extractText = async (file: any) => {
  //   console.log({ pdfjs, file });
  //   try {
  //     const pdf = await pdfjs.getDocument(file).promise;

  //     const page = await pdf.getPage(1);
  //     console.log({ page });
  //   } catch (e) {
  //     console.log({ e });
  //   }

  //   // const viewport = page.getViewport({ scale: 1.5 });
  // };

  const handleSendClick = () => {
    console.log("Send clicked!");
    // Do something with the input value here
  };

  const handleUploadClick = () => {
    console.log("Upload clicked!");
    // Do something with the uploaded file here
  };

  return (
    <div className="fixed  bottom-10 w-[70%] self-center">
      <input
        type="text"
        className={`w-full ${
          isDark ? "bg-[#444654]" : "bg-white"
        }  py-4 pr-10 pl-4 rounded-lg shadow-md outline-none`}
        placeholder="Type your message..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        onClick={handleSendClick}
      >
        <AiOutlineSend size={24} color={`${isDark ? "#fff" : "#1F2937"}`} />
      </button>
      <button
        className="absolute top-1/2 right-20 transform -translate-y-1/2 cursor-pointer"
        // onClick={handleUploadClick}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-14 absolute -right-4 opacity-0 cursor-pointer"
        />
        <HiOutlineUpload size={24} color={`${isDark ? "#fff" : "#1F2937"}`} />
      </button>
    </div>
  );
}

const DarkModeToggle = ({ isDarkMode, setToggleDarkMode }: any) => {
  const handleToggle = () => {
    setToggleDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center">
      <div className="mr-2">
        <FaSun className="text-yellow-400" />
      </div>
      <div
        className={`w-12 h-6 rounded-full ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } p-1 flex items-center cursor-pointer`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
            isDarkMode ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
      <div className="ml-2">
        <FaMoon className="text-gray-500" />
      </div>
    </div>
  );
};

function DrawerContent({ darkMode, width = "w-1/4" }: any) {
  return (
    <aside
      className={`border-r screen-full ${
        darkMode ? "border-[#444654]" : "border-gray-200"
      } ${
        darkMode ? "bg-[#202123]" : "bg-white"
      } flex-none ${width} p-4 flex flex-col ${darkMode ? "!text-white" : ""}`}
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center">
          <div className={` rounded-sm`}>
            <Image
              src="/resumeAnalyzerminiLogo.png"
              alt="Avatar"
              width={100}
              height={100}
            />
          </div>
          <div className="ml-4">
            <p className="font-bold text-lg">Resume Analyzer</p>
          </div>
        </div>
        <div
          className={`flex-grow my-4 border-t ${
            darkMode ? "border-[#444654]" : "border-gray-200 "
          }`}
        >
          <p
            className={`overflow-y ${
              !darkMode ? "text-gray-600" : "text-white"
            } text-sm p-4`}
          >
            Resume Analyzer is a cutting-edge tool that leverages the power of
            AI to assist recruiters in analyzing resumes 🤖💼. The tool uses
            ChatGPT 3.5, a state-of-the-art language model developed by OpenAI,
            to provide insightful summaries of candidate resumes 📝🔍.
            <br />
            <br />
            Recruiters can simply upload a candidate's resume to the tool, and
            within seconds, they will receive a comprehensive analysis of the
            resume, including key information such as work experience,
            education, skills, and more 👨‍💼🎓👩‍💼. The tool also highlights any
            notable achievements or accomplishments mentioned in the resume
            🏆🌟.
            <br />
            <br />
            What sets Resume Analyzer apart is its ability to create a summary
            of the resume that captures the most important information in a
            concise, easy-to-read format 📊✍️. Recruiters can choose to include
            this summary in the candidate's PDF file for easy reference or
            download 📄💻.
            <br />
            <br />
            Overall, Resume Analyzer is a game-changer for recruiters looking to
            streamline their hiring process and make informed decisions about
            candidates 🚀👨‍💻👩‍💻.
          </p>
        </div>
      </div>
      <div className="flex">
        1
        {/* <div
          className={`${
            darkMode ? "bg-[#202123]" : "bg-white"
          } border-t border-gray-200`}
        >
          <div className="flex justify-center">
            <p className="text-[12px]">
              Copyright © {new Date().getFullYear()} ResumeAnalyzer All Rights
              Reserved.
            </p>
          </div>
        </div> */}
      </div>
      {/* <div
        className={`fixed bottom-0 inset-x-0 ${
          darkMode ? "bg-[#202123]" : "bg-white"
        } border-t border-gray-200 z-10`}
      >
        <div className="flex justify-center py-2">
          <p className="text-[12px]">
            Copyright © {new Date().getFullYear()} ResumeAnalyzer All Rights
            Reserved.
          </p>
        </div>
      </div> */}
    </aside>
  );
}

function Aside({ darkMode }: any) {
  return <DrawerContent darkMode={darkMode} />;
}

function Messages({ darkMode }: any) {
  return (
    <div className="flex-grow flex flex-col  ">
      {/* <ServiceModal isOpen={true} /> */}
      <div className="flex-grow overflow-auto absolute left-0 right-0">
        <div className="flex flex-col">
          <div
            className={`flex-none mt-4 p-8 ${
              darkMode ? "bg-[#202123]" : "bg-white"
            } ${darkMode ? "!text-white" : ""}`}
          >
            <div className="flex">
              <div
                className={`flex-shrink-0 ${
                  darkMode ? "bg-white" : "bg-[#E5E7EB]"
                } rounded-full h-[50px] w-[50px]`}
              >
                <Image
                  src="/resumeAnalyzerminiLogo.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </div>
              <div className="ml-4">
                <p className="text-black-700 text-[1.020rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in scelerisque nisi, sit amet commodo quam. Nullam
                  vitae mollis lorem. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam in scelerisque nisi, sit amet commodo
                  quam. Nullam vitae mollis lorem. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nullam in scelerisque nisi, sit
                  amet commodo quam. Nullam vitae mollis lorem. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nullam in
                  scelerisque nisi, sit amet commodo quam. Nullam vitae mollis
                  lorem.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex-none mt-4 p-8 ${
              darkMode ? "bg-[#444654]" : "bg-[#F3F4F6]"
            } ${darkMode ? "!text-white" : ""}`}
          >
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 ${
                  darkMode ? "bg-white" : "bg-[#E5E7EB]"
                } rounded-sm w-[50px] h-[50px]`}
              >
                <UserAvatar />
              </div>
              {/* <img
                src="https://via.placeholder.com/50"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              /> */}
              <div className="ml-4">
                <p className="text-black-700 text-[1.020rem]">
                  Phasellus ultrices augue sapien, auctor viverra augue mattis
                  eget. Sed quis aliquam odio.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex-none mt-4 p-8 ${
              darkMode ? "bg-[#202123]" : "bg-white"
            } ${darkMode ? "!text-white" : ""}`}
          >
            <div className="flex">
              <div
                className={`flex-shrink-0 ${
                  darkMode ? "bg-white" : "bg-[#E5E7EB]"
                } rounded-full h-[50px] w-[50px]`}
              >
                <Image
                  src="/resumeAnalyzerminiLogo.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </div>
              <div className="ml-4">
                <p className="text-black-700 text-[1.020rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in scelerisque nisi, sit amet commodo quam. Nullam
                  vitae mollis lorem. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam in scelerisque nisi, sit amet commodo
                  quam. Nullam vitae mollis lorem. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nullam in scelerisque nisi, sit
                  amet commodo quam. Nullam vitae mollis lorem. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nullam in
                  scelerisque nisi, sit amet commodo quam. Nullam vitae mollis
                  lorem.
                </p>
              </div>
            </div>
          </div>
          {/* Add more messages here */}
        </div>
      </div>
    </div>
  );
}

const BuyMeACoffee = () => {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <a
        href="https://www.buymeacoffee.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-full"
      >
        <svg
          className="inline-block w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 3H2a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-1.464 7.64c-.041.041-.107.068-.157.068H3.62c-.05 0-.115-.027-.156-.068a.494.494 0 01-.092-.167l1.147-2.352A.505.505 0 014.098 8h.804a.5.5 0 01.391.193l.354.447a.5.5 0 00.391.193h5.385a.5.5 0 00.39-.193l.354-.447a.5.5 0 01.391-.193h.804a.506.506 0 01.374.121l1.148 2.352a.493.493 0 01-.092.167zM10 12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            clipRule="evenodd"
          />
        </svg>
        Buy me a coffee
      </a>
    </div>
  );
};

const UserAvatar = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="circleView">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <rect width="100" height="100" fill="#000" />
      <rect x="30" y="20" width="40" height="60" fill="#FFF" />
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#FFF"
        stroke-width="5"
        fill="none"
        clip-path="url(#circleView)"
      />
    </svg>
  );
};

const MobileDrawer = ({ drawerOpen, setDrawerOpen, darkMode }: any) => {
  console.log({ setDrawerOpen });
  return (
    <div className={`absolute flex h-screen ${!drawerOpen && "hidden"} w-full`}>
      <div
        className={`${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out fixed z-20 h-full w-full bg-white  shadow-lg`}
      >
        <div className="flex flex-col">
          <div
            className={`flex-1
             ${
               darkMode ? "bg-[#202123]" : "bg-white"
             } flex justify-end px-6 py-4`}
          >
            <button onClick={() => setDrawerOpen(false)}>
              <AiOutlineClose
                size={24}
                color={`${darkMode ? "#fff" : "#1F2937"}`}
              />
            </button>
          </div>
          <div className="flex flex-col items-center  h-full">
            <DrawerContent width={"full-width"} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

function ChatPage() {
  const [darkMode, setDarkMode] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello there! I'm MindfulBot, your personal AI-powered chatbot for mental wellness. I'm here to provide evidence-based resources and support for managing stress, anxiety, depression, and more. How can I assist you today?",
      isUser: false,
      id: Date.now(),
      isLoading: false,
    },
  ]);

  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState<any>(0);

  const [editable, setEditable] = useState(true);
  const [responseCount, setResponseCount] = useState(0);

  // const onContentSizeChange = () => {
  //   flatListRef.current.scrollToEnd({animated: true});
  // };

  const { data, isLoading: apiIsLoading, isError, error, ask } = useChatGPT();

  useEffect(() => {
    console.log({ data });
  }, [data]);

  const handleUpload = async (text: string) => {
    await ask([{ role: "user", content: text }]);
  };

  useEffect(() => {
    setEditable(delay === 0);
  }, [delay]);

  useEffect(() => {
    setEditable(apiIsLoading !== true);
  }, [apiIsLoading]);

  const handleUserInput = (text: any) => {
    setMessage(text);
  };

  useEffect(() => {
    if (apiIsLoading === true) {
      setMessages((messages) => [
        ...messages,
        {
          text: "",
          isUser: false,
          id: Date.now(),
          isLoading: true,
        },
      ]);
    } else if (apiIsLoading === false && isError === false && data) {
      const lastItemId = messages[messages.length - 1].id;
      const handler = (messages: any) =>
        messages?.map((message: any) => {
          if (message.id === lastItemId) {
            return {
              text: data,
              isUser: false,
              id: Date.now(),
              isLoading: false,
            };
          }
          return message;
        });
      setMessages(handler);
      const delay = data?.length * 20 + 500;
      setDelay(delay);
      setResponseCount((count) => count + 1);
      try {
        setTimeout(() => {
          setDelay(0);
        }, delay);
      } catch (e) {}
    }
  }, [apiIsLoading, data, isError]);

  const transformer = (data: any) => {
    const dataPayload = data.map((d: any) => ({
      role: d.isUser ? "user" : "assistant",
      content: d.text,
    }));
    dataPayload.shift();

    return dataPayload;
  };

  const handlePress = () => {
    const newMessage = {
      text: message,
      isUser: true,
      id: Date.now(),
      isLoading: false,
    };
    setMessages((messages) => [...messages, { ...newMessage }]);
    setMessage("");
    const messagesPayload = transformer([...messages, { ...newMessage }]);

    // ask(messagesPayload);
  };

  console.log({ darkMode });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener;
    };
  }, []);

  const handleSend = () => {
    // implement logic to send message
  };

  // const handleUpload = (e: any) => {
  //   // implement logic to upload file
  // };

  return (
    <div className={`w-screen h-screen ${darkMode ? "bg-[#444654]" : ""}`}>
      <div className="h-full flex">
        {/* aside */}
        {!isMobile && <Aside darkMode={darkMode} />}
        <MobileDrawer
          drawerOpen={isDrawerOpen}
          setDrawerOpen={setIsDrawerOpen}
          darkMode={darkMode}
        />
        {/* chat section */}
        <div className="flex-grow flex flex-col">
          <div
            className={`p-5   ${
              darkMode ? "bg-[#202123]" : "bg-gray-100"
            } justify-between flex flex-row`}
          >
            <div className={` flex-1 justify-start`}>
              <button
                className={` ${
                  isMobile ? "flex" : "hidden"
                } focus:outline-none w-8 h-8`}
                onClick={toggleDrawer}
              >
                <CiMenuBurger
                  size={24}
                  color={`${darkMode ? "#fff" : "#1F2937"}`}
                />
              </button>
            </div>
            <div className="flex">
              <DarkModeToggle
                isDarkMode={darkMode}
                setToggleDarkMode={setDarkMode}
              />
            </div>
          </div>
          <div
            className={`flex-grow ${
              darkMode ? "bg-[#202123]" : "bg-gray-100"
            } relative flex flex-col p-4 overflow-auto`}
          >
            <div className="flex flex-col">
              {/* Suggested questions */}
              <div className="flex-none">
                <p
                  className={`${
                    darkMode ? "text-white" : "text-black-700"
                  } font-bold mb-4`}
                >
                  Suggested Questions
                </p>
                <div className="flex flex-wrap">
                  <button className="bg-gray-200 rounded-full py-2 px-4 m-2">
                    How are you?
                  </button>
                  <button className="bg-gray-200 rounded-full py-2 px-4 m-2">
                    What are you doing?
                  </button>
                  <button className="bg-gray-200 rounded-full py-2 px-4 m-2">
                    What's up?
                  </button>
                  <button className="bg-gray-200 rounded-full py-2 px-4 m-2">
                    How's it going?
                  </button>
                  <button className="bg-gray-200 rounded-full py-2 px-4 m-2">
                    How's your day?
                  </button>
                  <button className="bg-gray-200 rounded-full py-2 px-4 m-2">
                    What do you like to do?
                  </button>
                </div>
              </div>
            </div>
            {/* Chat messages */}
            <Messages darkMode={darkMode} />
            {/* input  */}
            <MyInput isDark={darkMode} handleUpload={handleUpload} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatPage;

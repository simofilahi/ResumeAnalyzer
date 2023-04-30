import React, { useEffect, useState } from "react";

import { HiOutlineUpload } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { FaSun, FaMoon, FaCoffee, FaHeart } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import useChatGPT from "../hooks/useChatGpt";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf";
import { useRef } from "react";

import mammoth from "mammoth";
import { useDarkMode } from "@src/hooks/useTheme";
import DarkModeToggle from "@src/components/darkModeToggle";
import Logo from "@src/components/logo";
import BuyMeCoffeeButton from "@src/components/buyMeCoffe";

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

function MyInput({
  isDark,
  handleUpload,
  onSendClick,
  value,
  onChange,
  onKeyDown,
  isDisabled,
  scrollToBottom,
}: any) {
  const extractFromDoc = async (file: any) => {
    const result = await mammoth.convertToHtml({
      arrayBuffer: await file.arrayBuffer(),
    });
    const text = result.value.replace(/<\/?[^>]+(>|$)/g, ""); // remove HTML tags
    console.log(text); // Output the extracted text content
    console.log({ doc: JSON.stringify(text) });
    handleUpload(text);
  };

  const extractTextFromPdf = () => {
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
        const pageText = pageTextContent.items.map((item) => item.str).join("");
        text += pageText;
      }
      console.log({ text: JSON.stringify(text) });
      handleUpload(text);
      // setPages(newPages);
    };

    fileReader.readAsArrayBuffer(file);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!file) return;

    if (file && file.type === "application/pdf") {
      extractTextFromPdf();
    } else if (
      [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      extractFromDoc(file);
    } else {
      alert("Please select a PDF, DOC, or DOCX file.");
    }
  };

  return (
    <div className="fixed bottom-20 max-w-[1300px] w-[100%] min-w-[300px] self-center px-5">
      <div className="w-[100%] ml-0 mr-0">
        <input
          type="text"
          className={`w-full ${
            isDark ? "bg-[#444654]" : "bg-white"
          }  py-4 pr-10 pl-4 rounded-lg shadow-md outline-none ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          placeholder="Type your message..."
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button
          className="absolute top-1/2 right-8 transform -translate-y-1/2 cursor-pointer"
          onClick={onSendClick}
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
            disabled={isDisabled}
          />
          <HiOutlineUpload size={24} color={`${isDark ? "#fff" : "#1F2937"}`} />
        </button>
      </div>
    </div>
  );
}

function SlowText({ text, delay = 20, scrollToBottom }: any) {
  const textRef = useRef(null);

  useEffect(() => {
    const textArray = text.split("");
    let current = 0;
    let timer;

    function showNextLetter() {
      textRef.current.textContent += textArray[current];
      scrollToBottom();
      current++;
      if (current === textArray.length) {
        clearInterval(timer);
      }
    }

    timer = setInterval(showNextLetter, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return <div ref={textRef} />;
}

function Messages({ darkMode, messages, scrollToBottom }: any) {
  return (
    <div className="flex-grow flex flex-col  ">
      <div className="flex-grow overflow-auto absolute left-0 right-0">
        <div className="flex flex-col">
          {messages?.map((message: any) => {
            if (message.isUser) {
              return (
                <div
                  key={message.id}
                  className={`flex-none  mt-4 p-8 ${
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

                    <div className="ml-4">
                      <p
                        className={`${
                          darkMode ? "text-white" : "text-gray-900"
                        }"  text-[1.020rem]`}
                      >
                        {message.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div
                key={message.id}
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
                      src="/skillScan.png"
                      alt="Avatar"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    className={`ml-4 ${
                      message.isLoading && "flex justify-center items-center"
                    }`}
                  >
                    <p
                      className={`${
                        darkMode ? "text-white" : "text-gray-900"
                      }"  text-[1.020rem]`}
                    >
                      {message.isLoading ? (
                        <div
                          className={`w-[8px] h-6 cursor-blink  ${
                            darkMode ? "bg-white" : "bg-[#1F2937]"
                          } `}
                        ></div>
                      ) : (
                        <SlowText
                          text={message.text}
                          scrollToBottom={scrollToBottom}
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
    <Image
      src={"/unisex_avatar_latest.png"}
      alt="user-avatar"
      width={50}
      height={50}
    />
  );
};

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div
      className={`w-full ${
        darkMode ? "bg-[#444654]" : "bg-white"
      } justify-between flex flex-row`}
    >
      <div
        className={`flex  px-4 justify-between items-center py-8 max-w-[1400px] ml-auto mr-auto w-full ${
          darkMode ? "bg-[#444654]" : "bg-white"
        } ${
          darkMode ? "border-[#444654]" : "border-gray-100"
        } justify-between flex flex-row`}

        // className={`flex  px-4 justify-between py-8 border-b  `}
      >
        <div className={` flex-1 justify-start `}>
          <Logo size={40} />
        </div>
        <div className="flex items-center justify-center">
          <BuyMeCoffeeButton />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

function Questions() {
  const [darkMode] = useDarkMode();

  return (
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
        <div className="flex flex-wrap font-medium">
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
  );
}

function ChatPage() {
  const [darkMode, setDarkMode] = useDarkMode();
  const messagesEndRef = useRef(null);

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

  const onInputChange = (e: any) => {
    const text = e.target.value;
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

  const scrollToBottom = () => {
    messagesEndRef.current.scrollTo(0, 4000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const transformer = (data: any) => {
    const dataPayload = data.map((d: any) => ({
      role: d.isUser ? "user" : "assistant",
      content: d.text,
    }));
    dataPayload.shift();

    return dataPayload;
  };

  useEffect(() => {
    console.log({ messages });
  }, [messages]);

  const SendMessageToBot = () => {
    const userMessage = {
      text: message,
      isUser: true,
      id: Date.now(),
      isLoading: false,
    };
    setMessages((messages) => [...messages, { ...userMessage }]);
    setMessage("");

    const messagesPayload = transformer([...messages, { ...userMessage }]);
    ask(messagesPayload);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      SendMessageToBot();
    }
  };

  const onSendClick = () => {
    SendMessageToBot();
  };

  return (
    <div
      className={`w-full h-screen ${
        darkMode ? "bg-[#202123]" : "bg-[#F3F4F6]"
      }`}
    >
      <Header />
      <div className="h-full flex">
        <div className="flex-grow flex flex-col max-w-[1400px] relative ml-auto mr-auto">
          <div
            ref={messagesEndRef}
            className={`h-[70%] max-h-[70%] ${
              darkMode ? "bg-[#202123]" : "bg-gray-100"
            }  relative flex flex-col p-4 overflow-y-scroll`}
          >
            {/* Suggestion */}
            <Questions />
            {/* Chat messages */}
            <Messages
              darkMode={darkMode}
              messages={messages}
              scrollToBottom={scrollToBottom}
            />
          </div>
          {/* input  */}
          <MyInput
            isDark={darkMode}
            handleUpload={handleUpload}
            onSendClick={onSendClick}
            value={message}
            onChange={onInputChange}
            onKeyDown={handleKeyPress}
            isDisabled={editable}
            scrollToBottom={scrollToBottom}
          />
        </div>

        <footer
          className={` fixed w-screen bottom-0 p-4 text-[16px] ${
            darkMode ? "bg-[#202123]" : "bg-white"
          } border-t ${
            darkMode ? "border-[#444654]" : "border-gray-100"
          } flex items-center justify-center ${
            darkMode ? "text-white" : "text-gray-900"
          } font-semibold`}
        >
          Copyright © {new Date().getFullYear()} All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
export default ChatPage;

import React, { use, useEffect, useState } from "react";

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
import Toast from "@src/components/FileModal";
import { checkForSpecialChar } from "@src/utils";

if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
}

function MyInput({
  isDark,
  handleUpload,
  onSendClick,
  value,
  onChange,
  onKeyDown,
  isDisabled,
}: any) {
  const [file, setFile] = useState("");

  const [toastMsg, setToastMsg] = useState("");

  const extractFromDoc = async (file: any, filename: string) => {
    const result = await mammoth.convertToHtml({
      arrayBuffer: await file.arrayBuffer(),
    });
    const text = result.value.replace(/<\/?[^>]+(>|$)/g, ""); // remove HTML tags

    handleUpload(text, filename);
  };

  const extractTextFromPdf = (file, filename: string) => {
    const fileReader = new FileReader();

    const handleContent = async () => {
      const arrayBuffer = fileReader?.result;
      const pdfData = new Uint8Array(arrayBuffer);
      const pdfDocument = await pdfjs.getDocument({ data: pdfData }).promise;

      let text = "";
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        const pdfPage = await pdfDocument.getPage(i);
        const pageTextContent = await pdfPage.getTextContent();
        const pageText = pageTextContent.items.map((item) => item.str).join("");
        text += pageText;
      }

      handleUpload(text, filename);
    };

    fileReader.onload = async () => {
      try {
        handleContent();
      } catch (e) {
        handleContent();
      }
    };

    fileReader.readAsArrayBuffer(file);
  };

  function checkFileSize(file) {
    if (file.size <= 5000000) {
      return true;
    } else {
      return false;
    }
  }

  const handleFileChange = (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    const fileName = event.target?.files[0]?.name;
    setToastMsg("");
    setFile(file);

    if (!checkFileSize(file)) {
      setToastMsg("File size exceeded. Please upload a file smaller than 5MB.");
      return;
    }

    if (!file) return;

    if (file && file.type === "application/pdf") {
      extractTextFromPdf(file, fileName);
    } else if (
      [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      extractFromDoc(file, fileName);
    } else {
      setToastMsg("Please select a PDF, DOC, or DOCX file.");
    }
  };

  return (
    <>
      <Toast
        msg={toastMsg}
        show={Boolean(toastMsg?.length)}
        setShow={() => setToastMsg("")}
      />
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
            disabled={!isDisabled}
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
              onClick={(event) => (event.target.value = null)}
            />
            <HiOutlineUpload
              size={24}
              color={`${isDark ? "#fff" : "#1F2937"}`}
            />
          </button>
        </div>
      </div>
    </>
  );
}

function SlowText({ text, scrollToBottom }: any) {
  const textRef = useRef<string>("");

  useEffect(() => {
    if (!text) return;
    const concat = (text) => {
      if (checkForSpecialChar(text)) {
        textRef.current = textRef?.current?.trim?.() + text + " ";
      } else textRef.current = textRef?.current + text + " ";
      scrollToBottom();
    };

    concat(text);
  }, [text]);

  return <span dangerouslySetInnerHTML={{ __html: textRef?.current }}></span>;
}

function BotMessage({ message, scrollToBottom }: any) {
  const [darkMode, setDarkMode] = useDarkMode();

  const renderMessage = ({ isLoading, isTyping, message }) => {
    const blinkCursor = () => (
      <div
        className={`w-[8px] h-6 cursor-blink  ${
          darkMode ? "bg-white" : "bg-[#1F2937]"
        } `}
      ></div>
    );

    if (isLoading && !isTyping) return blinkCursor();
    else if (!isLoading && isTyping)
      return <SlowText text={message} scrollToBottom={scrollToBottom} />;
    return message;
    // else if (!isLoading && !isTyping) return message;
  };

  return (
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
          <Image src="/talentscan.png" alt="Avatar" width={50} height={50} />
        </div>
        <div
          className={`ml-4 ${
            message?.isLoading && "flex justify-center items-center"
          }`}
        >
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            }  text-[1.020rem]`}
          >
            {renderMessage({
              isLoading: message?.isLoading,
              isTyping: message?.isTyping,
              message: message?.text,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

const UserMessage = ({ message, scrollToBottom }: any) => {
  const [darkMode] = useDarkMode();

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  console.log({ message });
  return (
    <div
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
            {message?.isFileContent === true
              ? message.filename + " file uploaded successfully"
              : message.text}
          </p>
        </div>
      </div>
    </div>
  );
};

function Messages({ messages, scrollToBottom }: any) {
  return (
    <div className="flex-grow flex flex-col  ">
      <div className="flex-grow overflow-auto absolute left-0 right-0">
        <div className="flex flex-col">
          {messages?.map((message: any) => {
            if (message.isUser) {
              return (
                <UserMessage
                  key={message.id}
                  message={message}
                  scrollToBottom={scrollToBottom}
                />
              );
            }
            return (
              <BotMessage
                key={message.id}
                message={message}
                scrollToBottom={scrollToBottom}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

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

function Questions({ pickQuestion }: any) {
  const [darkMode] = useDarkMode();

  const questions = [
    "List of relevant skills and technologies",
    "Candidate's top strengths and areas of expertise",
    "Any potential red flags or concerns regarding the candidate",
    "Comparison of the candidate's qualifications to the job requirements",
    "Assessment of the candidate's soft skills, such as communication or leadership abilities",
  ];

  return (
    <div className="flex flex-col">
      {/* Suggested questions */}
      <div className="flex-none">
        <p
          className={`${
            darkMode ? "text-white" : "text-gray-700"
          } font-bold mb-4`}
        >
          Suggested Questions
        </p>
        <div className="flex flex-wrap font-medium">
          {questions.map((question, index) => (
            <button
              key={index}
              className={`bg-gray-200 rounded-full py-2 px-4 m-2 text-gray-700`}
              onClick={() => pickQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatPage() {
  const [darkMode, setDarkMode] = useDarkMode();
  const messagesEndRef = useRef(null);
  const [botMessage, setBotMessage] = useState<any>("");
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm an AI-powered chatbot designed to assist you in streamlining your recruitment process. Simply upload a resume and I'll analyze it to provide a summary of the candidate's experience and skills, helping you to make informed hiring decisions",
      isUser: false,
      id: Date.now(),
      isTyping: false,
      isLoading: false,
    },
  ]);

  const [message, setMessage] = useState("");

  const {
    data,
    isLoading: apiIsLoading,
    isError,
    error,
    ask,
    isDone,
  } = useChatGPT();

  useEffect(() => {
    const updateIsTyping = ({
      messages,
      messageId,
      data,
      isTypingStatus,
      isLoading,
      changeId,
    }: any) => {
      const d = messages?.map((message) => {
        if (message.id === messageId) {
          return {
            ...message,
            isTyping: isTypingStatus,
            isLoading: isLoading,
            text: data,
            id: changeId ? Date.now() : message.id,
          };
        }
        return message;
      });
      return d;
    };

    if (apiIsLoading === true) {
      let emptyMessage = {
        text: "",
        isLoading: true,
        isTyping: false,
        id: Date.now(),
        isUser: false,
      };

      setMessages((messages) => [...messages, emptyMessage]);
    } else if (
      apiIsLoading === false &&
      isDone === false &&
      isError === false &&
      data !== ""
    ) {
      const lastId = messages?.[messages.length - 1].id;

      if (lastId) {
        setMessages((messages) => [
          ...updateIsTyping({
            messages,
            messageId: lastId,
            data,
            isTypingStatus: true,
            isLoading: false,
            changeId: false,
          }),
        ]);
      }
      setBotMessage((prev) => {
        if (checkForSpecialChar(data)) {
          return prev?.trim() + data + " ";
        }

        return prev + data + " ";
      });
    } else if (apiIsLoading === false && isError === false && isDone === true) {
      const lastId = messages?.[messages.length - 1].id;

      // console.log("before ", { botMessage });

      if (lastId) {
        // console.log("after ", { botMessage });
        setMessages((messages) =>
          updateIsTyping({
            messages,
            messageId: lastId,
            data: botMessage,
            isTypingStatus: false,
            isLoading: false,
            changeId: true,
          })
        );
        setBotMessage("");
      }
    }
  }, [isDone, isError, apiIsLoading, data]);

  const handleUpload = async (text: string, filename = "") => {
    const newMessages = [
      ...messages,
      {
        text: text,
        isFileContent: true,
        isLoading: false,
        isTyping: false,
        id: Date.now(),
        isUser: true,
        filename: filename,
      },
    ];

    setMessages(newMessages);
    const messagesPayload = transformer(newMessages);
    ask(messagesPayload);
    // await ask([{ role: "user", content: text }]);
  };

  const onInputChange = (e: any) => {
    const text = e.target.value;
    setMessage(text);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollTo(0, 4000);
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  const transformer = (data: any) => {
    const dataPayload = data.map((d: any) => ({
      role: d.isUser ? "user" : "assistant",
      content: d.text,
    }));
    dataPayload.shift();

    return dataPayload;
  };

  const SendMessageToBot = (text: string) => {
    const userMessage = {
      text: text ?? message,
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

  const pickQuestion = (text: string) => {
    // console.log({ text });
    setMessage(text);
    SendMessageToBot(text);
  };

  const onSendClick = () => {
    SendMessageToBot();
  };

  console.log({ messages });

  return (
    <div
      className={`w-full h-screen ${
        darkMode ? "bg-[#202123]" : "bg-[#F3F4F6]"
      }`}
    >
      <Header />
      <div
        className={` ${darkMode ? "bg-[#202123]" : "bg-[#F3F4F6]"} h-full flex`}
      >
        <div className=" flex-grow flex flex-col max-w-[1400px] relative ml-auto mr-auto">
          <div
            ref={messagesEndRef}
            className={`h-[68%] max-h-[68%] ${
              darkMode ? "bg-[#202123]" : "bg-gray-100"
            }  relative flex flex-col p-4 overflow-y-scroll`}
          >
            {/* Suggestion */}
            <Questions pickQuestion={pickQuestion} />

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
            isDisabled={!(isDone === false && apiIsLoading === false)}
            // scrollToBottom={scrollToBottom}
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
          Copyright © {new Date().getFullYear()} Talent Scan All Rights
          Reserved.
        </footer>
      </div>
    </div>
  );
}
export default ChatPage;

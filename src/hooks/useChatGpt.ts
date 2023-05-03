import SSE from "@src/utils/sse";
import { useState } from "react";
// import {API_TOKEN} from '@env';

const chatGPTUrl = "https://api.openai.com/v1/chat/completions";

const API_KEY = process.env.NEXT_PUBLIC_GPT_API_KEY;

const useChatGPT = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any>(null);

  const ask = (messages: Array<any>) => {
    const fetchIntention = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setError(null);
        setData(null);
        setIsDone(false);
        const newMessages = messages.map((message, index) => ({
          ...message,
          content:
            index === messages.length - 1
              ? `message: ${message.content}, if the message out of recruitment scop don't answer, except for hey, hello}`
              : message.content,
        }));

        const payload = JSON.stringify({
          model: "gpt-3.5-turbo-0301",
          messages: [
            {
              role: "system",
              content:
                "You are virtual resume analyzer assistance that help only recruiters",
            },
            ...newMessages,
          ],
          max_tokens: 1000,
          stream: true,
          // top_p: 0.2,
          n: 1,
          // stop: '.',
        });
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        };

        const source = SSE(chatGPTUrl, { headers, payload, method: "POST" });

        source.addEventListener("message", (event) => {
          setIsLoading(false);
          if (event.data !== "[DONE]") {
            let payload = JSON.parse(event.data);
            // console.log({ payload });
            let text = payload?.choices?.[0]?.delta?.content;

            if (text !== "\n") {
              const textWithoutSpaces = text?.trim();
              // console.log({ textWithoutSpaces });
              setData(textWithoutSpaces);
            }
          } else {
            setIsDone(true);
            source.close();
          }
          // const parsedData = JSON.parse(event);
          // console.log({ event });
          // setEvents((prevEvents) => [...prevEvents, parsedData]);
        });

        // source.addEventListener("readystatechange", (e) => {
        //   if (e.readyState >= 2) {
        //     console.log({ h: "heeeeere" });
        //     setIsLoading(false);
        //   }
        // });

        source.stream();

        // es.onmessage = (e) => {
        //   console.log({ e });
        // };

        // const response = await fetch(chatGPTUrl, {
        //   method: "POST",
        //   headers,
        //   body: body,
        // });
        // const data = await response.json();

        // const analyzedIntention = data?.choices[0]?.message?.content?.trim();
        // setIsLoading(false);
        // setData(analyzedIntention);
      } catch (e) {
        // console.log({ e });
        setIsError(true);
        setIsLoading(false);
        setError("Error!, Please try again");
      }
    };
    fetchIntention();
  };

  return { data, isLoading, isError, error, ask, isDone };
};

export default useChatGPT;

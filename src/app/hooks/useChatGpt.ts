import { useState } from "react";
// import {API_TOKEN} from '@env';

const chatGPTUrl = "https://api.openai.com/v1/chat/completions";

const useChatGPT = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any>(null);

  const ask = (messages: Array<any>) => {
    const fetchIntention = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setError(null);
        setData(null);

        const response = await fetch(chatGPTUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "You are virtual resume analyzer for recruiters",
              },
              ...messages,
            ],
            max_tokens: 2000,
            n: 1,
            // stop: '.',
          }),
        });
        const data = await response.json();

        const analyzedIntention = data?.choices[0]?.message?.content?.trim();
        setIsLoading(false);
        setData(analyzedIntention);
      } catch (e) {
        setIsError(true);
        setIsLoading(false);
        setError("Error!, Please try again");
      }
    };
    fetchIntention();
  };

  return { data, isLoading, isError, error, ask };
};

export default useChatGPT;

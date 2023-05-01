import { useEffect } from "react";

const Toast = ({ msg, show = false, delay = 5000, setShow }: any) => {
  // console.log({ show });
  useEffect(() => {
    const interval = setInterval(() => {
      setShow();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  if (!show) return null;
  return (
    <div className="fixed z-20 bottom-0 right-0 p-4 animation duration-500">
      <div
        className="bg-red-500 text-white rounded-lg p-4 shadow-lg"
        role="alert"
      >
        <span className="block sm:inline">{msg}</span>
      </div>
    </div>
  );
};

export default Toast;

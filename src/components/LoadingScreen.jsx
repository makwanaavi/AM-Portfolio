import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Welcome to Avi Makwana World/>";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center">
      <div className="mb-6 text-2xl sm:text-4xl md:text-5xl font-mono font-semibold text-center tracking-wide">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </div>

      <div className="w-[250px] h-[4px] bg-gray-800 rounded-full overflow-hidden shadow-inner">
        <div className="w-[40%] h-full bg-cyan-500 animate-loading-bar shadow-[0_0_15px_#06b6d4]"></div>
      </div>

      <p className="mt-6 text-sm text-gray-400 italic tracking-wide">
        Designing the Future... ✨
      </p>
    </div>
  );
};

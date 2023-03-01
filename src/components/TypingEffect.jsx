import { useEffect, useState } from "react";
import { render } from "react-dom";

export const TypingEffect = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndexText, setCurrentIndexText] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndexText]);
  const [oldText, setOldText] = useState([]);

  useEffect(() => {
    if (!currentText?.length) return;
    if (currentIndexText === 1) {
      setOldText((prev) => {
        return [...prev, currentText];
      });

      setCurrentIndexText((prev) => {
        return prev + 1 ?? prev;
      });

      setCurrentText(texts[currentIndexText]);
      setDisplayText("");
      setCurrentIndex(0);
      return;
    }
    const randomTime = Math.floor(Math.random() * 40) + 15;

    const intervalId = setInterval(() => {
      if (currentIndex >= currentText.length) {
        clearInterval(intervalId);
        setShowCursor(false);
        setOldText((prev) => {
          return [...prev, currentText];
        });

        setCurrentIndexText((prev) => {
          return prev + 1 ?? prev;
        });

        setCurrentText(texts[currentIndexText]);
        setDisplayText("");
        setCurrentIndex(0);
        return;
      }
      const nextIndex = currentText.indexOf(" ", currentIndex + 1);
      if (nextIndex < 0) {
        setDisplayText(currentText);
        setCurrentIndex(currentText.length);
        return;
      }
      setShowCursor(true);
      setDisplayText(currentText.slice(0, nextIndex));
      setCurrentIndex(currentIndex + 1);
    }, randomTime);

    return () => clearInterval(intervalId);
  }, [
    displayText,
    currentText,
    currentIndex,
    texts,
    currentIndexText,
    oldText,
  ]);
  const regex = /(?<=\*)(.*?)(?=\*)/;
  const regex2 = /(?<=\/)(.*?)(?=\/)/;
  return (
    <div id="text-response">
      {oldText.map((text, index) => {
        let renderText = text;
        if (text.includes("/")) {
          const matched = regex2.exec(text);
          const wrapper = `<span>${matched[1]}</span>`;
          renderText = text.replace(`/${matched[1]}/`, wrapper);
        }
        if (text.includes("*")) {
          const matched = regex.exec(text);
          const wrapper = `<strong>${matched[1]}</strong>`;
          renderText = text.replace(`*${matched[1]}*`, wrapper);
        }

        return index >= 1 ? (
          <p key={index} dangerouslySetInnerHTML={{ __html: renderText }} />
        ) : (
          ""
        );
      })}
      <p
        className={`${
          showCursor
            ? 'after:content-["▋"] after:ml-1 after:animate-typing'
            : ""
        }`}
      >
        {displayText}
      </p>
    </div>
  );
};

import { useEffect, useState } from 'react';

const Key = ({ onKeyboard, primary, secondary, keyCode }) => {
  const [isShift, setIsShift] = useState(false); // possibly lift up

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    if (e.key === secondary) {
      onKeyboard((prev) => prev + primary);
    }
  };

  return (
    <div onClick={() => onKeyboard((prev) => prev + primary)} className="key">
      <span>{isShift ? secondary : primary}</span>
    </div>
  );
};

export default Key;

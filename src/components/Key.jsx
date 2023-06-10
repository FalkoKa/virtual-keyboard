import { useEffect, useState } from 'react';

const Key = ({ isShift, onKeyboard, primary, secondary, isDisabled }) => {
  const [keyDown, setKeyDown] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === primary) {
      setKeyDown(true);
      onKeyboard((prev) => prev + primary);
    } else if (e.key === secondary) {
      onKeyboard((prev) => prev + secondary);
    }
  };

  const handleKeyUp = (e) => {
    setKeyDown(false);
  };

  const handleKeyClick = (e) => {
    if (isShift) {
      onKeyboard((prev) => prev + primary);
    } else {
      onKeyboard((prev) => prev + secondary);
    }
  };

  if (isDisabled) {
    return <div className="key"></div>;
  } else {
    return (
      <div
        onClick={handleKeyClick}
        className={`key ${keyDown ? 'active' : ''}`}
      >
        <span>{isShift ? primary : secondary}</span>
      </div>
    );
  }
};

export default Key;

import { useEffect, useState } from 'react';

const Backspace = ({ onKeyboard }) => {
  const [keyDown, setKeyDown] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setKeyDown(true);
      onKeyboard((prev) => prev.slice(0, -1));
    }
  };

  const handleKeyUp = (e) => {
    setKeyDown(false);
  };

  const handleKeyClick = (e) => {
    onKeyboard((prev) => prev.slice(0, -1));
  };

  return (
    <div
      onClick={handleKeyClick}
      id="backspace"
      className={`key ${keyDown ? 'active' : ''}`}
    >
      <span>Backspace</span>
    </div>
  );
};

export default Backspace;

import { useEffect, useState } from 'react';

const Return = ({ onKeyboard }) => {
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
    e.preventDefault();
    if (e.key === 'Enter') {
      setKeyDown(true);
      onKeyboard((prev) => prev + '\n');
    }
  };

  const handleKeyUp = (e) => {
    setKeyDown(false);
  };

  const handleKeyClick = (e) => {
    onKeyboard((prev) => prev + `/n`);
  };

  return (
    <div
      onClick={handleKeyClick}
      id="return"
      className={`key ${keyDown ? 'active' : ''}`}
    >
      <span>Return</span>
    </div>
  );
};

export default Return;

import { useEffect, useState } from 'react';

const Space = ({ onKeyboard }) => {
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
    if (e.key === ' ') {
      setKeyDown(true);
      onKeyboard((prev) => prev + ' ');
    }
  };

  const handleKeyUp = (e) => {
    setKeyDown(false);
  };

  const handleKeyClick = (e) => {
    onKeyboard((prev) => prev + ` `);
  };

  return (
    <div
      onClick={handleKeyClick}
      id="space"
      className={`key ${keyDown ? 'active' : ''}`}
    ></div>
  );
};

export default Space;

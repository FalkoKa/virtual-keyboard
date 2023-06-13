import { useEffect, useState } from 'react';

const Backslash = ({ onKeyboard }) => {
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
    if (e.key === `\\`) {
      setKeyDown(true);
      onKeyboard((prev) => prev + `\\`);
    }
  };

  const handleKeyUp = (e) => {
    setKeyDown(false);
  };

  const handleKeyClick = (e) => {
    onKeyboard((prev) => prev + `\\`);
  };

  return (
    <div
      onClick={handleKeyClick}
      id="tab"
      style={{ display: 'flex', justifyContent: 'center' }}
      className={`key ${keyDown ? 'active' : ''}`}
    >
      <span>\</span>
    </div>
  );
};

export default Backslash;

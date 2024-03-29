import { useEffect, useState } from 'react';
import { FiDelete } from 'react-icons/fi';

const Backspace = ({ onKeyboard, mobile }) => {
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
      id={`${!mobile ? 'backspace' : 'mobile-backspace'}`}
      className={`${!mobile ? 'key' : 'mobile-key'} ${keyDown ? 'active' : ''}`}
    >
      {!mobile ? <span>Backspace</span> : <FiDelete />}
    </div>
  );
};

export default Backspace;

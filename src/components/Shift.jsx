import { useEffect, useState } from 'react';
import { PiArrowFatUpBold } from 'react-icons/pi';

const Shift = ({ onKeyboard, setIsShift, mobile }) => {
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
    if (e.key === 'Shift') {
      setKeyDown(true);
    }
  };

  const handleKeyUp = (e) => {
    setKeyDown(false);
  };

  return (
    <div
      onMouseDown={() => {
        setKeyDown((prev) => !prev);
        setIsShift((prev) => true);
      }}
      onMouseUp={() => {
        setKeyDown((prev) => !prev);
        setIsShift((prev) => !prev);
      }}
      id={`${!mobile ? 'shift' : 'mobile-shift'}`}
      className={`${!mobile ? 'key' : 'mobile-key'} ${keyDown ? 'active' : ''}`}
    >
      {!mobile ? <span>Shift</span> : <PiArrowFatUpBold />}
    </div>
  );
};

export default Shift;

import { useEffect, useState } from 'react';
import Key from './Key';

const KeyboardMobile = ({ onKeyboard }) => {
  const [isShift, setIsShift] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', detectShiftDown);

    return () => {
      document.removeEventListener('keydown', detectShiftDown);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', detectShiftUp);

    return () => {
      document.removeEventListener('keyup', detectShiftUp);
    };
  }, []);

  const detectShiftDown = (e) => {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      setIsShift(true);
    }
  };

  const detectShiftUp = (e) => {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      setIsShift(false);
    }
  };

  return (
    <div className="keyboard-mobile">
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'Q'}
        secondary={'q'}
      />
      {/* <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'Q'}
        secondary={'q'}
      /> */}
    </div>
  );
};

export default KeyboardMobile;

import Key from './Key';
import { useState, useEffect } from 'react';

const Keyboard = ({ onKeyboard }) => {
  const [isShift, setIsShift] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', detectShiftDown);
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', detectShiftUp, true);
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
    <div className="keyboard">
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'A'}
        secondary={'a'}
        isEnabled
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'B'}
        secondary={'b'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'C'}
        secondary={'c'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'C'}
        secondary={'c'}
        isDisabled
      />
    </div>
  );
};

export default Keyboard;

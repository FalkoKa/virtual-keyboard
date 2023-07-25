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
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'W'}
        secondary={'w'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'E'}
        secondary={'e'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'R'}
        secondary={'r'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'T'}
        secondary={'t'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'Y'}
        secondary={'y'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'U'}
        secondary={'u'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'I'}
        secondary={'i'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'O'}
        secondary={'o'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'P'}
        secondary={'p'}
      />
      <div className="space-3"></div>
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'A'}
        secondary={'a'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'S'}
        secondary={'s'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'D'}
        secondary={'d'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'F'}
        secondary={'f'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'G'}
        secondary={'g'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'H'}
        secondary={'h'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'J'}
        secondary={'j'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'K'}
        secondary={'k'}
      />
      <Key
        mobile={true}
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'L'}
        secondary={'l'}
      />
    </div>
  );
};

export default KeyboardMobile;

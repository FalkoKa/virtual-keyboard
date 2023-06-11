import Key from './Key';
import Backspace from './Backspace';
import { useState, useEffect } from 'react';

const Keyboard = ({ onKeyboard }) => {
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
    <div className="keyboard">
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'~'}
        secondary={'`'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'!'}
        secondary={'1'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'@'}
        secondary={'2'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'#'}
        secondary={'3'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'$'}
        secondary={'4'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'%'}
        secondary={'5'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'^'}
        secondary={'6'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'&'}
        secondary={'7'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'*'}
        secondary={'8'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'('}
        secondary={'9'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={')'}
        secondary={'0'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'_'}
        secondary={'-'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'+'}
        secondary={'='}
      />
      <Backspace onKeyboard={onKeyboard} />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'A'}
        secondary={'a'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'A'}
        secondary={'a'}
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
      />{' '}
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'C'}
        secondary={'c'}
      />
    </div>
  );
};

export default Keyboard;

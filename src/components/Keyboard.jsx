import Key from './Key';
import Backspace from './Backspace';
import Tab from './Tab';
import Backslash from './Backslash';
import { useState, useEffect } from 'react';
import Return from './Return';
import Shift from './Shift';
import Space from './Space';

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
      <Tab onKeyboard={onKeyboard} />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'Q'}
        secondary={'q'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'W'}
        secondary={'w'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'E'}
        secondary={'e'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'R'}
        secondary={'r'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'T'}
        secondary={'t'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'Y'}
        secondary={'y'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'U'}
        secondary={'u'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'I'}
        secondary={'i'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'O'}
        secondary={'o'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'P'}
        secondary={'p'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'{'}
        secondary={'['}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'}'}
        secondary={']'}
      />
      <Backslash onKeyboard={onKeyboard} />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'C'}
        secondary={'c'}
        isDisabled
        styleId={'capslock'}
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
        primary={'S'}
        secondary={'s'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'D'}
        secondary={'d'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'F'}
        secondary={'f'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'G'}
        secondary={'g'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'H'}
        secondary={'h'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'J'}
        secondary={'j'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'K'}
        secondary={'k'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'L'}
        secondary={'l'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={':'}
        secondary={';'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'"'}
        secondary={"'"}
      />
      <Return onKeyboard={onKeyboard} />
      <Shift onKeyboard={onKeyboard} setIsShift={setIsShift} />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'Z'}
        secondary={'z'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'X'}
        secondary={'x'}
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
        primary={'V'}
        secondary={'v'}
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
        primary={'N'}
        secondary={'n'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'M'}
        secondary={'m'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'<'}
        secondary={','}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'>'}
        secondary={'.'}
      />
      <Key
        isShift={isShift}
        onKeyboard={onKeyboard}
        primary={'?'}
        secondary={'/'}
      />
      <Shift onKeyboard={onKeyboard} setIsShift={setIsShift} />
      <Key isDisabled styleId={'bottom-btn'} />
      <Key isDisabled styleId={'bottom-btn'} />
      <Key isDisabled styleId={'bottom-btn'} />
      <Space onKeyboard={onKeyboard} />
      <Key isDisabled styleId={'bottom-btn'} />
      <Key isDisabled styleId={'bottom-btn'} />
      <Key isDisabled styleId={'bottom-btn'} />
    </div>
  );
};

export default Keyboard;

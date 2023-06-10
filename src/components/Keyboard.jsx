import Key from './Key';

const Keyboard = ({ onKeyboard }) => {
  return (
    <div className="keyboard">
      <Key onKeyboard={onKeyboard} primary={'A'} secondary={'a'} />
      <Key onKeyboard={onKeyboard} primary={'B'} secondary={'b'} />
      <Key onKeyboard={onKeyboard} primary={'C'} secondary={'c'} />
    </div>
  );
};

export default Keyboard;

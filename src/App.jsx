import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import KeyboardMobile from './components/KeyboardMobile';

function App() {
  const [displayInput, setDisplayInput] = useState('');
  const [isDesktop, setDesktop] = useState(window.innerWidth > 780);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 780);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  console.log(displayInput);
  return (
    <>
      {isDesktop ? (
        <Keyboard onKeyboard={setDisplayInput} />
      ) : (
        <KeyboardMobile />
      )}
    </>
  );
}

export default App;

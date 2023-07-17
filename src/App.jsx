import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import KeyboardMobile from './components/KeyboardMobile';
import MobileScreen from './MobileScreen';
import DesktopScreen from './DesktopScreen';

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
        <div>
          <DesktopScreen displayInput={displayInput} />
          <Keyboard onKeyboard={setDisplayInput} />
        </div>
      ) : (
        <div>
          <MobileScreen displayInput={displayInput} />
          <KeyboardMobile />
        </div>
      )}
    </>
  );
}

export default App;

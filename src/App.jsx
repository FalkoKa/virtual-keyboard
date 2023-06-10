import { useState } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';

function App() {
  const [displayInput, setDisplayInput] = useState('');

  console.log(displayInput);
  return (
    <>
      <Keyboard onKeyboard={setDisplayInput} />
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';

const Shift = ({ onKeyboard, setIsShift }) => {
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
      id="shift"
      className={`key ${keyDown ? 'active' : ''}`}
    >
      <span>Shift</span>
    </div>
  );
};

export default Shift;

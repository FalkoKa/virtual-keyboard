import { useEffect, useState } from 'react';

const Key = ({
  isShift,
  onKeyboard,
  primary,
  secondary,
  isDisabled,
  styleId,
  mobile,
}) => {
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
    if (e.key === primary) {
      setKeyDown(true);
      onKeyboard((prev) => prev + primary);
    } else if (e.key === secondary) {
      setKeyDown(true);
      onKeyboard((prev) => prev + secondary);
    }
  };

  const handleKeyUp = (e) => {
    setKeyDown(false);
  };

  const handleKeyClick = (e) => {
    if (isShift) {
      onKeyboard((prev) => prev + primary);
    } else {
      onKeyboard((prev) => prev + secondary);
    }
  };

  if (isDisabled) {
    return <div id={styleId || ''} className="key"></div>;
  } else {
    return (
      <div
        onClick={handleKeyClick}
        className={`${!mobile ? 'key' : ' mobile-key'} ${
          keyDown ? 'active' : ''
        }`}
        id={styleId || ''}
      >
        <span>{isShift ? primary : secondary}</span>
      </div>
    );
  }
};

export default Key;

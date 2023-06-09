import { useState } from 'react';

const Key = ({ primary, secondary, keyCode }) => {
  const [isShift, setIsShift] = useState(false); // possibly lift up

  return (
    <div className="key">
      <span>{isShift ? secondary : primary}</span>
    </div>
  );
};

export default Key;

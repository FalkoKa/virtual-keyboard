import { BiWifi2 } from 'react-icons/bi';
import { BsBatteryFull } from 'react-icons/bs';
import { PiCellSignalFull } from 'react-icons/pi';

const MobileScreen = ({ displayInput }) => {
  return (
    <>
      <div className="phone">
        <div className="head">
          <span>
            {new Date().getHours()}:{new Date().getMinutes()}
          </span>
          <div className="island"></div>
          <div className="header-symbols"></div>
        </div>
        <div className="text-field">{displayInput}</div>
        <div className="bottom-line"></div>
      </div>
      <div>
        <BiWifi2 scale={12} />
        <BsBatteryFull scale={12} />
        <PiCellSignalFull scale={12} />
        test
      </div>
    </>
  );
};

export default MobileScreen;

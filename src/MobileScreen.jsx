import { BiWifi2 } from 'react-icons/bi';
import { BsBatteryFull } from 'react-icons/bs';
import { PiCellSignalFull } from 'react-icons/pi';
import KeyboardMobile from './components/KeyboardMobile';

const MobileScreen = ({ displayInput }) => {
  return (
    <>
      <div className="phone">
        <div className="padding-display">
          <div className="head">
            <div className="clock">
              {new Date().toLocaleString('ru-RU', {
                timeZone: 'Europe/Moscow',
                hourCycle: 'h23',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
            <div className="island"></div>
            <div className="header-symbols">
              <BiWifi2 size={19} />
              <BsBatteryFull size={16} />
              <PiCellSignalFull size={15} />
            </div>
          </div>
          <div className="text-field">{displayInput}</div>
        </div>
        <div className="keyboard-mobile-container">
          <KeyboardMobile />
        </div>
        <div className="bottom-line"></div>
      </div>
    </>
  );
};

export default MobileScreen;

const DesktopScreen = ({ displayInput }) => {
  return (
    <>
      <div className="frame">
        <div className="innerline">
          <div className="innerframe">{displayInput}</div>
        </div>
      </div>
    </>
  );
};

export default DesktopScreen;

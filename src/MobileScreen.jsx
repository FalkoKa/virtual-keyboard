const MobileScreen = ({ displayInput }) => {
  return (
    <>
      <div className="phone">
        <div className="head">
          <span>19:28</span>
          <div className="island"></div>
          <span className="header-symbols"></span>
        </div>
        <div className="text-field">{displayInput}</div>
        <div className="bottom-line"></div>
      </div>
    </>
  );
};

export default MobileScreen;

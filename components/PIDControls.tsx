import React from 'react';

const PIDControls: React.FC = () => {
  return (
    <div className="pid-controls-container">
      <div className="pid-controls-box">
        <h3>PID Controls</h3>
        <div className="control-item">
          <span className="control-label">Master Control</span>
          <span className="control-status">ON</span>
        </div>
        <div className="control-item">
          <span className="control-label">Steering Rack</span>
          <span className="control-status">OFF</span>
        </div>
        <div className="control-item">
          <span className="control-label">Brake</span>
          <span className="control-status">OFF</span>
        </div>
        <div className="control-item">
          <span className="control-label">Motors</span>
          <span className="control-status">OFF</span>
        </div>
      </div>
      <div className="car-container2">
        <img src="/images/Car image.svg" alt="Car2" className="car-image2" />
        <img src="/images/Line 44.svg" alt="Arrow3" className="arrow3-image" />
        <img src="/images/Line 43.svg" alt="Arrow" className="arrow4-image" />
      </div>
    </div>
  );
};

export default PIDControls;

import React from 'react';

const PIDMasterValues: React.FC = () => {
  return (
    <div className="pid-master-values-screen">
      <div className="pid-values-container">
        <h3>PID Master Values</h3>
        <div className="pid-values">
          <div className="pid-value-item">
            <span className="pid-label">Steering PID Output (+/- 1024)</span>
            <span className="pid-value">504</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Brake PID Output (+/- 1024)</span>
            <span className="pid-value">203</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Motor R PID Output (0 to 5000)</span>
            <span className="pid-value">2500</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Motor R PID Output (0 to 5000)</span>
            <span className="pid-value">2500</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Master PID Output (0 to 1000)</span>
            <span className="pid-value">350</span>
          </div>
        </div>
      </div>
      <div className="car-image-container">
        <img src="/images/Car image.svg" alt="Car" className="car-image1" />
        <img src="/images/Line 43.svg" alt="Arrow1" className="arrow1-image" />
        <img src="/images/Line 44.svg" alt="Arrow" className="arrow-image" />
      </div>
    </div>
  );
};

export default PIDMasterValues;

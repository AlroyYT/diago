import React from 'react';

const ControlUnit1: React.FC = () => {
  return (
    <div className="control-unit-screen">
      <div className="control-unit-container">
        <div className="control-unit-box">
          <h3>Control Unit 1</h3>
          <div className="control-unit-item">
            <span className="control-unit-label">ECU2-ICU</span>
            <span className="control-unit-status">Heartbeat</span>
            <span className="control-unit-status-detail">BEATING</span>
          </div>
          <div className="control-unit-item">
            <span className="control-unit-label">ECU716-VHMS</span>
            <span className="control-unit-status">Heartbeat</span>
            <span className="control-unit-status-detail">BEATING</span>
          </div>
          <div className="control-unit-item">
            <span className="control-unit-label">ECU8-USU</span>
            <span className="control-unit-status">Heartbeat</span>
            <span className="control-unit-status-detail">BEATING</span>
          </div>
          <div className="control-unit-item">
            <span className="control-unit-label">17 - Monitor and Processor</span>
            <span className="control-unit-status">Status</span>
            <span className="control-unit-status-detail">PROCESSING</span>
          </div>
        </div>
      </div>
      <div className="car-container3">
        <img src="/images/Car image.svg" alt="Car3" className="car-image3" />
        <img src="/images/Line 44.svg" alt="Horizontal Arrow" className="arrow-horizontal" />
        <img src="/images/Line 43.svg" alt="Vertical Arrow" className="arrow-vertical" />
      </div>
    </div>
  );
};

export default ControlUnit1;

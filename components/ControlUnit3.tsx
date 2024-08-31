import React from 'react';

const ControlUnit3: React.FC = () => {
  return (
    <div className="control-unit3-screen">
      <div className="control-unit3-container">
        <div className="control-unit3-box">
          <h3>Control Unit 3</h3>
          <div className="control-unit3-item">
            <span className="control-unit3-label">ECU5 RPI-IN</span>
            <span className="control-unit3-status">Heartbeat</span>
            <span className="control-unit3-status-detail">BEATING</span>
          </div>
          <div className="control-unit3-item">
            <span className="control-unit3-label">ECU7-HVAC</span>
            <span className="control-unit3-status">Heartbeat</span>
            <span className="control-unit3-status-detail">BEATING</span>
          </div>
          <div className="control-unit3-item">
            <span className="control-unit3-label">ECU8-USU</span>
            <span className="control-unit3-status">Heartbeat</span>
            <span className="control-unit3-status-detail">BEATING</span>
          </div>
          <div className="control-unit3-item">
            <span className="control-unit3-label">ECU9-LCU</span>
            <span className="control-unit3-status">Heartbeat</span>
            <span className="control-unit3-status-detail">BEATING</span>
          </div>
          <div className="control-unit3-item">
            <span className="control-unit3-label">ECU10 DashboardECU</span>
            <span className="control-unit3-status">Heartbeat</span>
            <span className="control-unit3-status-detail">BEATING</span>
          </div>
          <div className="control-unit3-item">
            <span className="control-unit3-label">ECU11-TableECU</span>
            <span className="control-unit3-status">Heartbeat</span>
            <span className="control-unit3-status-detail">BEATING</span>
          </div>
        </div>
      </div>
      <div className="car-container-unit3">
        <img src="/images/Car image.svg" alt="Car3" className="car-image-unit3" />
        <img src="/images/Line 44.svg" alt="Horizontal Arrow" className="arrow-horizontal-unit3" />
        <img src="/images/Line 43.svg" alt="Vertical Arrow" className="arrow-vertical-unit3" />
      </div>
    </div>
  );
};

export default ControlUnit3;

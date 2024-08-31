import React from 'react';

const ControlUnit2: React.FC = () => {
  return (
    <div className="control-unit2-screen">
      <div className="control-unit2-container">
        <div className="control-unit2-box">
          <h3>Control Unit 2</h3>
          <div className="control-unit2-item">
            <span className="control-unit2-label">MPU Motion Planner</span>
            <span className="control-unit2-status">Status</span>
            <span className="control-unit2-status-detail">ACTIVE</span>
          </div>
          <div className="control-unit2-item">
            <span className="control-unit2-label"></span>
            <span className="control-unit2-status">Heartbeat</span>
            <span className="control-unit2-status-detail">BEATING</span>
          </div>
          <div className="control-unit2-item">
            <span className="control-unit2-label"></span>
            <span className="control-unit2-status">Active Soul</span>
            <span className="control-unit2-status-detail">MAIN</span>
          </div>
          <div className="control-unit2-item">
            <span className="control-unit2-label">ECUX-FCU</span>
            <span className="control-unit2-status">Heartbeat</span>
            <span className="control-unit2-status-detail">BEATING</span>
          </div>
          <div className="control-unit2-item">
            <span className="control-unit2-label">ECU3-DoorECU</span>
            <span className="control-unit2-status">Heartbeat</span>
            <span className="control-unit2-status-detail">BEATING</span>
          </div>
          <div className="control-unit2-item">
            <span className="control-unit2-label"></span>
            <span className="control-unit2-status">Active Soul</span>
            <span className="control-unit2-status-detail">MAIN</span>
          </div>
          <div className="control-unit2-item">
            <span className="control-unit2-label">ECU4-RPi-OUT</span>
            <span className="control-unit2-status">Heartbeat</span>
            <span className="control-unit2-status-detail">BEATING</span>
          </div>
        </div>
      </div>
      <div className="car-container4">
        <img src="/images/Car image.svg" alt="Car4" className="car-image4" />
        <img src="/images/Line 44.svg" alt="Horizontal Arrow" className="arrow-horizontal2" />
        <img src="/images/Line 43.svg" alt="Vertical Arrow" className="arrow-vertical2" />
      </div>
    </div>
  );
};

export default ControlUnit2;

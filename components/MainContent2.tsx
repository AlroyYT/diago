import React, { useState } from 'react';
import LowLevelControls from '../components/LowLevelControls';
import PIDMasterValues from '../components/PIDMasterValues';
import PIDControls from '../components/PIDControls';
import ControlUnit1 from '../components/ControlUnit1';
import ControlUnit2 from '../components/ControlUnit2';
import ControlUnit3 from '../components/ControlUnit3';

const MainContent: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState('Battery');
  const [activeMiniSidebar, setActiveMiniSidebar] = useState<string | null>(null);

  const handleSidebarClick = (category: string) => {
    setActiveSidebar(category);
    setActiveMiniSidebar(null);
  };

  const handleMiniSidebarClick = (buttonLabel: string) => {
    setActiveMiniSidebar(buttonLabel);
  };

  const miniSidebarButtons: { [key: string]: string[] } = {
    Battery: ['Voltage and Current', 'Charge Level', 'Battery Health', 'Cell Voltages', 'Charging Status', 'Battery Status'],
    OBC: ['AC Voltage and Current', 'AC Power', 'Charging Time', 'DC Voltage and Current', 'OBC Status', 'Temperature Data'],
    AC: ['Temperature', 'Fan Speed', 'AC Status'],
    'Seating and Lights': ['External Lighting', 'Internal Lighting', 'Table Status'],
    'Car Status': ['Car Mode', 'Bywire System', 'TV', 'Car Data Level1', 'Car Data Level2', 'Car Data Level3', 'Car Data Level4', 'Error Statuses'],
    'Doors and Tyres': ['Tyres', 'Side Doors', 'Roof and Boot Doors'],
    'Vehicular Control': ['Low Level Controls', 'PID Master Values', 'PID Controls', 'Control Unit 1', 'Control Unit 2', 'Control Unit 3'],
  };

  const renderMiniSidebar = () => (
    <div className="mini-sidebar">
      {miniSidebarButtons[activeSidebar]?.map((buttonLabel) => (
        <button
          key={buttonLabel}
          className={`mini-sidebar-button ${activeMiniSidebar === buttonLabel ? 'active' : ''}`}
          onClick={() => handleMiniSidebarClick(buttonLabel)}
        >
          <div className="mini-sidebar-text">{buttonLabel}</div>
        </button>
      ))}
    </div>
  );

  const renderScreen = () => {
    switch (activeMiniSidebar) {
      case 'Low Level Controls':
        return <LowLevelControls />;
      case 'PID Master Values':
        return <PIDMasterValues />;
      case 'PID Controls':
        return <PIDControls />;
      case 'Control Unit 1':
        return <ControlUnit1 />;
      case 'Control Unit 2':
        return <ControlUnit2 />;
      case 'Control Unit 3':
        return <ControlUnit3 />;
      // Add more cases for other screens as needed
      default:
        return <div className="default-screen">Select an option from the mini-sidebar.</div>;
    }
  };

  return (
    <div className="body">
      <div className="sidebar">
        <button
          className={`sidebar-button ${activeSidebar === 'Battery' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('Battery')}
        >
          <div className="sidebar-icon">
            <img src="/images/Battery.svg" alt="Battery" />
          </div>
          <div className="sidebar-text">Battery</div>
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'OBC' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('OBC')}
        >
          <div className="sidebar-icon">
            <img src="/images/OBC.svg" alt="OBC" />
          </div>
          <div className="sidebar-text">OBC</div>
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'AC' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('AC')}
        >
          <div className="sidebar-icon">
            <img src="/images/AC.svg" alt="AC" />
          </div>
          <div className="sidebar-text">AC</div>
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'Seating and Lights' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('Seating and Lights')}
        >
          <div className="sidebar-icon">
            <img src="/images/Seating and Lights.svg" alt="Seating and Lights" />
          </div>
          <div className="sidebar-text">Seating and Lights</div>
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'Car Status' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('Car Status')}
        >
          <div className="sidebar-icon">
            <img src="/images/tesla.svg" alt="Car Status" />
          </div>
          <div className="sidebar-text">Car Status</div>
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'Doors and Tyres' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('Doors and Tyres')}
        >
          <div className="sidebar-icon">
            <img src="/images/Doors and Tyres.svg" alt="Doors and Tyres" />
          </div>
          <div className="sidebar-text">Doors and Tyres</div>
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'Vehicular Control' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('Vehicular Control')}
        >
          <div className="sidebar-icon">
            <img src="/images/Vehicular Control.svg" alt="Vehicular Control" />
          </div>
          <div className="sidebar-text">Vehicular Control</div>
        </button>
      </div>
      {renderMiniSidebar()}
      <div className="screen-content">{renderScreen()}</div>
    </div>
  );
};

export default MainContent;

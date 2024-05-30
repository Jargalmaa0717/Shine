import React from 'react';

const Tabs = ({ children, selectedIndex, onChange }) => {
  return (
    <div className="tabs">
      <div className="tab-list">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tab ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => onChange(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[selectedIndex]}
      </div>
    </div>
  );
};

export default Tabs;

import React from 'react';

const Tooltip = ({ content, children }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-text">{content}</span>
    </div>
  );
};

export default Tooltip;

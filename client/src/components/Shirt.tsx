import React from 'react';

const Shirt = ({ title, onSelect }) => {
  const handleClick = () => {
    onSelect(title);
  };

  return (
    <div>
      <h3 onClick={handleClick}>{title}</h3>
    </div>
  );
};

export default Shirt;

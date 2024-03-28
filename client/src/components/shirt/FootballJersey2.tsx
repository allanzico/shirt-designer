import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color';

const FootballJersey2 = () => {
  // Define state variables for SVG customization
  const [colors, setColors] = useState({
    collar: '#FFFFFF',
    arm: '#FF0000',
    sleeve: '#0000FF',
    body: '#00FF00',
  });
  const [texts, setTexts] = useState([]);
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [isAddingText, setIsAddingText] = useState(false);

  // Function to handle color changes
  const handleColorChange = (part, color) => {
    setColors({ ...colors, [part]: color.hex });
  };

  // Function to handle text input
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Function to handle adding text
  const handleAddText = () => {
    setIsAddingText(true);
  };

  // Function to handle clicking on the shirt to add text
  const handleShirtClick = (event) => {
    if (!isAddingText) return;
    const newText = {
      content: text,
      color: textColor,
      position: { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY },
    };
    setTexts([...texts, newText]);
    setIsAddingText(false);
    setText('');
  };

  // SVG rendering
  return (
    <div>
      <svg
        width="300"
        height="400"
        viewBox="0 0 300 400"
        onClick={handleShirtClick}
      >
        {/* Shirt */}
        <rect
          x="0"
          y="0"
          width="300"
          height="400"
          fill="none"
          onClick={handleShirtClick}
        />
        {/* Collar */}
        <path d="M50 50 h200 v30 h-200 z" fill={colors.collar} />
        {/* Left Arm */}
        <path d="M20 100 h30 v200 h-30 z" fill={colors.arm} />
        {/* Right Arm */}
        <path d="M250 100 h30 v200 h-30 z" fill={colors.arm} />
        {/* Left Sleeve */}
        <path d="M20 100 v200 q0 20 20 20 h-40 q20 0 20 -20 v-200 z" fill={colors.sleeve} />
        {/* Right Sleeve */}
        <path d="M280 100 v200 q0 20 -20 20 h40 q-20 0 -20 -20 v-200 z" fill={colors.sleeve} />
        {/* Body */}
        <rect x="50" y="80" width="200" height="240" fill={colors.body} />
        {/* Text */}
        {texts.map((textItem, index) => (
          <text
            key={index}
            x={textItem.position.x}
            y={textItem.position.y}
            fill={textItem.color}
            textAnchor="middle"
            fontSize="24"
            style={{ cursor: 'move' }}
          >
            {textItem.content}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default FootballJersey2;

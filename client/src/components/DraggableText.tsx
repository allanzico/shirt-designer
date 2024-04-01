import React, { useState } from 'react';

const DraggableText = ({ onTextAdded }) => {
  const [text, setText] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDragStart = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleDrag = (e) => {
    const { movementX, movementY } = e.nativeEvent;
    setPosition((prevPosition) => ({
      x: prevPosition.x + movementX,
      y: prevPosition.y + movementY,
    }));
  };

  const handleTextAdded = () => {
    if (text.trim() !== '') {
      onTextAdded({ text, position });
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleTextAdded}>Add Text</button>
      <div
        style={{ position: 'absolute', left: position.x, top: position.y, cursor: 'move' }}
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      >
        {text}
      </div>
    </div>
  );
};

export default DraggableText;


import { CirclePicker } from 'react-color';

const ColorPicker = ({ color, onChange, onClose }) => {
  return (
    <div>
      <CirclePicker color={color} onChange={onChange} />
      <button onClick={onClose}>Close Color Picker</button>
    </div>
  );
};

export default ColorPicker;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HexColorPicker } from "react-colorful";

// Import all shirt components
import FootballJersey from '../components/shirt/FootballJersey';
import FootballJersey2 from '../components/shirt/FootballJersey2';
import ShirtCollar from '../components/shirt/ShirtCollar';

// Define mapping between shirt types and their components
const shirtComponents = {
  FootballJersey,
  FootballJersey2,
  ShirtCollar,
  // Add more shirt components here if needed
};

// Define mapping between shirt types and their data
const shirtData = {
  FootballJersey: { colors: { collar: '#FFFFFF', arm: '#FF0000', sleeve: '#0000FF', body: '#00FF00' }, texts: [] },
  FootballJersey2: { colors: { collar: '#000000', arm: '#FFFFFF', sleeve: '#FF00FF', body: '#FFFF00' }, texts: [] },
  ShirtCollar: { 
    styles: {
      '.s0': { fill:  '#1c202b', name: 'style 1'},
      '.s1': { fill: '#0a1826', name: 'style 2' },
      '.s2': { fill: '#ffffff', name: 'style 3' },
      '.s3': { fill: '#ffffff', name: 'style 4'},
      '.s4': { fill: '#ffffff', name:'style 5'}, 
    },
    texts: [] 
  },
  // Add more shirt data here if needed
};

const CustomizationPage = () => {
  // Get the shirt type and material from the URL params
  const { shirtType, material } = useParams();
  const [openPicker, setOpenPicker] = useState<string | null>(null);
  const [styles, setStyles] = useState(shirtData[shirtType].styles);
   // Handle click on style to change fill color
   const handleClick = (selector: string) => {
    setOpenPicker(selector);
  };

  const updateStyleProperty = (selector: string, property: string, value: string) => {
    setStyles(prevStyles => ({
      ...prevStyles,
      [selector]: {
        ...prevStyles[selector],
        [property]: value
      }
    }));
  };
  // Function to handle color change
  const handleColorChangeWrapper = (selector: string) => {
    return (color) => {
      updateStyleProperty(selector, 'fill', color);
    };
  };

  // Render the selected shirt component with its props
  const RenderShirt = shirtComponents[shirtType];
  const shirtProps = {
    colors: shirtData[shirtType].colors,
    styles: styles,
    updateStyleProperty: updateStyleProperty
  };

  return (
    <div className="container mx-auto flex items-center flex-wrap flex-col pt-4 pb-12">
      <span className="text-2xl font-semibold">{shirtType}</span>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Object.keys(styles).map((selector, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(selector)}
            >
              {styles[selector].name}
            </span>
            {/* CirclePicker for each style */}
            {openPicker === selector && (
              // <CirclePicker
              //   color={styles[selector].fill}
              //   onChange={handleColorChangeWrapper(selector)}
              //   key={selector}
              // />
              <HexColorPicker color={styles[selector].fill} onChange={handleColorChangeWrapper(selector)} key={selector} />
            )}
          </div>
        ))}
      </div>
      <div>
        {/* Render the selected shirt component */}
        {RenderShirt && <RenderShirt {...shirtProps} />}
        {!RenderShirt && <div>Error: Shirt type not found</div>} {/* Handle unknown shirt types */}
        {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
      </div>
    </div>
  );
};

export default CustomizationPage;

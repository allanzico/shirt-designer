import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HexColorPicker } from "react-colorful";

// Import all shirt components
import FootballJersey from '../components/shirt/FootballJersey';
import FootballJersey2 from '../components/shirt/FootballJersey2';
import ShirtCollar from '../components/shirt/ShirtCollar';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
    texts: [],
    players: [],
  },
  // Add more shirt data here if needed
};

const CustomizationPage = () => {
  const { shirtType, material } = useParams();
  const [openOptions, setOpenOptions] = useState<string | null>(null);
  const [clickedStyle, setClickedStyle] = useState<string | null>(null);
  const [openPicker, setOpenPicker] = useState<string | null>(null);
  const [styles, setStyles] = useState(shirtData[shirtType].styles);
  const [customizations, setCustomizations] = useState<any[]>([]);
  const [players, setPlayers] = useState([]); // State to store player data


  const handlePlayerAdded = (playerData) => {
    setPlayers((prevPlayers) => [...prevPlayers, playerData]);
  };

  // Handle click on main link to toggle visibility of nested options
  const handleMainLinkClick = (option: string) => {
    setOpenOptions(openOptions === option ? null : option);
  };

  // Handle click on style label to open color picker
  const handleStyleClick = (selector: string) => {
    setClickedStyle(selector);
    setOpenPicker(selector);
  };

  // Function to close color picker
  const handleClosePicker = () => {
    setOpenPicker(null);
  };

  // Function to reset color to original one
  const handleResetColor = (selector: string) => {
    const originalColor = shirtData[shirtType].styles[selector].fill;
    setStyles((prevStyles) => ({
      ...prevStyles,
      [selector]: {
        ...prevStyles[selector],
        fill: originalColor,
      },
    }));
  };

  const updateStyleProperty = (selector: string, property: string, value: string) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [selector]: {
        ...prevStyles[selector],
        [property]: value,
      },
    }));
  };

  // Function to handle color change
  const handleColorChange = (selector: string, color: string) => {
    updateStyleProperty(selector, 'fill', color);
  };

  // Function to save customizations
  const handleSaveCustomization = () => {
    const customization = {
      shirtType,
      material,
      styles: { ...styles },
    };
    setCustomizations((prevCustomizations) => [...prevCustomizations, customization]);
  };

  // Render the selected shirt component with its props
  const RenderShirt = shirtComponents[shirtType];
  const shirtProps = {
    colors: shirtData[shirtType].colors,
    styles: styles,
    updateStyleProperty: updateStyleProperty,
  };

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto items-center flex-wrap pt-4 pb-12">

    <div className="col-span-12 md:col-span-4">
    <div className="flex flex-row gap-2">
      <ul>
            <li className={`px-1 py-1 rounded-sm ${openOptions === 'Styles' && 'bg-green-500 text-white'}`} onClick={() => handleMainLinkClick('Styles')}>
              Styles
            </li>
            <li className={`px-1 py-1 rounded-sm ${openOptions === 'Texts' && 'bg-green-500 text-white'}`} onClick={() => handleMainLinkClick('Texts')}>
              Texts
            </li>
            <li className={`px-1 py-1 rounded-sm ${openOptions === 'Players' && 'bg-green-500 text-white'}`} onClick={() => handleMainLinkClick('Texts')}>
              Players
            </li>
            <button onClick={handleSaveCustomization}>Save Customization</button>
          </ul>
          <ul>
          {openOptions === 'Styles' && (
              <ul className="nested-links cursor-pointer">
                {Object.keys(styles).map((selector, index) => (
                  <li
                    key={index}
                    onClick={() => handleStyleClick(selector)}
                    className={`px-1 py-1 rounded-sm ${clickedStyle === selector && 'bg-gray-200 '}`}
                  >
                    {styles[selector].name}
                  </li>
                ))}
              </ul>
            )}
            {openOptions === 'Texts' && (
              <ul className="nested-links">
                {shirtData[shirtType].texts.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            )}
          </ul>
         
      </div>
    </div>


    <div className="col-span-12 md:col-span-6">
    <div className="flex-1">
        {/* Render the selected shirt component */}
        {RenderShirt && <RenderShirt {...shirtProps} />}
        {!RenderShirt && <div>Error: Shirt type not found</div>} {/* Handle unknown shirt types */}
      </div>
    </div>


    <div className="col-span-12 md:col-span-2">
    <div className="flex-1">
        {/* Display color pickers */}
        {openPicker && (
          <div className="flex flex-col gap-1">
            <HexColorPicker
              color={styles[openPicker].fill}
              onChange={(color) => handleColorChange(openPicker, color)}
            />
            <div className="flex flex-row gap-1 justify-between">
              <input
                type="text"
                value={styles[openPicker].fill}
                onChange={(e) => handleColorChange(openPicker, e.target.value)}
                className="text-sm border w-1/2 border-gray-300 rounded-sm py-1 px-1 "
              />
              <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={handleClosePicker} />
              <ArrowPathIcon className="h-6 w-6 cursor-pointer" onClick={() => handleResetColor(openPicker)} />
            </div>
          </div>
        )}
      </div>
    </div>

</div>
  );
};


export default CustomizationPage;

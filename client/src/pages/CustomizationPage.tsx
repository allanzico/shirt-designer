// CustomizationPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

// Import all shirt components
import FootballJersey from '../components/shirt/FootballJersey';
import FootballJersey2 from '../components/shirt/FootballJersey2';

// Define mapping between shirt types and their components
const shirtComponents = {
  FootballJersey,
  FootballJersey2,
  // Add more shirt components here if needed
};

// Define mapping between shirt types and their data
const shirtData = {
  FootballJersey: { colors: { collar: '#FFFFFF', arm: '#FF0000', sleeve: '#0000FF', body: '#00FF00' }, texts: [] },
  FootballJersey2: { colors: { collar: '#000000', arm: '#FFFFFF', sleeve: '#FF00FF', body: '#FFFF00' }, texts: [] },
  // Add more shirt data here if needed
};

const CustomizationPage = () => {
  // Get the shirt type parameter from the URL
  const { shirtType } = useParams();

  // Render the selected shirt component with its props
  const RenderShirt = shirtComponents[shirtType];
  const shirtProps = shirtData[shirtType];

  return (
    <div>
      <h2>Customize Your Shirt</h2>
      {/* Render the selected shirt component */}
      {RenderShirt && <RenderShirt {...shirtProps} />}
      {!RenderShirt && <div>Error: Shirt type not found</div>} {/* Handle unknown shirt types */}
    </div>
  );
};

export default CustomizationPage;

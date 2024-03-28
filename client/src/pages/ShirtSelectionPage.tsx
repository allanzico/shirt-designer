import Shirt from 'components/Shirt';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation


const ShirtSelectionPage = () => {
  // Imaginary database representing stored shirts
  const [shirts] = useState([
    { title: 'FootballJersey', type: 'FootballJersey' },
    { title: 'FootballJersey2', type: 'FootballJersey2' },
    // Add more shirt types if needed
  ]);

  // History hook for navigation
  const navigation = useNavigate();

  // Function to handle selecting a shirt
  const handleSelectShirt = (shirtType) => {
    // Navigate to the customization page for the selected shirt
    navigation(`/customize/${shirtType}`);
  };

  return (
    <div>
      <h2>Select a Shirt</h2>
      {/* Render shirts from the imaginary database */}
      {shirts.map((shirt) => (
        <Shirt key={shirt.type} title={shirt.title} onSelect={handleSelectShirt} />
      ))}
    </div>
  );
};

export default ShirtSelectionPage;

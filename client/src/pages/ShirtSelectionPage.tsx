import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Shirt from '../components/Shirt';

const ShirtSelectionPage = () => {
  // Imaginary database representing stored shirts
  const [shirts] = useState([
    { title: 'Football Jersey', type: 'FootballJersey', basePrice: 29.99, materialOptions: [
      { name: 'Nylon', priceAdjustment: 0 },
      { name: 'Cotton', priceAdjustment: 10 }, // Example: Cotton material increases the price by $10
      // Add more material options if needed
    ]},
    { title: 'Football Jersey 2', type: 'FootballJersey2', basePrice: 39.99, materialOptions: [
      { name: 'Nylon', priceAdjustment: 0 },
      { name: 'Cotton', priceAdjustment: 15 }, // Example: Cotton material increases the price by $15
      // Add more material options if needed
    ]},
    // Add more shirts with their base prices and material options if needed
    { title: 'Shirt collar', type: 'ShirtCollar', basePrice: 39.99, materialOptions: [
        { name: 'Nylon', priceAdjustment: 0 },
        { name: 'Cotton', priceAdjustment: 15 }, // Example: Cotton material increases the price by $15
        // Add more material options if needed
      ]},
  ]);

  // State to manage material selection for each shirt
  const [selectedMaterials, setSelectedMaterials] = useState({});

  // Function to handle material selection for a shirt
  const handleMaterialChange = (shirtType, event) => {
    const selectedMaterialName = event.target.value;
    const materialOption = shirts.find(shirt => shirt.type === shirtType).materialOptions.find(option => option.name === selectedMaterialName);
    setSelectedMaterials({ ...selectedMaterials, [shirtType]: materialOption });
  };

  // Function to calculate the total price for a shirt
  const calculateTotalPrice = (shirtType) => {
    const selectedShirt = shirts.find(shirt => shirt.type === shirtType);
    const selectedMaterial = selectedMaterials[shirtType] || selectedShirt.materialOptions[0]; // Default to the first material option if not selected
    return selectedShirt.basePrice + selectedMaterial.priceAdjustment;
  };

  return (
    <div>
      <h2>Select a Shirt</h2>
      {/* Render shirts from the imaginary database */}
      {shirts.map((shirt) => (
        <div key={shirt.type}>
          <Shirt title={shirt.title}  />
          <p>Base Price: ${shirt.basePrice}</p>
          {/* Material selection dropdown */}
          <div>
            <label htmlFor={`material-${shirt.type}`}>Select Material:</label>
            <select id={`material-${shirt.type}`} value={selectedMaterials[shirt.type]?.name || ''} onChange={(event) => handleMaterialChange(shirt.type, event)}>
              {shirt.materialOptions.map(option => (
                <option key={option.name} value={option.name}>{option.name}</option>
              ))}
            </select>
          </div>
          {/* Display selected material and total price */}
          <p>Selected Material: {selectedMaterials[shirt.type]?.name || shirt.materialOptions[0].name}</p>
          <p>Total Price: ${calculateTotalPrice(shirt.type).toFixed(2)}</p>
          <Link to={`/customize/${shirt.type}?material=${selectedMaterials[shirt.type]?.name || shirt.materialOptions[0].name}`}>Customize</Link>
        </div>
      ))}
    </div>
  );
};

export default ShirtSelectionPage;

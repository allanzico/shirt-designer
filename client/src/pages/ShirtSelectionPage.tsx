import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Shirt from '../components/Shirt';
import Nav from 'components/navigation/Nav';

const ShirtSelectionPage = () => {
  // Imaginary database representing stored shirts
  const [shirts] = useState([
    { title: 'Football Jersey', type: 'FootballJersey', basePrice: 29.99,imageUrl: 'https://source.unsplash.com/random/?shirt', materialOptions: [
      { name: 'Nylon', priceAdjustment: 0 },
      { name: 'Cotton', priceAdjustment: 10 }, // Example: Cotton material increases the price by $10
      // Add more material options if needed
    ]},
    { title: 'Football Jersey 2', type: 'FootballJersey2', basePrice: 39.99, 
    imageUrl: 'https://source.unsplash.com/random/?shirt',materialOptions: [
      { name: 'Nylon', priceAdjustment: 0 },
      { name: 'Cotton', priceAdjustment: 15 }, // Example: Cotton material increases the price by $15
      // Add more material options if needed
    ]},
    // Add more shirts with their base prices and material options if needed
    { title: 'Shirt collar', type: 'ShirtCollar', basePrice: 39.99,
    imageUrl: 'https://source.unsplash.com/random/?shirt',
    materialOptions: [
        { name: 'Nylon', priceAdjustment: 0 },
        { name: 'Cotton', priceAdjustment: 15 }, // Example: Cotton material increases the price by $15
        // Add more material options if needed
      ]},
  ]);

  // State to manage material selection for each shirt
  const [selectedMaterials, setSelectedMaterials] = useState({ name: 'Nylon', priceAdjustment: 0 });

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

    <section className="bg-white py-8">

<div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
      </div>
    </nav>
    {shirts.map((shirt) => (
      <Shirt shirt={shirt} selectedMaterials={selectedMaterials} calculateTotalPrice={calculateTotalPrice} handleMaterialChange={handleMaterialChange} />
      ))}
    </div>

</section>



  );
};

export default ShirtSelectionPage;

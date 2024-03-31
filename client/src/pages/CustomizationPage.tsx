import React from 'react';
import { useParams } from 'react-router-dom';

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
  ShirtCollar: { colors: { collar: '#000000', arm: '#FFFFFF', sleeve: '#FF00FF', body: '#FFFF00' }, texts: [] },
  // Add more shirt data here if needed
};

const CustomizationPage = () => {
  // Get the shirt type and material from the URL params
  const { shirtType, material } = useParams();
  let cart = [];

  // Render the selected shirt component with its props
  const RenderShirt = shirtComponents[shirtType];
  const shirtProps = shirtData[shirtType];

  // Function to handle adding item to the cart
  const handleAddToCart = () => {
    const item = { type: shirtType, material: material, customization: shirtProps };
    cart.push(item); // Add the item to the cart
    console.log('Item added to cart:', item);
  };

  return (
    <div>
      <h2>Customize Your Shirt</h2>
      {/* Render the selected shirt component */}
      {RenderShirt && <RenderShirt {...shirtProps} />}
      {!RenderShirt && <div>Error: Shirt type not found</div>} {/* Handle unknown shirt types */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CustomizationPage;

import { footballShirts } from 'data';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditIconPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedIcon, setSelectedIcon] = useState<any>(null);
  const [categoryIcons, setCategoryIcons] = useState<any[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("black");

  useEffect(() => {
    // Find the icon item based on the ID from URL parameters
    const foundIcon = Object.values(footballShirts).flat().find((icon) => icon.id === id);
    setSelectedIcon(foundIcon);

    // Reset color to the original when a new icon is selected
    setSelectedColor( "black");

    // Find other icons in the same category
    const category = Object.keys(footballShirts).find(category => footballShirts[category as keyof typeof footballShirts].find(icon => icon.id === id));
    if (category) {
      const otherIcons = footballShirts[category as keyof typeof footballShirts].filter(icon => icon.id !== id);
      setCategoryIcons(otherIcons);
    }
  }, [id]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
    // Update color of the selected icon
    setSelectedIcon((prevIcon: any) => ({ ...prevIcon, color: e.target.value }));
  };

  if (!selectedIcon) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Icon: {selectedIcon.name}</h1>
      <div>
        <h2>Selected Icon:</h2>
        <div>{selectedIcon.element}</div>
        <div>
          <label htmlFor="colorPicker">Select Color:</label>
          <input id="colorPicker" type="color" value={selectedColor} onChange={handleColorChange} />
        </div>
      </div>
      <div>
        <h2>Other Icons in the Same Category:</h2>
        <div>
          {categoryIcons.map((icon, index) => (
            <Link key={index} to={`/edit/${icon.id}`}>
              {icon.svg}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditIconPage;


// import ShirtsCollar from 'components/shirt/ShirtsCollar';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

// const IconsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const footballShirts = {
//     collarShirts: [
//         {
//             id: uuidv4(),
//             element: <ShirtsCollar />,
//         }
//     ],
// }

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <h1>SVG Icons</h1>
//       <div className="categories">
//         <ul>
//           {Object.keys(footballShirts).map((category, index) => (
//             <li key={index}>
//               <a href="#" onClick={() => handleCategoryClick(category)}>{category}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="selected-category">
//         {selectedCategory && (
//           <div>
//             <h2>{selectedCategory}</h2>
//             <div className="icon-container">
//               {footballShirts[selectedCategory as keyof typeof footballShirts].map((item, index) => (
//                 <div className="icon" key={index}>
// <Link to={`/edit/${item.id}`} >
//                     {item.element}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IconsPage;

import React, { useState } from 'react';
import { ChromePicker } from 'react-color'; // Assuming you're using react-color for color picker

function SvgEditor() {
  const [svgElements, setSvgElements] = useState<any>([]); // State to store SVG elements
  const [selectedElement, setSelectedElement] = useState<any>(null); // State to store the selected SVG element
  const [color, setColor] = useState('#000000'); // State to store the selected color

  // Function to add a new SVG element to the editor
  const addSvgElement = () => {
    const newSvgElement = (
      <g key={svgElements.length} onClick={() => selectElement(svgElements.length)}>
        <path d="M50,50H150V150H50Z" fill="#FF0000" /> {/* Example path with red fill */}
        <path d="M200,200H300V300H200Z" fill="#00FF00" /> {/* Example path with green fill */}
      </g>
    );
    setSvgElements([...svgElements, newSvgElement]);
  };

  // Function to handle selecting an SVG element
  const selectElement = (index: any) => {
    setSelectedElement(index);
  };

  // Function to handle color change
  const handleColorChange = (newColor: any) => {
    setColor(newColor.hex);
    if (selectedElement !== null) {
      // Update the fill color of each path within the selected SVG element
      const updatedSvgElements = [...svgElements];
      const selectedSvgElement = updatedSvgElements[selectedElement].props.children.map((child: any, index:any) => {
        if (child.type === 'path') {
          return React.cloneElement(child, { fill: newColor.hex });
        }
        return child;
      });
      updatedSvgElements[selectedElement] = React.cloneElement(
        updatedSvgElements[selectedElement],
        { children: selectedSvgElement }
      );
      setSvgElements(updatedSvgElements);
    }
  };

  return (
    <div>
      <button onClick={addSvgElement}>Add SVG Element</button>
      <ChromePicker color={color} onChange={handleColorChange} />
      <svg width="400" height="400">
        {svgElements.map((element:any, index:any) => (
          <g key={index}>{element}</g>
        ))}
      </svg>
    </div>
  );
}

export default SvgEditor;



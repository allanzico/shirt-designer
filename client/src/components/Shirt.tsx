import React from 'react';
import { Link } from 'react-router-dom';

const Shirt = ({ shirt, selectedMaterials, handleMaterialChange, calculateTotalPrice }) => {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col gap-2">
    <div>
        <img className="hover:grow hover:shadow-lg" src={shirt.imageUrl} />
        <p className=" text-gray-900 text-sm mt-2">{shirt.title}</p>
        <div><span className='text-gray-900 text-sm'>Base price:</span> <span className='text-sm text-green-700'>${shirt.basePrice}</span></div>
    </div>
    <div className='flex flex-col gap-1'>

          {/* Material selection dropdown */}
          <div className='relative inline-block text-left'>
            <label htmlFor={`material-${shirt.type}`} className='text-sm'>Select Material:</label>
            <select id={`material-${shirt.type}`} value={selectedMaterials[shirt.type]?.name || ''} onChange={(event) => handleMaterialChange(shirt.type, event)}
            className='inline-block w-full border border-gray-200 justify-center gap-x-1.5 rounded-sm bg-white px-2 py-1 text-sm'
            >
              {shirt.materialOptions.map(option => (
                <option key={option.name} value={option.name}
                className="absolute right-0 z-10 w-56 origin-top-right rounded-sm bg-white border border-gray-200"
                >{option.name}</option>
              ))}
            </select>
          </div>
          <div><span className='text-sm'>Total Price:</span> <span className='text-md text-green-700 font-semibold'>${calculateTotalPrice(shirt.type).toFixed(2)}</span></div>
          <Link 
          to={`/customize/${shirt.type}?material=${selectedMaterials[shirt.type]?.name || shirt.materialOptions[0].name}`}
          state={{
            shirtType: shirt.type,
            selectedMaterial: selectedMaterials[shirt.type] || shirt.materialOptions[0],
            totalPrice: calculateTotalPrice(shirt.type),
          }}
          className='flex justify-center items-center text-gray-700 font-semibold uppercase text-xs py-2 px-4 rounded-sm border border-gray-500'
          >Customize</Link>
    </div>
</div>
  );
};

export default Shirt;

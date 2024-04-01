import { PlusIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const PlayerForm = ({ onPlayerAdded }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']; // Array of available sizes
  const [name, setName] = useState('');
  const [size, setSize] = useState(sizes[0]); // State for selected size
 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handlePlayerAdded = () => {
    if (name.trim() !== '' && size.trim() !== '') {
      onPlayerAdded({ name, size });
      setName('');
      setSize(sizes[0]);
    }
  };

  return (
    <div className='flex flex-row justify-between gap-1'>
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange} className='flex text-sm border border-gray-300 rounded-sm px-2' />
      <div className='relative inline-block text-left'>
    <select value={size} onChange={handleSizeChange}
    className='inline-block w-full border border-gray-200 justify-center gap-x-1.5 rounded-sm bg-white px-2 py-1 text-sm'
    >
      {sizes.map((option,index) => (
        <option key={index} value={option}
        className="absolute right-0 z-10 w-56 origin-top-right rounded-sm bg-white border border-gray-200"
        >{option}</option>
      ))}
    </select>
  </div>
  <div className=' bg-green-500 text-white cursor-pointer'>
  <PlusIcon className='h-6 w-6 ' onClick={handlePlayerAdded} />
  </div>
  
    </div>
   
    // <div className='flex flex-row justify-between gap-2'>
    //   <input type="text" placeholder="Name" value={name} onChange={handleNameChange} className='flex text-sm border border-gray-300 rounded-sm px-2' />
    //   {/* Select dropdown for sizes */}
    //   <select value={size} onChange={handleSizeChange}
    //         className='inline-block w-full border border-gray-200 justify-center gap-x-1.5 rounded-sm bg-white px-2 py-1 text-sm'
    //         >
    //           {sizes.map((sizeOption, index) => (
    //             <option key={index} value={sizeOption}
    //             className="absolute right-0 z-10 w-full origin-top-right rounded-sm bg-white border border-gray-200"
    //             >{sizeOption}</option>
    //           ))}
    //         </select>
    //  <UserPlusIcon className='' onClick={handlePlayerAdded} />
    // </div>
  );
};

export default PlayerForm;

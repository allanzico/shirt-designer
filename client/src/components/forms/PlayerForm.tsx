
import { useState } from 'react';

const PlayerForm = ({ onPlayerAdded }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']; // Array of available sizes
  const [name, setName] = useState('');
  const [number, setNumber] = useState(''); // State for player name
  const [size, setSize] = useState(sizes[0]); // State for selected size
 
  const handlePlayerAdded = () => {
    if (name.trim() !== '' && size.trim() !== '' && number.trim() !== ''){
      onPlayerAdded({ name, size, number });
      setName('');
      setNumber('');
      setSize(sizes[0]);
    }
  };

  return (
<div className="grid grid-cols-12 gap-2">


<div className="col-span-12 md:col-span-6 lg:col-span-2">
<input type="text" placeholder="00" value={number} onChange={(e)=>setNumber(e.target.value)} className='flex text-sm border border-gray-300 rounded-sm px-2 py-1 w-full' />
</div>


<div className="col-span-12 md:col-span-6 lg:col-span-4">
<input type="text" placeholder="name" value={name} onChange={ (e) => setName(e.target.value)} className='flex text-sm border border-gray-300 rounded-sm px-2 py-1 w-full' />
</div>


<div className="col-span-12 md:col-span-6 lg:col-span-3">
<div className='relative inline-block text-left w-full'>
    <select value={size} onChange={(e) => setSize(e.target.value)}
    className='inline-block w-full border border-gray-200 justify-center gap-x-1.5 rounded-sm bg-white px-2 py-1 text-sm'
    >
      {sizes.map((option,index) => (
        <option key={index} value={option}
        className="absolute right-0 z-10 w-56 origin-top-right rounded-sm bg-white border border-gray-200"
        >{option}</option>
      ))}
    </select>
  </div>
</div>


<div className="col-span-12 md:col-span-6 lg:col-span-3 justify-center items-center">
  <button onClick={handlePlayerAdded} className='flex items-center justify-center text-sm bg-gray-200 rounded-sm px-2 py-1 w-full'>Add</button>
</div>

</div>

  );
};

export default PlayerForm;

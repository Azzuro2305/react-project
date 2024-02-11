// ---------------------------- Dropdown --------------------------------
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Options
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
          </div>
        </div>
      )}
    </div>
  );
};


// ---------------------------- Slider --------------------------------


import React, { useState } from 'react';

function Slider() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-full px-5 py-10 m-auto mt-10 bg-gray-100 rounded-lg shadow-xl w-64">
      <label htmlFor="slider" className="text-xl text-gray-700">Slider</label>
      <input 
        type="range" 
        id="slider" 
        className="w-full h-2 mt-4 rounded-full bg-blue-500 outline-none appearance-none" 
        min="0" 
        max="100" 
        value={value} 
        onChange={handleChange} 
      />
      <div className="text-right">{value}</div>
    </div>
  );
}




{/* <div className="absolute flex flex-col mt-50px w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <Link>General Cleaning</Link>
    <Link>Kitchen Cleaning</Link>
    <Link>Bathroom Cleaning</Link>
    <Link>Appliance Cleaning</Link>
    <Link>Base Board & Trim Cleaning</Link>
    <Link>Window Cleaning</Link>
</div> */}
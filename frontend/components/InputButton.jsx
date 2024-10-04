'use client';

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Plus } from 'lucide-react';

// const InputButton = ({ existingAddress }) => {
//   // State to hold form inputs
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isOpen, setIsOpen] = useState(false); // Local state to manage form visibility

//   // Effect to populate fields if editing
//   useEffect(() => {
//     if (existingAddress) {
//       setTitle(existingAddress.title);
//       setDescription(existingAddress.description);
//     } else {
//       setTitle('');
//       setDescription('');
//     }
//   }, [existingAddress]);

//   const onSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     const data = {
//       title,
//       description,
//     };

//     try {
//       if (existingAddress) {
//         // Edit existing address
//         await axios.put(`http://localhost:8080/api/addresses/${existingAddress._id}`, data);
//         console.log('Address updated successfully');
//       } else {
//         // Add new address
//         await axios.post('http://localhost:8080/api/addresses', data);
//         console.log('Address added successfully');
//       }

//       // Reset form fields and close modal if applicable
//       setTitle('');
//       setDescription('');
//       setIsOpen(false); // Close the modal or reset the state
//     } catch (error) {
//       console.error('Error creating/updating address:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-end bg-red-100 p-4 rounded-b-lg">
//       {/* Button to toggle the form */}
//       <button
//         onClick={() => setIsOpen((prev) => !prev)} // Toggle form visibility
//         className="flex items-center text-white transition ease-in-out delay-50 bg-gray-900 hover:scale-105 hover:bg-gray-800 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
//       >
//         <Plus className="pr-2" /> New Address
//       </button>

//       {/* Conditional rendering of the form based on isOpen state */}
//       {isOpen && (
//         <form onSubmit={onSubmit} className="flex space-x-2 w-full">
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="flex-1 px-3 py-2 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="flex-1 px-3 py-2 border rounded"
//           />
//           <button
//             type="submit"
//             className="flex items-center text-white transition ease-in-out delay-50 bg-gray-900 hover:scale-105 hover:bg-gray-800 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//           >
//             <Plus className="pr-2" /> {existingAddress ? 'Update address' : 'Add address'}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default InputButton;

import React from 'react';

const InputButton = ({ setIsOpen, className }) => {
  return (
    <button
      onClick={() => setIsOpen(true)} // Open the modal on button click
      className={`flex items-center text-white transition ease-in-out delay-50 bg-gray-900 
      hover:scale-105 hover:bg-gray-800 duration-200 font-large rounded-lg text-lg px-20 
      py-2.5 text-center ${className}`}
    >
      Add Address
    </button>
  );
};

export default InputButton;


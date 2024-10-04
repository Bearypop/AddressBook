'use client';

import { FileEdit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import Modal from '@/components/Modal';

const AddressCard = (props) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDeleteAddress = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/addresses/${props.address._id}`,
      );
      console.log('Address deleted successfully');
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  return (
    <div className="flex justify-between rounded-lg shadow-lg overflow-hidden bg-blue-100 my-8 w-3/4 mx-auto">
      <div className="px-6 py-4">
        <h3 className="text-lg font-medium text-gray-900">
          {props.address.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{props.address.description}</p>
      </div>
      <div className="bg-green-100 flex flex-col p-2">

        <FileEdit
          className="py-1 cursor-pointer transform scale-150 mt-2"
          onClick={() => setIsEditOpen(true)}
        />

        <Trash2
          className="py-1 cursor-pointer transform scale-150 mt-1.5"
          onClick={() => {
            handleDeleteAddress();
          }}
        />
      </div>

      {/* Conditionally render the Modal for editing */}
      {isEditOpen && (
        <Modal
          setIsOpen={setIsEditOpen}  // Pass state function to close the modal
          existingAddress={props.address}  // Pass the address for editing
        />
      )}
    </div>
  );
};

export default AddressCard;

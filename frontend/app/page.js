'use client'

import { useState } from 'react';
import AddressCardList from '@/components/AddressCardList';
import InputButton from '@/components/InputButton';
import Modal from '@/components/Modal'; // Import the Modal component

const Home = () => {
  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Button to open the form */}
      <InputButton setIsOpen={setIsOpen} className="mt-10 mb-6" />

      {/* Conditionally render the Modal form */}
      {isOpen && (
        <Modal setIsOpen={setIsOpen} />
      )}

      <div className="bg-green-200 flex justify-center pt-8 w-3/5">
        <AddressCardList />
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ setIsOpen, existingAddress }) => {
    const [title, setTitle] = useState(existingAddress?.title || '');
    const [description, setDescription] = useState(existingAddress?.description || '');

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = { title, description };

        try {
            if (existingAddress) {
                // Edit existing address
                await axios.put(`http://localhost:8080/api/addresses/${existingAddress._id}`, data);
            } else {
                // Add new address
                await axios.post('http://localhost:8080/api/addresses', data);
            }

            setIsOpen(false); // Close the modal after submission
        } catch (error) {
            console.error('Error creating/updating address:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-lg font-bold mb-4">{existingAddress ? 'Edit Address' : 'Add Address'}</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)} // Close the modal without saving
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            {existingAddress ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;

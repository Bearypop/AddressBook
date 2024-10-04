'use client'

import AddressCard from './AddressCard'
import axios from 'axios';
import { useState, useEffect } from 'react';

// render list of AddressCard components
const AddressCardList = () => {
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        // make a GET request to backend server via axios
        const response = await axios.get('http://localhost:8080/api/addresses')
        // update the addresses state with the retrieved data
        setAddresses(response.data)
      } catch (error) {
        console.error('Error fetching addresses:', error)
      }
    }

    fetchAddresses()
  }, [addresses])

  return (
    <div className="flex-1 max-w-3xl">
      {addresses.map((address) => (
        <AddressCard key={address.id} address={address} />
      ))}
    </div>
  )
}

export default AddressCardList

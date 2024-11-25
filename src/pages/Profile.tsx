import React from 'react';
import { useStore } from '../store/useStore';

export default function Profile() {
  const addresses = useStore((state) => state.addresses);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
        {addresses.length === 0 ? (
          <p className="text-gray-600">No addresses saved yet.</p>
        ) : (
          <div className="grid gap-4">
            {addresses.map((address, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <p className="font-medium">{address.fullName}</p>
                <p className="text-gray-600">
                  {address.streetAddress}, {address.city}
                </p>
                <p className="text-gray-600">
                  {address.state}, {address.country} {address.postalCode}
                </p>
                <p className="text-gray-600">{address.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <p className="text-gray-600">No orders yet.</p>
      </div>
    </div>
  );
}
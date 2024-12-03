'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleHome = () => {
    router.push('/diabetesapp');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age (years)
              </label>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full"
                placeholder="Enter your age"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kgs)
              </label>
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full"
                placeholder="Enter your weight"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (feet)
              </label>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full"
                placeholder="Enter your height"
              />
            </div>
            <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
              Save Profile
            </Button>
          </form>
        ) : (
          <div>
            <p className="mb-4"><strong>Name:</strong> {name}</p>
            <p className="mb-4"><strong>Age:</strong> {age} years</p>
            <p className="mb-4"><strong>Weight:</strong> {weight} kgs</p>
            <p className="mb-4"><strong>Height:</strong> {height} feet</p>
            <div className="space-y-2">
              <Button onClick={handleEdit} className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
                Edit Profile
              </Button>
              <Button onClick={handleHome} className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
                Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

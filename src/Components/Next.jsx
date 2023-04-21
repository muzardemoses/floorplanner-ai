import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { PlusIcon } from '@heroicons/react/solid';

export const Next = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPurchased, setIsPurchased] = useState(false);

  const onSubmitName = (data) => {
    setName(data.name);
    setStep(2);
  };

  const onSubmitDescription = (data) => {
    setDescription(data.description);
    setStep(3);
  };

  const onSubmitPurchase = () => {
    setIsPurchased(true);
    setStep(4);
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setIsPurchased(false);
    setStep(1);
  };

  const renderNameForm = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-2xl font-bold mb-4">Step One: Name</h2>
      <form onSubmit={handleSubmit(onSubmitName)} className="flex flex-col space-y-4">
        <input type="text" placeholder="Enter Name" {...register('name')} className="px-4 py-2 border rounded-md" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Next</button>
      </form>
    </div>
  );

  const renderDescriptionForm = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-2xl font-bold mb-4">Step Two: Floor plan description for the AI</h2>
      <form onSubmit={handleSubmit(onSubmitDescription)} className="flex flex-col space-y-4">
        <textarea placeholder="Enter Description" {...register('description')} className="px-4 py-2 border rounded-md"></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Next</button>
      </form>
    </div>
  );

  const renderPurchaseForm = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-2xl font-bold mb-4">Step Three: Purchase</h2>
      <p className="text-lg font-medium">Name: {name}</p>
      <p className="text-lg font-medium">Description: {description}</p>
      <button onClick={onSubmitPurchase} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Purchase</button>
    </div>
  );

  const renderResults = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <p className="text-lg font-medium">Name: {name}</p>
      <p className="text-lg font-medium">Description: {description}</p>
      {isPurchased ? (
        <div>
          <img src="placeholder-image.jpg" alt="Placeholder" className="w-full rounded-md" />
        </div>
      ) : (
        <div className="flex flex-col space-y-4 items-center">
          <p className = "text-lg font-medium">You have not purchased this floor plan yet.</p>
            <button onClick={resetForm} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Reset</button>
        </div>
        )}
    </div>
    );
      
    return (
        <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-3xl font-bold mb-4">Floor Plan Generator</h1>
            {step === 1 && renderNameForm()}
            {step === 2 && renderDescriptionForm()}
            {step === 3 && renderPurchaseForm()}
            {step === 4 && renderResults()}
        </div>
    );
};



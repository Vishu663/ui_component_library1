// src/components/Form/Form.tsx
import React from "react";

interface FormProps {
  onSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gather form data and call onSubmit
    onSubmit(() => {
      console.log("Submitted!");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md">
      <input type="text" placeholder="Enter you name" />
      <input type="email" placeholder="Enter you email" />
      <input type="password" placeholder="Enter you password" />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

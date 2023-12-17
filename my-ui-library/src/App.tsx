// src/App.tsx
import React, { useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal"; // Import the Modal component
import ts from "./assets/ts-logo.png";
import js from "./assets/js.png";

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen);
  };

  const handleToggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <div className="container">
      {/* Navbar Component */}
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Card Component */}
      <div className="card-container">
        <Card
          imageSrc={ts}
          title="TypeScript"
          description="TypeScript is an alternative of JavaScript that helps in better error recognition"
        />
        <Card
          imageSrc={js}
          title="JavaScript"
          description="JavaScript is a scripting language used to create and control dynamic website content"
        />
      </div>

      {/* Button Component */}
      <div className="button-container">
        <Button
          buttonText="Click to Open Form"
          onButtonClick={handleToggleForm}
        />
      </div>

      {/* Form Component */}
      {isFormOpen && (
        <div className="form-container">
          <Form />
          <Button
            buttonText="Privacy Policy"
            onButtonClick={handleToggleModal}
          />
        </div>
      )}

      {/* Modal Component */}
      {isModalOpen && <Modal onClose={handleToggleModal} />}
    </div>
  );
};

export default App;

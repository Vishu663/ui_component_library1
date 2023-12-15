import React from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
  return (
    <div>
      <Button onClick={() => console.log("Button clicked")} label="Click me" />
      <Card title="Sample Card" content="This is the content of the card." />
      <Form
        onSubmit={(data) => console.log("Form submitted with data:", data)}
      />
      <Modal isOpen={true} onClose={() => console.log("Modal closed")}>
        <div>
          <h2 className="text-lg font-semibold mb-2">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;

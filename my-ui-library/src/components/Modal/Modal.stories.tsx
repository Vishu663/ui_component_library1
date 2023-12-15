import { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h2 className="text-lg font-semibold mb-2">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </div>
      </Modal>
    </>
  );
};

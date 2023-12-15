// src/components/Modal/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 shadow-md rounded-md">
        {children}
        <button onClick={onClose} className="text-red-500 mt-4 cursor-pointer">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
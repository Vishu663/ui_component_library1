// src/components/Modal/Modal.tsx
import React from "react";
import "./Modal.css"; // Import a separate CSS file for styling

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Privacy Policy</h2>
        {/* Add your privacy policy content here */}
        <p>This is the privacy policy content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

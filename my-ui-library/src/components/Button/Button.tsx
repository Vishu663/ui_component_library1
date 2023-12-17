// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  onButtonClick: () => void;
  buttonText?: string; // Make buttonText optional
}

const Button: React.FC<ButtonProps> = ({
  onButtonClick,
  buttonText = "Open Form",
}) => {
  return (
    <button className="btn" onClick={onButtonClick}>
      {buttonText}
    </button>
  );
};

export default Button;

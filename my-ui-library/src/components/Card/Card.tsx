// src/components/Card/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default Card;

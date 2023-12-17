// src/stories/Card.stories.tsx
import React from "react";
import Card from "../Card/Card";

interface CardStoryProps {
  imageSrc: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export default {
  title: "Card",
  component: Card,
  argTypes: {
    imageSrc: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
};

const Template: React.FC<CardStoryProps> = (args: CardStoryProps) => (
  <Card {...args} />
);

export const Default = Template.bind({});
Default.arguments = {
  imageSrc: "image1.jpg",
  title: "Default Card",
  description: "Description for the default card.",
};

// src/components/Card/Card.stories.tsx
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Default = () => (
  <Card title="Sample Card" content="This is the content of the card." />
);

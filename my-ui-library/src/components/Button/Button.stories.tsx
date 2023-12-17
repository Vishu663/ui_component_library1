// src/stories/Button.stories.tsx
import Button from "../Button/Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <Button onButtonClick={() => console.log("Button clicked")} />
);

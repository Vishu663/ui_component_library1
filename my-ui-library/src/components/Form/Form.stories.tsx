// src/components/Form/Form.stories.tsx
import Form from "./Form";

export default {
  title: "Form",
  component: Form,
};

export const Default = () => (
  <Form onSubmit={(data) => console.log("Form submitted with data:", data)} />
);

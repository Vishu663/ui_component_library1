// src/components/Modal/Modal.stories.tsx
import { Meta, Story } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story = (args) => (
  <Modal
    onClose={function (): void {
      throw new Error("Function not implemented.");
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  onClose: () => console.log("Modal closed"),
};

export const WithPrivacyPolicyContent = Template.bind({});
WithPrivacyPolicyContent.args = {
  onClose: () => console.log("Modal closed"),
  // You can customize the content for testing purposes
  children: (
    <>
      <h2>Privacy Policy</h2>
      <p>This is the privacy policy content for testing purposes.</p>
      <button onClick={() => console.log("Close button clicked")}>Close</button>
    </>
  ),
};

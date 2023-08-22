import { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const buttonStoryProps = {
  title: "Plateron-Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default buttonStoryProps;
type Story = StoryObj<typeof buttonStoryProps>;

export const Hello: Story = {
  args: {
    label: 'Hello',
    primary: true,
    size: 'large',
  },
};

export const ClickMe: Story = {
  args: {
    label: 'Click Me',
    primary: false,
    size: 'medium',
    disabled: true,
  },
};
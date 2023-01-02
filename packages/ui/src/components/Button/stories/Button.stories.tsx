import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, IButtonProps } from "../Button.component";

//import "../../../styles/globals.css"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/UI/Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Primary or secondary button variant",
      options: ["primary", "secondary"],
      control: "select",
    },
    children: {
      description: "Children content to be rendered",
      options: ["Button", "Second Button"],
      mapping: {
        Primary: <h1>Primary</h1>,
        Secondary: <h1>Secondary</h1>,
      },
    },
    onClick: {
      description: "onClick handler for button",
      action: "onClick",
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({
  variant,
  children,
  onClick,
}: IButtonProps) => (
  <Button variant={variant} onClick={onClick}>
    {children}
  </Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: <h1>Primary</h1>,
};

Secondary.args = {
  variant: "secondary",
  children: <h1>Secondary</h1>,
};

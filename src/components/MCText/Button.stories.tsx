import type { Meta, StoryObj } from "@storybook/react";

import MCText from "./MCText";

const meta: any = {
  title: "Multi color Heading",
  component: MCText,
  argTypes: {
    color1: {
      description: "set the first color",
      defaultValue: "#186cb8",
      control: {
        type: "color",
      },
    },
    color2: {
      description: "set the second color",
      defaultValue: "#2a9a9f",
      control: {
        type: "color",
      },
    },
    color3: {
      description: "set the third color",
      defaultValue: "#f1b211",
      control: {
        type: "color",
      },
    },
    color4: {
      description: "set the fourth color",
      defaultValue: "#e83611",
      control: {
        type: "color",
      },
    },
    color5: {
      description: "set the fifth color",
      defaultValue: "#f9002f",
      control: {
        type: "color",
      },
    },
    as: {
      description: "set the heading type",
      defaultValue: "h1",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "paragraph"],
      control: {
        type: "select",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MCText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const McText: Story = {
  args: {
    Text: "Multi Text Color Heading",
    as: "h1",
    degre: 45,
    color1: "#186cb8",
    color2: "#2a9a9f",
    color3: "#f1b211",
    color4: "#e83611",
    color5: "#f9002f",
  },
};

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    // Add environment variables
    config.define = {
      ...config.define,
      process: {
        env: {
          NEXT_PUBLIC_API_URL: "https://rickandmortyapi.com/api",
        },
      },
    };
    return config;
  },
};

export default config;

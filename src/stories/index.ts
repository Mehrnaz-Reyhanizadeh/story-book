import { configure } from "@storybook/react";

// Import your stories
import "./Button.stories";
import "./Header.stories";
import "./Input.stories";
import "./Page.stories";
// Add more imports for your other story files

// Configure Storybook
configure(() => {
  // Add any global decorators, addons, or other Storybook configurations here
}, module);

import { configure } from "@storybook/react";

// Import your stories
import "./Button/Button.stories";
import "./Header/Header.stories";
import "./Input/Input.stories";
import "./Page/Page.stories";
// Add more imports for your other story files

// Configure Storybook
configure(() => {
  // Add any global decorators, addons, or other Storybook configurations here
}, module);

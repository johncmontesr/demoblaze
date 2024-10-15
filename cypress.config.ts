import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "hwupgv",
  e2e: {
    experimentalRunAllSpecs:true,
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },

});
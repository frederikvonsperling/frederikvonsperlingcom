import { defineConfig } from "@pandacss/dev";
import { uiPreset } from "ui/src/index";

export default defineConfig({
  presets: ["@pandacss/dev/presets", uiPreset],
});

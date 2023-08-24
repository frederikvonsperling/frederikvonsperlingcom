"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/panda-preset.ts
var panda_preset_exports = {};
__export(panda_preset_exports, {
  textStyles: () => textStyles,
  uiPreset: () => uiPreset
});
module.exports = __toCommonJS(panda_preset_exports);

// ../../node_modules/@pandacss/dev/dist/index.mjs
function definePreset(preset) {
  return preset;
}
function createProxy() {
  const identity = (v) => v;
  return new Proxy(identity, {
    get() {
      return identity;
    }
  });
}
var defineTokens = createProxy();
var defineSemanticTokens = createProxy();
function defineTextStyles(definition) {
  return definition;
}

// src/panda-preset.ts
var textStyles = defineTextStyles({});
var uiPreset = definePreset({
  theme: {
    tokens: {},
    extend: {
      textStyles,
      tokens: {
        colors: {
          yellow: { value: "#F6F7C2" },
          red: { value: "#C6294D" },
          purple: { value: "#D34D89" },
          pink: { value: "#DB63B8" },
          blue: { value: "#9ABAFA" }
        },
        fonts: {
          heading: {
            value: "var(--font-family-nunito)"
          },
          body: {
            value: "var(--font-family-pt-sans)"
          },
          code: {
            value: "var(--font-family-source-code-pro)"
          }
        }
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  textStyles,
  uiPreset
});

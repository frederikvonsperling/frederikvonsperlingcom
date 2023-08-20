import { definePreset } from "@pandacss/dev";

import { defineTextStyles } from '@pandacss/dev'
 
export const textStyles = defineTextStyles({
  body: {
    description: 'The body text style - used in paragraphs',
    value: {
      fontFamily: 'var(--font-family-oswald)',
      fontWeight: '400',
      fontSize: '5xl',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    }
  }
})

export const uiPreset = definePreset({
  theme: {
    extend: {
      textStyles,
      tokens: {
        // colors: { primary: "blue.500" },
      },
    },
  },
});

import { cva } from "@styled-system/css";

export default cva({
  base: {
    p: "4",
    backgroundColor: "offWhite.50",
    borderRadius: "lg",
    border: "subtle",
    height: "full",
  },
  variants: {
    isLoading: {
      true: {
        backgroundGradient: "shine",
        animation: "shine",
      },
    },
  },
});

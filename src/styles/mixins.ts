import { dimensions } from "./constants";

export const getEmSize = (size: number) => {
  return size / dimensions.fontSize.regular;
};

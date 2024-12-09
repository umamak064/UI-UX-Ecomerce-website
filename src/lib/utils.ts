import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const compareArrays = (a: (string | number)[], b: (string | number)[]): boolean => {
  return a.toString() === b.toString();
};



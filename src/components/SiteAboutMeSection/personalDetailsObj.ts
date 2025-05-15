// PersonalDetails.ts
import { calculateAge } from "@/lib/CalculateAge";
import personalDetails from "./personalDetails.json";

// Create the function that returns the personal details with dynamic age
export const getPersonalDetails = () => {
  const age = calculateAge("1997-07-20");

  return {
    ...personalDetails,
    basicInfo: {
      ...personalDetails.basicInfo,
      Age: age,
    },
  };
};

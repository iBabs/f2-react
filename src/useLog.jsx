import { useEffect } from "react";

export const useLog = (item) => {
  useEffect(() => {
    console.log("effect triggered");
  }, [item]);
};

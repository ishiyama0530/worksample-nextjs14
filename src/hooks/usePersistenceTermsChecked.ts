import { useEffect, useState } from "react";

export const usePersistenceTermsChecked = () => {
  const [checked, setChecked] = useState<boolean>();

  useEffect(() => {
    const value = localStorage.getItem("termsChecked");
    setChecked(value === "true");
  }, []);

  const setTermsChecked = () => {
    setChecked((prev) => {
      const next = !prev;
      localStorage.setItem("termsChecked", String(next));
      return next;
    });
  };

  return { isTermsChecked: checked, setTermsChecked };
};

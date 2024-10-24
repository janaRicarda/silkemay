import { useEffect, useState } from "react";

export default function useClientWidth(operator, number) {
  const [clientWidth, setClientWidth] = useState();

  useEffect(() => {
    function getClientWidth() {
      setClientWidth(window.innerWidth);
    }

    getClientWidth();

    window.addEventListener("resize", getClientWidth);

    return () => window.removeEventListener("resize", getClientWidth);
  });

  const compareOperators = {
    "<": () => {
      return number < clientWidth;
    },
    ">": () => {
      return number > clientWidth;
    },
    "=": () => {
      return number === clientWidth;
    },
  };

  function compare() {
    if (compareOperators[operator]) {
      return compareOperators[operator]();
    } else {
      throw new Error("Invalid Operator");
    }
  }

  if (operator || number) {
    if (
      typeof operator !== "string" ||
      operator.trim() === "" ||
      typeof number !== "number" ||
      number < 0
    ) {
      throw new Error(
        "First argument must be an operator (<,>,=) of type string. Second argument must be of type number and positive."
      );
    } else return compare();
  }
  return clientWidth;
}

import { useState } from "react";

export function useSpeed(): [string, (string: string) => string] {
  const [speed, setSpeed] = useState("1x");

  const handleSpeed = (currentSpeed: string) => {
    switch (currentSpeed) {
      case "1x":
        setSpeed("2x");
        break;
      case "2x":
        setSpeed("3x");
        break;
      case "3x":
        setSpeed("1x");
        break;
    }
    return speed;
  };

  return [speed, handleSpeed];
}

import { useState } from "react";
import { PillContainer } from "./styled";

interface FilterPillProps {
  text: string;
  variant?: "functional" | "informative"; 
  defaultSelected?: boolean; 
}

const FilterPill = ({ text, variant = "functional", defaultSelected = false }: FilterPillProps) => {
  const [selected, setSelected] = useState(defaultSelected);

  const isSelected = variant === "informative" ? true : selected;

  const handleClick = () => {
    if (variant === "functional") {
      setSelected(!selected);
    }
  };

  return (
    <PillContainer selected={isSelected} onClick={handleClick}>
      {text}
    </PillContainer>
  );
};

export default FilterPill;

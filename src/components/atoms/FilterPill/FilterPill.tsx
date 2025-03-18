import { useState } from "react";
import { PillContainer } from "./styled";

interface FilterPillProps {
  text: string;
}

const FilterPill = ({text}:FilterPillProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <PillContainer selected={selected} onClick={() => setSelected(!selected)}>
     {text}
    </PillContainer>
  );
};

export default FilterPill;

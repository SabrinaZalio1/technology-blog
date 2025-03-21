import { useRef, useState } from "react";
import { Input, NewInput } from "./styled";

const UploadImgButton = ({ onUploadStart }: { onUploadStart: () => void }) => {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUploadStart(); // Iniciar la carga en el componente padre
    }
  };
// const onUploadImg = ()=>{
//     inputRef.current.click()
// }
// const removeImg = ()=>{
//     setImage(null)
// }
  return (
    <>
       <Input type="file" accept="image/*" onChange={handleImageChange} ref={inputRef} />
       <NewInput onClick={() => inputRef.current?.click()}>Upload Image</NewInput>
    </>
  );
};

export default UploadImgButton;
import { useRef, useState } from "react";
import { Input, NewInput } from "./styled";

const UploadImgButton = () => {
  const [image, setImage] = useState<string | null>(null);
const inputRef = useRef()

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
      // console.log('file', file)
      console.log('file subido correctamente')
    }
  };
const onUploadImg = ()=>{
    inputRef.current.click()
}
const removeImg = ()=>{
    setImage(null)
}
  return (
    <>
      <Input type="file" accept="image/*" onChange={handleImageChange} ref={inputRef}/>
      <NewInput onClick={onUploadImg}>Upload Image</NewInput>
    </>
  );
};

export default UploadImgButton;
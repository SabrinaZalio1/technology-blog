import { useRef } from 'react';
import { Input, NewInput } from './styled';

const UploadImgButton = ({
   onUploadStart,
   setImage,
}: {
   onUploadStart: () => void;
   setImage: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
   const inputRef = useRef<HTMLInputElement | null>(null);

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onloadend = () => {
            const base64String = reader.result as string;
            onUploadStart();
            setImage(base64String);
         };
      }
   };

   return (
      <>
         <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={inputRef}
         />
         <NewInput onClick={() => inputRef.current?.click()}>
            Upload Image
         </NewInput>
      </>
   );
};

export default UploadImgButton;

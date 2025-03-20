import React from 'react'
import { useCreatePost } from '../../../hooks/useCreatePost';
import UploadPostModal from '../../organisms/UploadPostModal/UploadPostModal';
import { Button } from '../../atoms/Button/Button';

export default function UploadPost() {

    const { create, isLoading, error } = useCreatePost();

const handleCreate = async () => {
  const newPost = await create({ title: "Ante la ausencia de Messi, se conoció quién usará la camiseta número 10 de la selección argentina ante Uruguay y Brasil", subtitle: "Contenido del post" });
  if (newPost) console.log("Post creado:", newPost);
};

  return (
    <div>UploadPost
        {/* <UploadPostModal /> */}
        <Button onClick={handleCreate} variant='primary' text='Submit'/>
    </div>
  )
}

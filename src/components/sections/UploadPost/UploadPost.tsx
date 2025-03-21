import React from 'react'
import { useCreatePost } from '../../../hooks/useCreatePost';
import UploadPostModal from '../../organisms/UploadPostModal/UploadPostModal';
import { Button } from '../../atoms/Button/Button';

export default function UploadPost() {

    const { create, isLoading, error } = useCreatePost();

// const handleCreate = async () => {
//   const newPost = await create({ title: "Ante la ausencia de Messi, se conoció quién usará la camiseta número 10 de la selección argentina ante Uruguay y Brasil", subtitle: "Contenido del post" });
//   if (newPost) console.log("Post creado:", newPost);
// };
// const handleCreatePost = () => {
//   create({ title: "Nuevo post", subtitle: "Subtítulo de prueba" });
// };
const handleCreatePost = () => {
  create({
    title: "Nuevo título",
    subtitle: "Nuevo subtítulo",
    topic: "Seguridad",
    author: "Juan Pérez",
    readTime: 5,
    coverImg: "3",  // Suponiendo que la imagen es un ID
    body: "<p>Contenido del post</p>"
  });
};
  return (
    <div>UploadPost
        {/* <UploadPostModal /> */}
        <Button onClick={handleCreatePost} variant='primary' text='Submit'/>
    </div>
  )
}

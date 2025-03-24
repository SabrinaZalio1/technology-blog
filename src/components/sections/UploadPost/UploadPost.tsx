import { useCreatePost } from '../../../hooks/useCreatePost';
import UploadPostModal from '../../organisms/UploadPostModal/UploadPostModal';
import { Button } from '../../atoms/Button/Button';

export default function UploadPost() {

  const { create, isLoading, error } = useCreatePost();

  const handleCreatePost = async () => {
    const postData = {
      data: {
        title: "Nuevo título",
        subtitle: "Nuevo subtítulo",
        topic: "Seguridad",
        author: "Juan Pérez",
        readTime: 5,
        coverImg: 1,
        body: "<p>Contenido del post</p>",
      },
    };

    const response = await create(postData);
    if (response) {
      console.log("Post creado con éxito:", response);
    }
  };
  return (
    <div>UploadPost
        {/* <UploadPostModal /> */}
        <Button onClick={handleCreatePost} variant='primary' text='Submit'/>
    </div>
  )
}

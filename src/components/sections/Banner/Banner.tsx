import Post from '../../organisms/Post/Post';
import { usePost } from '../../../hooks/usePosts';
import { BannerContainer, Title } from './styled';

interface BannerProps {
   id?: number;
   title?: boolean;
}

export default function Banner({ id = 1, title = false }: BannerProps) {
   const { post, isLoading } = usePost(id);

   if (isLoading) return <p>Cargando...</p>

   return (
      <BannerContainer>
         {title && <Title>Today story</Title>}
        { post && <Post post={post} variant="dark" headerVariant="author" />}
      </BannerContainer>
   );
}

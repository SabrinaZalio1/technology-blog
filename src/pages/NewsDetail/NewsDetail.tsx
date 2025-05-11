import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/sections/Banner/Banner';
import { Footer } from '../../components/sections/Footer/Footer';
import { Header } from '../../components/sections/Header/Header';
import { Container, RelatedPostsContainer } from './styled';
import { usePost, usePosts } from '../../hooks/usePosts';
import PostDetailSkeleton from '../../components/sections/PostDetail/Skeleton/PostDetailSkeleton';

const PostDetail = lazy(() => import('../../components/sections/PostDetail/PostDetail'));
const RelatedPosts = lazy(() => import('../../components/sections/RelatedPosts/RelatedPosts'));
const SliderCarousel = lazy(() => import('../../components/organisms/SliderCarousel/SliderCarousel'));


function NewsDetail() {
   const { id } = useParams<{ id: string }>();
   const numericId = id ? parseInt(id, 10) : null;

   const { post, isLoading, error } = usePost(numericId || 0);
   const { posts } = usePosts();

   if (isLoading) return <p>Cargando...</p>;
   if (error) return <p>Error: {error}</p>;
   if (!post) return <p>No se encontró la noticia</p>;

   return (
      <Container>
         <Header />
         <Banner id={numericId || 1} />
         <Suspense fallback={<PostDetailSkeleton />}>
            <PostDetail post={post} posts={posts} />
         </Suspense>

         <RelatedPostsContainer>
            <Suspense fallback={<div>Cargando relacionados...</div>}>
               <RelatedPosts posts={posts} />
            </Suspense>
         </RelatedPostsContainer>

         <Suspense fallback={<div>Cargando carrusel...</div>}>
            <SliderCarousel posts={posts} />
            <Footer />
         </Suspense>
      </Container>
   );
}

export default NewsDetail;

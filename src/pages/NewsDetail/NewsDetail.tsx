import { useParams } from "react-router-dom";
import Banner from "../../components/sections/Banner/Banner";
import { Footer } from "../../components/sections/Footer/Footer";
import { Header } from "../../components/sections/Header/Header";
import { Container, RelatedPostsContainer } from "./styled";
import { usePost } from "../../hooks/usePosts";
import PostDetail from "../../components/sections/PostDetail/PostDetail";
import RelatedPosts from "../../components/sections/RelatedPosts/RelatedPosts";
import SliderCarousel from "../../components/organisms/SliderCarousel/SliderCarousel";

function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? parseInt(id, 10) : null;

  const { post, isLoading, error } = usePost(numericId || 0);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No se encontró la noticia</p>;

  return (
    <Container>
      <Header />
      <Banner id={numericId || 1} />
      <PostDetail post={post} />
      <RelatedPostsContainer>
        <RelatedPosts />
      </RelatedPostsContainer>
      <SliderCarousel />
      <Footer />
    </Container>
  );
}

export default NewsDetail;

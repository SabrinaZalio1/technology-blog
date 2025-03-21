import Slider from "react-slick";
import styled from "styled-components";
import { usePosts } from "../../hooks/usePosts";
import { IPost } from "../../interfaces/Post";
import Post from "./Post/Post";
import { theme } from "../../styles/themes";

export const SliderContainer = styled.div`
display: block;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  } 
`;

export default function SliderCarousel() {
    const { posts, error, isLoading } = usePosts();

    if (error) return <p>{error}</p>;

    if (isLoading) return <div>Cargando...</div>


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <SliderContainer> 
        <Slider {...settings}>
            {!isLoading && posts.length > 0 && (
                posts.slice(2, 5).map((post: IPost) => (
                    <div>
                        <Post key={post.id} post={post} variant='light' />
                    </div>
                ))
            )}
        </Slider></SliderContainer>

    );
}


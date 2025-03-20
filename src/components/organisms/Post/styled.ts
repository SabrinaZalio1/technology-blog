import styled from "styled-components";

interface PostContainerProps {
    backgroundImg: string;
}

export const PostContainer = styled.div<PostContainerProps>`
   background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
   width: 100%;
   height: 100%;
   background-size: cover;
   background-position: center;
   position:relative
`;
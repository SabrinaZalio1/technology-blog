import styled from "styled-components";
import { theme } from "../../../styles/themes";

interface PostContainerProps {
    backgroundimg: string;
}

export const PostContainer = styled.div<PostContainerProps>`
   background-image: ${({ backgroundimg }) => `url(${backgroundimg})`};
   width: 100%;
   height: 500px;
   background-size: cover;
   background-position: center;
   position:relative;
   /* ajustar height y width para posts */
   @media (min-width: ${theme.breakpoints.tablet}) {
    height: 100%;
}
`;
/* export const PostContainer = styled.div<PostContainerProps>`
   background-image: ${({ backgroundimg }) => `url(${backgroundimg})`};
   width: 100%;
   height: 100%;
   background-size: cover;
   background-position: center;
   position:relative
   
`; */
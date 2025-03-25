import { AuthorImg, AuthorName, AuthorPostContainer } from './styled';

interface IAuthorPost {
   author: string;
}
export default function AuthorPost({ author }: IAuthorPost) {
   return (
      <AuthorPostContainer>
         <AuthorImg />
         <AuthorName>{author}</AuthorName>
      </AuthorPostContainer>
   );
}

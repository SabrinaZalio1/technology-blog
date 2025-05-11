import { PostBodyContainer, PostDetailContainer, SocialMediaContainer } from '../styled';
import { SkeletonText, SkeletonTitle } from './styled';


export default function PostDetailSkeleton() {
  return (
    <PostDetailContainer>
      <SocialMediaContainer>
        <SkeletonTitle />
        <SkeletonText />
        <SkeletonText />
      </SocialMediaContainer>
      <PostBodyContainer>
        <SkeletonTitle />
        {[...Array(5)].map((_, i) => (
          <SkeletonText key={i} />
        ))}
      </PostBodyContainer>
    </PostDetailContainer>
  );
}

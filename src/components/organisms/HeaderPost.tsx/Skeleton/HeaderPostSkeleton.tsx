import { SkeletonBtn, SkeletonDetail, SkeletonPill, SkeletonTitle, CategoryContainer, HeaderPostContainer, InfoContainer, Section } from './styled';

export default function HeaderPostSkeleton() {
  return (
    <HeaderPostContainer>
      <CategoryContainer>
        <SkeletonPill />
      </CategoryContainer>
      <InfoContainer>
        <SkeletonTitle />
        <Section>
          <SkeletonBtn />
          <SkeletonDetail />
        </Section>
      </InfoContainer>
    </HeaderPostContainer>
  );
}

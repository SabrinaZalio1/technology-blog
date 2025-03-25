import Logo from "../../atoms/Logo/Logo";
import { Detail, DetailContainer, FooterContainer, IconsSection, Section } from "./styled";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";


export const Footer = () => {
    return (
        <FooterContainer>
            <Section>
                <Logo />
                <IconsSection>
                    <SocialLinks/>
                </IconsSection>
            </Section>
            <DetailContainer>
                <Detail>© Copyright Lite-Tech. All Rights Reserved</Detail>
            </DetailContainer>
        </FooterContainer>
    );
};
import Logo from "../../atoms/Logo/Logo";
import { Detail, FooterContainer, Section } from "./styled";


export const Footer = () => {
    return (
        <FooterContainer>
            <Section>
                <Logo />
            </Section>
            <Section>

                <Detail>© Copyright Lite-Tech. All Rights Reserved</Detail>
            </Section>

        </FooterContainer>
    );
};
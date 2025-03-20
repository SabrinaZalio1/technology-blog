import { Link } from "@mui/material";
import Facebook from "../../../assets/icons/Facebook";
import LinkedIn from "../../../assets/icons/LinkedIn";
import Twitter from "../../../assets/icons/Twitter";
import Logo from "../../atoms/Logo/Logo";
import { ContainerLink, Detail, DetailContainer, FooterContainer, IconsSection, Section } from "./styled";


export const Footer = () => {
    return (
        <FooterContainer>
            <Section>
                <Logo />
                <IconsSection>
                    <ContainerLink>
                        <Link href="https://www.instagram.com/hellolitebox/?hl=es" target="_blank">
                            <LinkedIn />
                        </Link>
                    </ContainerLink>
                    <ContainerLink>
                        <Link href="https://en-gb.facebook.com/hellolitebox" target="_blank">
                            <Facebook />
                        </Link>
                    </ContainerLink>
                    <ContainerLink>
                        <Link href="https://x.com/litebox" target="_blank">
                            <Twitter />
                        </Link>
                    </ContainerLink>
                </IconsSection>
            </Section>
            <DetailContainer>
                <Detail>© Copyright Lite-Tech. All Rights Reserved</Detail>
            </DetailContainer>
        </FooterContainer>
    );
};
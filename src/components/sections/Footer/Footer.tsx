import Facebook from "../../../assets/icons/Facebook";
import LinkedIn from "../../../assets/icons/LinkedIn";
import Twitter from "../../../assets/icons/Twitter";
import Logo from "../../atoms/Logo/Logo";
import { Detail, DetailContainer, FooterContainer, Section } from "./styled";


export const Footer = () => {
    return (
        <FooterContainer>
           <Section>
                <Logo />
                <div>
                    <LinkedIn/>
                    <Facebook/>
                    <Twitter/>
                </div>
            </Section>
            <DetailContainer>
                <Detail>© Copyright Lite-Tech. All Rights Reserved</Detail>
            </DetailContainer>
        </FooterContainer>
    );
};
import BtnLink from "../../atoms/BtnLink/BtnLink";
import Logo from "../../atoms/Logo/Logo";
import { HeaderContainer } from "./styled";


export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <BtnLink textColor='#fff'/>
        </HeaderContainer>
    );
};
import Logo from "../../atoms/Logo/Logo";
import NewPostBtn from "../../atoms/NewPostBtn/NewPostBtn";
import { HeaderContainer } from "./styled";


export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <NewPostBtn/>
        </HeaderContainer>
    );
};
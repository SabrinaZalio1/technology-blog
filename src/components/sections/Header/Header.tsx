import ArrowRight from "../../../assets/icons/ArrowRight";
import Logo from "../../atoms/Logo/Logo";
import { HeaderContainer, NewPostLink } from "./styled";


export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <NewPostLink>New Post <ArrowRight/></NewPostLink>
        </HeaderContainer>
    );
};
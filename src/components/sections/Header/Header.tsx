import Logo from "../../atoms/Logo/Logo";
import { HeaderContainer, NewPostLink } from "./styled";


export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <NewPostLink>New Post</NewPostLink>
        </HeaderContainer>
    );
};
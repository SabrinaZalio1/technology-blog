import BtnLink from "../../atoms/BtnLink/BtnLink";
import Logo from "../../atoms/Logo/Logo";
import UploadPostModal from "../../organisms/UploadPostModal/UploadPostModal";
import { HeaderContainer } from "./styled";


export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <UploadPostModal>
            <BtnLink variant="dark" to={""} text="New Post"/>
            </UploadPostModal>
        </HeaderContainer>
    );
};
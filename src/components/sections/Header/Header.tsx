import { Link } from 'react-router-dom';
import BtnLink from '../../atoms/BtnLink/BtnLink';
import Logo from '../../atoms/Logo/Logo';
import UploadPostModal from '../../organisms/UploadPostModal/UploadPostModal';
import { HeaderContainer } from './styled';

export const Header = () => {
   return (
      <HeaderContainer>
         <Link to="/">
            <Logo />
         </Link>
         <UploadPostModal>
            <BtnLink variant="dark" to="" text="New Post" />
         </UploadPostModal>
      </HeaderContainer>
   );
};

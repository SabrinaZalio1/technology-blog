import { BannerContainer, Title } from './styled'
import { Button } from '../../atoms/Button/Button'
import UploadPostModal from '../../organisms/UploadPostModal/UploadPostModal'

function Banner() {
  return (
    <BannerContainer>
        <Title>Sign up for our newsletter and get daily updates </Title>
        <UploadPostModal><Button variant='primary'text='Subscribe'/></UploadPostModal>
        
    </BannerContainer>
  )
}

export default Banner
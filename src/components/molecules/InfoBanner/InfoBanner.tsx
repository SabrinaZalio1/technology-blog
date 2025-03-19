import { InfoBannerContainer, Title } from './styled'
import { Button } from '../../atoms/Button/Button'
import UploadPostModal from '../../organisms/UploadPostModal/UploadPostModal'

function InfoBanner() {
  return (
    <InfoBannerContainer>
        <Title>Sign up for our newsletter and get daily updates </Title>
        <UploadPostModal><Button variant='primary'text='Subscribe'/></UploadPostModal>
        
    </InfoBannerContainer>
  )
}

export default InfoBanner
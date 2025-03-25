import { ContainerLink, SocialLinksContainer } from './styled'
import { Link } from '@mui/material'
import LinkedIn from '../../../assets/icons/LinkedIn'
import Facebook from '../../../assets/icons/Facebook'
import Twitter from '../../../assets/icons/Twitter'


interface SocialLinksProps {
    color?: string;
}

export default function SocialLinks({ color }: SocialLinksProps) {
    return (
        <SocialLinksContainer>
            <ContainerLink>
                <Link href="https://www.instagram.com/hellolitebox/?hl=es" target="_blank">
                    <LinkedIn color={color}/>
                </Link>
            </ContainerLink>
            <ContainerLink>
                <Link href="https://en-gb.facebook.com/hellolitebox" target="_blank">
                    <Facebook color={color}/>
                </Link>
            </ContainerLink>
            <ContainerLink>
                <Link href="https://x.com/litebox" target="_blank">
                    <Twitter color={color}/>
                </Link>
            </ContainerLink>
        </SocialLinksContainer>
    )
}

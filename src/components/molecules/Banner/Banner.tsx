import React from 'react'
import { BannerContainer, Title } from './styled'
import { Button } from '../../atoms/Button/Button'

function Banner() {
  return (
    <BannerContainer>
        <Title>Sign up for our newsletter and get daily updates </Title>
        <Button variant='primary'text='Subscribe'/>
    </BannerContainer>
  )
}

export default Banner
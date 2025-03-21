import React from 'react'
import ArrowRight from '../../../assets/icons/ArrowRight'
import { NewPostLink } from './styled'

interface BtnLinkProps  {
  arrowColor?: string;
  text?:string;
  textColor?: string;
}

export default function BtnLink({arrowColor, textColor='#000', text='New Post'}:BtnLinkProps) {
  return (
     <NewPostLink textColor={textColor}>{text} <ArrowRight color={arrowColor}/></NewPostLink>
  )
}

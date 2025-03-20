import React from 'react'
import ArrowRight from '../../../assets/icons/ArrowRight'
import { NewPostLink } from './styled'

interface NewPostBtnProps  {
  arrowColor?: string;
  text?:string;
  textColor?: string;
}

export default function NewPostBtn({arrowColor, textColor='#000', text='New Post'}:NewPostBtnProps) {
  return (
     <NewPostLink textColor={textColor}>{text} <ArrowRight color={arrowColor}/></NewPostLink>
  )
}

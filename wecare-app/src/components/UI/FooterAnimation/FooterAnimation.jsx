import React from 'react'
import { FooterAnimationImageStyled, FooterAnimationStyled } from './FooterAnimationStyles'
import footerImg from '../../../images/slogan-spin.png'

const FooterAnimation = () => {
  return (
    <FooterAnimationStyled>
        <FooterAnimationImageStyled src={footerImg}>
        </FooterAnimationImageStyled>
    </FooterAnimationStyled>
  )
}

export default FooterAnimation
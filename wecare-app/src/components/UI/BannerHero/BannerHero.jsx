import React from 'react'
import GoToLabButton from '../Buttons/GoToLabButton'
import { BannerHeroAnimationStyled, BannerHeroContainerStyled, BannerHeroSubtitleStyled, BannerHeroTitleStyled } from './BannerHeroStyles'
import { Link } from 'react-router-dom'

const BannerHero = () => {
  return (
    <BannerHeroContainerStyled>
      <BannerHeroTitleStyled>
        We Care about your
      <BannerHeroAnimationStyled>
      </BannerHeroAnimationStyled>
      </BannerHeroTitleStyled>
      <BannerHeroSubtitleStyled>
        Create your desired product at our Lab
      </BannerHeroSubtitleStyled>
      <GoToLabButton><Link to="/">Go to The Lab</Link></GoToLabButton>
    </BannerHeroContainerStyled>
  )
}

export default BannerHero
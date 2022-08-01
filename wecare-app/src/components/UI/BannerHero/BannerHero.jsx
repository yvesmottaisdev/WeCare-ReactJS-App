import React from 'react'
import GoToLabButton from '../Buttons/GoToLabButton'
import { BannerHeroAnimationStyled, BannerHeroContainerStyled, BannerHeroSubtitleStyled, BannerHeroTitleStyled } from './BannerHeroStyles'

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
      <GoToLabButton color='var(--white)'></GoToLabButton>
    </BannerHeroContainerStyled>
  )
}

export default BannerHero
import React from 'react'
import GoToLabButton from '../../components/UI/Buttons/GoToLabButton'
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
      <GoToLabButton></GoToLabButton>
    </BannerHeroContainerStyled>
  )
}

export default BannerHero
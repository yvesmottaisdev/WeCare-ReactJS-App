import React from 'react'
import GoToLabButton from '../Buttons/GoToLabButton'
import { PhilosophySectionContainerStyled, PhilosophySectionInfoStyled, PhilosophySectionLiStyled, PhilosophySectionRowStyled, PhilosophySectionUlStyled } from './PhilosophySectionStyles'


const PhilosophySection = () => {
  return (
    <PhilosophySectionContainerStyled>
        <PhilosophySectionRowStyled>
            <PhilosophySectionUlStyled>

                <PhilosophySectionLiStyled bLeft>Cruelty Free
                </PhilosophySectionLiStyled>
                <PhilosophySectionLiStyled>Women Owned
                </PhilosophySectionLiStyled>
                <PhilosophySectionLiStyled>Ethically Sourced
                </PhilosophySectionLiStyled>

            </PhilosophySectionUlStyled>
        </PhilosophySectionRowStyled>
        <PhilosophySectionInfoStyled>
            <h2>Our Philosophy</h2>
            <p>We believe that our health is intrinsically connected to the health of others, and the planet.
                We develop ethical and sustainable products that interconnect all aspects of health.</p>
                <GoToLabButton color='var(--black)'></GoToLabButton>
        </PhilosophySectionInfoStyled>
        <PhilosophySectionRowStyled>
            <PhilosophySectionUlStyled>

                <PhilosophySectionLiStyled bLeft>Vegan
                </PhilosophySectionLiStyled>
                <PhilosophySectionLiStyled>Sustainable
                </PhilosophySectionLiStyled>
                <PhilosophySectionLiStyled>Parabens Free
                </PhilosophySectionLiStyled>

            </PhilosophySectionUlStyled>
        </PhilosophySectionRowStyled>
    </PhilosophySectionContainerStyled>
  )
}

export default PhilosophySection
import React from 'react'
import GoToLabButtonStyled from '../Buttons/GoToLabButtonStyles'
import { PhilosophySectionContainerStyled, PhilosophySectionInfoStyled, PhilosophySectionLiStyled, PhilosophySectionRowStyled, PhilosophySectionUlStyled } from './PhilosophySectionStyles'
import { Link } from 'react-router-dom'


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
                <GoToLabButtonStyled colorBlack><Link to="/">Go to The Lab</Link></GoToLabButtonStyled>
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
import React from 'react'
import { BannerContainerStyled, HeaderContainerStyled, NavbarContainerStyled, NavbarElementStyled, BannerParagraphStyled, NavbarUlStyled, NavbarLiStyled, NavbarLogoStyled, NavbarLogoLinkSpanStyled } from './HeaderStyles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainerStyled>

        <BannerContainerStyled>
          <BannerParagraphStyled>
            free worldwide shipping on orders over $100
          </BannerParagraphStyled>
        </BannerContainerStyled>

        <NavbarContainerStyled>

          <NavbarElementStyled bRight>
            <NavbarUlStyled>
              <NavbarLiStyled>
                <Link to="/">The Lab</Link>
              </NavbarLiStyled>
              <NavbarLiStyled>
              <Link to="/">Products</Link>
              </NavbarLiStyled>
            </NavbarUlStyled>
          </NavbarElementStyled>

          <NavbarLogoStyled>
            <Link to="/">
              We Care <NavbarLogoLinkSpanStyled>
                Co.
              </NavbarLogoLinkSpanStyled>
            </Link>
          </NavbarLogoStyled>

          <NavbarElementStyled bLeft>
          <NavbarUlStyled jcend>
              <NavbarLiStyled>
              <Link to="/">Cart ()</Link>
              </NavbarLiStyled>
            </NavbarUlStyled>
          </NavbarElementStyled>

        </NavbarContainerStyled>

    </HeaderContainerStyled>

  )
}

export default Header
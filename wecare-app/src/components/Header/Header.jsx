import React from 'react'
import { BannerContainerStyled, HeaderContainerStyled, NavbarContainerStyled, NavbarElementStyled, BannerParagraphStyled, NavbarUlStyled, NavbarLiStyled, NavbarLogoStyled, NavbarLogoLinkSpanStyled } from './HeaderStyles'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux/es/exports'


const Header = () => {

  const totalCartItems = useSelector(state => state.cart.cartItems.length)

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
                <Link to="/product/thelab">The Lab</Link>
              </NavbarLiStyled>
              <NavbarLiStyled>
              <Link to="/product">Products</Link>
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
              <Link to="/cart">Cart ( {totalCartItems} )</Link>
              </NavbarLiStyled>
            </NavbarUlStyled>
          </NavbarElementStyled>

        </NavbarContainerStyled>

    </HeaderContainerStyled>

  )
}

export default Header
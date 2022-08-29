import React from 'react'
import { FooterBannerContainerStyled, FooterBannerPStyled, FooterContainerStyled, FooterLinksLiStyled, FooterLinksSpanSyled, FooterLinksStyled } from './FooterStyles'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainerStyled>
        <FooterLinksStyled>
            <FooterLinksStyled>

                <FooterLinksLiStyled logo>
                    <Link to="/">
                    We Care <FooterLinksSpanSyled>Co.</FooterLinksSpanSyled>
                    </Link>
                </FooterLinksLiStyled>
                <FooterLinksLiStyled>
                    <Link to="/thelab">
                    The Lab 
                    </Link>
                </FooterLinksLiStyled>

            </FooterLinksStyled>

        </FooterLinksStyled>
        <FooterBannerContainerStyled>
            <FooterBannerPStyled>
            © we care co. all rights reserved made by yves motta
            </FooterBannerPStyled>

        </FooterBannerContainerStyled>

    </FooterContainerStyled>
  )
}

export default Footer
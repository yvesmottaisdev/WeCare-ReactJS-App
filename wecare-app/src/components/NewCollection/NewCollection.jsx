import React from 'react'
import { NewCollectionContainerStyled, NewCollectionInfoContainerStyled, NewCollectionInfoh2Styled, NewCollectionInfoLinkStyled, NewCollectionInfoPStyled } from './NewCollectionStyles'
import { Link } from 'react-router-dom'

const NewCollection = () => {
  return (
    <NewCollectionContainerStyled>

    <NewCollectionInfoContainerStyled>

        <NewCollectionInfoh2Styled>THE NEW SERUM AND BODY LOTION COLLECTION
        </NewCollectionInfoh2Styled>
        <NewCollectionInfoPStyled>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem enim incidunt, temporibus doloribus quo odio accusantium
            officiis nam nisi sapiente veniam ipsa reiciendis eos.
        </NewCollectionInfoPStyled>
        <NewCollectionInfoLinkStyled>
        <Link to="/">Shop Now</Link>
        </NewCollectionInfoLinkStyled>

    </NewCollectionInfoContainerStyled>

    </NewCollectionContainerStyled>
  )
}

export default NewCollection
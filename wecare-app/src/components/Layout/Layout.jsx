import React from 'react'
import { LayoutWrapper } from './LayoutStyles'

const Layout = ({color, children}) => {
  return (
    <LayoutWrapper>{children}</LayoutWrapper>
  )
}

export default Layout
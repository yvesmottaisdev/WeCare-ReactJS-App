import React from 'react'
import Layout from '../../components/Layout/Layout'
import BannerHero from '../../components/BannerHero/BannerHero'
import Caroussel from '../../components/Caroussel/Caroussel'
import NewCollection from '../../components/NewCollection/NewCollection'
import FooterAnimation from '../../components/UI/FooterAnimation/FooterAnimation'
import PhilosophySection from '../../components/PhilosophySection/PhilosophySection'

const Home = () => {
  return (
    <Layout>
    <BannerHero/>
    <PhilosophySection/>
    <Caroussel/>
    <NewCollection/>
    <FooterAnimation/>
  </Layout>
  )
}

export default Home
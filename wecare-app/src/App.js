import Caroussel from './components/Caroussel/Caroussel';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import NewCollection from './components/NewCollection/NewCollection';
import BannerHero from './components/BannerHero/BannerHero';
import PhilosophySection from './components/PhilosophySection/PhilosophySection';
import FooterAnimation from './components/UI/FooterAnimation/FooterAnimation';

function App() {
  return (
    <Layout>
      <Header/>
      <BannerHero/>
      <PhilosophySection/>
      <Caroussel/>
      <NewCollection/>
      <FooterAnimation/>
    </Layout>
  );
}

export default App;

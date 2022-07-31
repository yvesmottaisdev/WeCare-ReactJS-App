import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import BannerHero from './components/UI/BannerHero/BannerHero';
import PhilosophySection from './components/UI/PhilosophySection/PhilosophySection';

function App() {
  return (
    <Layout>
      <Header/>
      <BannerHero/>
      <PhilosophySection/>
    </Layout>
  );
}

export default App;

import React from 'react'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './routes/Routes'

function App() {
  return (
    <Layout>
      <Header/>
      <Routes/>
      <Footer/>
    </Layout>
  );
}

export default App;

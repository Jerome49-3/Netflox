import './assets/css/App.css'
import Header from './components/header/Header'
import logoNetflix from "./assets/images/netfalshLogo.png"
import Main from './components/main/Main'
import Footer from './components/footer/Footer'



function App() {

  return (
    <>
      <Header classHeader="header" classWrapper="wrapper" classImg="imgHeader" alt="netflix" src={logoNetflix} />
      <Main />
      <Footer classFooter="footer" />
    </>
  )
}

export default App

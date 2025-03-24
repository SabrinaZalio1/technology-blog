import './App.css'
import { Footer } from './components/sections/Footer/Footer'
import { Header } from './components/sections/Header/Header'
import { AppContainer } from './styles/GlobalStyles'
import Banner from './components/sections/Banner/Banner'
import TopicFilter from './components/organisms/TopicFilter/TopicFilter'
import Blog from './pages/Blog/Blog'
import UploadPost from './components/sections/UploadPost/UploadPost'

function App() {

  return (
    <>
    <AppContainer>
      <Header/>
      <Banner id={1} title/>
      <TopicFilter/>
      <Blog/>
      <UploadPost/>
      <Footer/>
    </AppContainer>
    </>
  )
}

export default App

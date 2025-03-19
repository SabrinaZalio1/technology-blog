import styled from 'styled-components'
import './App.css'
import Banner from './components/sections/Banner/Banner'
import { Footer } from './components/sections/Footer/Footer'
import { Header } from './components/sections/Header/Header'
import { theme } from './styles/themes'
import TopicFilter from './components/organisms/TopicFilter/TopicFilter'
import Blog from './pages/Blog/Blog'

const Container = styled.div`
  background-color: ${theme.colors.background};
  width: 100%;
  padding: 0 40px;
`

function App() {

  return (
    <>
    <Container>
      <Header/>
      <Banner/>
      <TopicFilter/>
      <Blog/>
      <Footer/>
    </Container>
    </>
  )
}

export default App

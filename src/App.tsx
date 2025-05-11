import './App.css';
import { Footer } from './components/sections/Footer/Footer';
import { Header } from './components/sections/Header/Header';
import { AppContainer } from './styles/GlobalStyles';
import Banner from './components/sections/Banner/Banner';
import TopicFilter from './components/organisms/TopicFilter/TopicFilter';
import Blog from './pages/Blog/Blog';
import { usePosts } from './hooks/usePosts';
import { Suspense } from 'react';

function App() {
   const { posts, isLoading, error } = usePosts();

   if (error) return <p>Error al cargar los datos: {error}</p>;

   return (
      <>
         <Header />
         <AppContainer>
            {!isLoading &&
               <>
                  <Banner id={1} title />
                  <TopicFilter posts={posts} />
                  <Suspense fallback={null}>
                     <Blog posts={posts} />
                  </Suspense>
                  <Footer />
               </>
            }
         </AppContainer>
      </>
   );
}

export default App;

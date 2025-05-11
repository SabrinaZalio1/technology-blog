import { lazy, Suspense } from 'react';
import App from '../App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const NewsDetail = lazy(() => import('./../pages/NewsDetail/NewsDetail'));

const AppRoutes = () => {
   return (
      <Router>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
               <Route path="/" element={<App />} />
               <Route path="/news/:id" element={<NewsDetail />} />
            </Routes>
         </Suspense>
      </Router>
   );
};

export default AppRoutes;

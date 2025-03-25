import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsDetail from './../pages/NewsDetail/NewsDetail';
import App from '../App';

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/news/:id" element={<NewsDetail />} />
         </Routes>
      </Router>
   );
};

export default AppRoutes;

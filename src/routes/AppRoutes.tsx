import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './../pages/Blog/Blog'
import NewsDetail from './../pages/NewsDetail/NewsDetail'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

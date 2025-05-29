// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/LayoutComp';
import AboutMePage from './pages/AboutMePage';
import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';
// import Login from './pages/Login';
import ProjectPage from './pages/ProjectPage';
// import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        {/* <Route element={<Layout />}>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

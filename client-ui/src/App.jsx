import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FakeSignUp from './pages/FakeSignUp';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fake" element={<FakeSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

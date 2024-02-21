import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from "./components/Authentication/AuthPage";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
          <Route path="/authentication" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from "./components/Authentication/AuthPage";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AddPet from "./components/AddPet/AddPet";
import PetManagement from "./components/PetManagement/PetManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
          <Route path="/" element={<AuthPage />} />
          <Route path="/pet-management" element={<PetManagement />} />
          <Route path="/addpet" element={<AddPet />} />
      </Routes>
    </Router>
  );
}

export default App;

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
          <Route path="/authentication" element={<AuthPage />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/pet-management" element={<PetManagement />} />
      </Routes>
    </Router>
  );
}

export default App;

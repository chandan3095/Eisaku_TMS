import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeDashboard from './pages/HomeDashboard';
import AddForm from './pages/fleetmaster/FleetMasterAddForm';
import AppRoutes from './AppRoutes/Index';

function App() {
  return (
    <div className="wrapper">
       <AppRoutes/>
    </div>
  );
}

export default App;

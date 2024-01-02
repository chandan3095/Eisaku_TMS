import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeDashboard from './pages/HomeDashboard';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="wrapper">
       <AppRoutes/>
    </div>
  );
}

export default App;

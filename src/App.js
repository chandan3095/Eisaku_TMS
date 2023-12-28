import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeDashboard from './pages/HomeDashboard';
import AddForm from './pages/fleetmaster/addform';

function App() {
  return (
    <div className="wrapper">
       <Routes>
        <Route path="/" element={<AddForm />}/> 
      </Routes>
        {/* <HomeDashboard /> */}
    </div>
  );
}

export default App;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeDashboard from '../pages/HomeDashboard'
import RouteNames from './RouteName'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import FleetMasterAddForm from '../pages/fleetmaster/FleetMasterAddForm'
import DriverMasterAddForm from '../pages/drivermaster/DriverMasterAddForm'
function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomeDashboard/>}/> 
        <Route path={RouteNames.fleetMasterAddForm} element={<FleetMasterAddForm/>}/> 
        <Route path={RouteNames.driverMasterAddForm} element={<DriverMasterAddForm/>}/> 
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes 
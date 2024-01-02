import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeDashboard from '../pages/HomeDashboard'
import RouteNames from './RouteName'
import FleetMasterAddForm from '../pages/fleetmaster/FleetMasterAddForm'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import AddUser from '../pages/user/AddUser'
import ListUser from '../pages/user/ListUser'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomeDashboard/>}/> 
        <Route path={RouteNames.fleetMasterAddForm} element={<FleetMasterAddForm/>}/> 
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp />} />
        <Route path={RouteNames.addUser} element={<AddUser />} />
        <Route path={RouteNames.listUser} element={<ListUser />} />
    </Routes>
  )
}

export default AppRoutes
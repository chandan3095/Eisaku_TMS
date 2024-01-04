import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeDashboard from '../pages/HomeDashboard'
import RouteNames from './RouteName'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import FleetMasterAddForm from '../pages/corporate-admin/fleetmaster/FleetMasterAddForm'
import DriverMasterAddForm from '../pages/corporate-admin/drivermaster/DriverMasterAddForm'
import HelperMasterAddForm from '../pages/corporate-admin/helpermaster/HelperMasterAddForm'
import CustomerMasterAddForm from '../pages/corporate-admin/customermaster/CustomerMasterAddForm'
import AddUser from '../pages/user/AddUser'
import ListUser from '../pages/user/ListUser'
import VendorMasterAdd from '../pages/corporate-admin/vendormaster/VendorMasterAdd'
import LaneMasterAdd from '../pages/corporate-admin/lanemaster/LaneMasterAdd'
import ContractorMasterAdd from '../pages/corporate-admin/contractormaster/ContractorMasterAdd'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomeDashboard/>}/> 
        <Route path={RouteNames.fleetMasterAddForm} element={<FleetMasterAddForm/>}/> 
        <Route path={RouteNames.driverMasterAddForm} element={<DriverMasterAddForm/>}/> 
        <Route path={RouteNames.helperMasterAddForm} element={<HelperMasterAddForm/>}/> 
        <Route path={RouteNames.customerMasterAddForm} element={<CustomerMasterAddForm/>}/> 
        <Route path={RouteNames.vendorMasterAddForm} element={<VendorMasterAdd />} />
        <Route path={RouteNames.LaneMasterAddForm} element={<LaneMasterAdd />} />
        <Route path={RouteNames.ContractorMasterAddForm} element={<ContractorMasterAdd />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp />} />
        <Route path={RouteNames.addUser} element={<AddUser />} />
        <Route path={RouteNames.listUser} element={<ListUser />} />
    </Routes>
  )
}

export default AppRoutes 
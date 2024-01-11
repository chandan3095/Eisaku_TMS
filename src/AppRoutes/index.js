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
import FleetMasterView from '../pages/corporate-admin/fleetmaster/FleetMasterView'
import FleetMasterList from '../pages/corporate-admin/fleetmaster/FleetMasterList'
import DriverMasterList from '../pages/corporate-admin/drivermaster/DriverMasterList'
import HelperMasterView from '../pages/corporate-admin/helpermaster/HelperMasterView'
import CustomerMasterView from '../pages/corporate-admin/customermaster/CustomerMasterView'
import VendorMasterView from '../pages/corporate-admin/vendormaster/VendorMasterView'
import LaneMasterView from '../pages/corporate-admin/lanemaster/LaneMasterView'
import ContractorMasterView from '../pages/corporate-admin/contractormaster/ContractorMasterView'
import LocationMasterAdd from '../pages/corporate-admin/locationmaster/LocationMasterAdd'
import LocationMasterView from '../pages/corporate-admin/locationmaster/LocationMasterView'
import CreateTrip from '../pages/supervisior/Trip/CreateTrip'
import ViewTrip from '../pages/supervisior/Trip/ViewTrip'
import DriverMasterEdit from '../pages/corporate-admin/drivermaster/DriverMasterEdit'


function AppRoutes() {
  return (
    <Routes>
      {/* for dashboard  */}
      <Route path="/" element={<HomeDashboard />} />
      <Route
        path={RouteNames.fleetMasterAddForm}
        element={<FleetMasterAddForm />}
      />
      <Route
        path={RouteNames.driverMasterAddForm}
        element={<DriverMasterAddForm />}
      />
      <Route
        path={RouteNames.helperMasterAddForm}
        element={<HelperMasterAddForm />}
      />
      <Route
        path={RouteNames.customerMasterAddForm}
        element={<CustomerMasterAddForm />}
      />
      <Route
        path={RouteNames.vendorMasterAddForm}
        element={<VendorMasterAdd />}
      />
      <Route path={RouteNames.LaneMasterAddForm} element={<LaneMasterAdd />} />
      <Route
        path={RouteNames.ContractorMasterAddForm}
        element={<ContractorMasterAdd />}
      />
      <Route
        path={RouteNames.LocationMasterAddForm}
        element={<LocationMasterAdd />}
      />

      {/* for list  */}
      <Route path={RouteNames.fleetMasterList} element={<FleetMasterList />} />
      <Route
        path={RouteNames.driverMasterView}
        element={<DriverMasterList />}
      />
      <Route
        path={RouteNames.helperMasterView}
        element={<HelperMasterView />}
      />
      <Route
        path={RouteNames.customerMasterView}
        element={<CustomerMasterView />}
      />
      <Route
        path={RouteNames.vendorMasterView}
        element={<VendorMasterView />}
      />
      <Route path={RouteNames.laneMasterView} element={<LaneMasterView />} />
      <Route
        path={RouteNames.contractorMasterView}
        element={<ContractorMasterView />}
      />
      <Route
        path={RouteNames.LocationMasterView}
        element={<LocationMasterView />}
      />

        <Route path={RouteNames.driverMasterEdit} element={<DriverMasterEdit />} />



      {/* for view  */}
      <Route path={RouteNames.fleetMasterView} element={<FleetMasterView />} />

        <Route path={RouteNames.tripCreate} element={<CreateTrip />} />
        <Route path={RouteNames.tripView} element={<ViewTrip />} />

        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp />} />
        <Route path={RouteNames.addUser} element={<AddUser />} />
        <Route path={RouteNames.listUser} element={<ListUser />} />

    </Routes>
  );
}

export default AppRoutes;

import React from 'react';
import Header from '../components/common/Header';
import Body from '../components/common/Body';
import Footer from '../components/common/Footer';
import CommonSideBar from '../components/common/CommonSideBar/Index';
import Sidenav from '../components/common/Sidenav';

const HomeDashboard = () => {
  return (
    <div>
      <Header/>
      <CommonSideBar/>
      {/* <Sidenav/> */}
      <Body/>
      <Footer/>
    </div>
  )
}

export default HomeDashboard
 
import React from 'react';
import Header from '../components/dashboard/Header';
import Sidenav from '../components/dashboard/Sidenav';
import Body from '../components/dashboard/Body';
import Footer from '../components/dashboard/Footer';

const EsakuDashboard = () => {
  return (
    <div>
      <Header/>
      <Sidenav/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default EsakuDashboard

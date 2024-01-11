import React from 'react'
import Header from '../components/common/Header'
import CommonSideBar from '../components/common/CommonSideBar'
import AppRoutes from '.'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const Skeleton = () => {
   return (
      <div className="wrapper">
         <Header />
         <CommonSideBar />
         <div className="content-wrapper">
            <section className="content pb-5">
               <div className="container-fluid">
                  <Outlet />
               </div>
            </section>
         </div>
         <Footer />
      </div>
   )
}

export default Skeleton

import React from "react";
import List from "@mui/material/List";
import SideBarDropdown from "./SideBarDropdown";
import { SideBarDropdownData } from "../../../constansts/LocalData";
import Logo from "../../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CommonSideBar = () => {
   const navigate = useNavigate();
   const role_id = useSelector((state) => state?.loginReducer?.user?.data?.user?.role_id);
   const role_name = useSelector(
      (state) => state?.loginReducer?.user?.data?.user?.role_name
   );
   //  console.log(role_name);

   return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
         <a href="index3.html" className="brand-link">
            <img
               src={Logo}
               alt="AdminLTE Logo"
               className="brand-image img-circle elevation-3"
               style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Eisaku TMS</span>
         </a>
         <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
               <div className="image">
                  <img
                     src="dist/img/user2-160x160.jpg"
                     className="img-circle elevation-2"
                     alt="Image"
                  />
               </div>
               <div className="info">
                  <a href="#" className="d-block">
                     User Name <br />
                     <span style={{ fontSize: ".8rem" }}> {role_name}</span>
                  </a>
               </div>
            </div>
            {/* <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
             <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
             <div className="input-group-append">
                <button className="btn btn-sidebar">
                   <i className="fas fa-search fa-fw" />
                </button>
             </div>
          </div>
       </div> */}
            <nav className="mt-2">
               <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
               >
                  <li className="nav-item menu-open">
                     <a className="nav-link" onClick={() => navigate("/dashboard")}>
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>Dashboard</p>
                     </a>
                  </li>

                  <List>
                     {SideBarDropdownData.filter((item) =>
                        item.roles.includes(role_id)
                     ).map((item, index) => {
                        return (
                           <SideBarDropdown
                              label={item.menuName}
                              url={item.url}
                              icon={item.icon}
                              dropdownList={item.dropdownList}
                              key={index.toString()}
                           />
                        );
                     })}
                  </List>
               </ul>
            </nav>
         </div>
      </aside>
   );
};

export default CommonSideBar;

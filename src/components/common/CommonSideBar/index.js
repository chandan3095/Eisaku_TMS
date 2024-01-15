import React from "react";
import SideBarDropdown from "./SideBarDropdown";
import { SideBarDropdownData } from "../../../constansts/LocalData";
import Logo from "../../../assets/images/logo.png";
import { useSelector } from "react-redux";

const CommonSideBar = () => {
   const role_id = useSelector((state) => state?.loginReducer?.user?.data?.user?.role_id);
   const role_name = useSelector((state)=> state?.loginReducer?.user?.data?.user?.role_name)
   console.log(role_name);


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
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Manager Name <br />
                    <span style={{fontSize: '.8rem'}}> {role_name}</span>
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
              <a href="./index.html" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </a>
            </li>
            {/* <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                   <i className="nav-icon fas fa-th" />
                   <p>
                      Widgets
                   </p>
                </a>
             </li> */}
            {SideBarDropdownData.filter(item=> item.roles.includes(role_id)).map((item, index) => {
              return (
               //  console.log(item.dropdownList),
                <SideBarDropdown
                  label={item.menuName}
                  url={item.url}
                  // submenuUrl={item.dropdownList[1].url}
                  icon={item.icon}
                  dropdownList={item.dropdownList}
                  // subDropdownList={item.dropdownList[1].subDropdownList}
                  key={index.toString()}
                />
              );
            })}
            {/* <SideBarDropdown label='Driver Master' icon='fa-table' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Helper Master' icon='fa-calendar-alt' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Customer Master' icon='fa-columns' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Vendor Master' icon='fa-book' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Lane Master (Expense)' icon='fa-th' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Contractor Master' icon='fa-tree' dropdownList={SideBarDropdownData} /> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default CommonSideBar;

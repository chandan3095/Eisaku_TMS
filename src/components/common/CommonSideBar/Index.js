import React from 'react'
import SideBarDropdown from './SideBarDropdown'
import { SideBarDropdownData } from '../../../constansts/LocalData'
import Logo from '../../../assets/images/logo.png'

const CommonSideBar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
       <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
       <span className="brand-text font-weight-light">Eisaku Transport Management</span>
    </a>
    <div className="sidebar">
       <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
             <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
             <a href="#" className="d-block">Corporate Admin</a>
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
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
             <li className="nav-item menu-open">
                <a href="./index.html" className="nav-link active">
                   <i className="nav-icon fas fa-tachometer-alt" />
                   <p>
                      Dashboard
                     
                   </p>
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
            
             <SideBarDropdown label='Fleet Master' icon='fa-tree' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Driver Master' icon='fa-table' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Helper Master' icon='fa-calendar-alt' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Customer Master' icon='fa-columns' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Vendor Master' icon='fa-book' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Lane Master (Expense)' icon='fa-th' dropdownList={SideBarDropdownData} />
             <SideBarDropdown label='Contractor Master' icon='fa-tree' dropdownList={SideBarDropdownData} />
             
             {/* <li className="nav-header">MISCELLANEOUS</li>
             <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                   <i className="nav-icon fas fa-ellipsis-h" />
                   <p>Tabbed IFrame Plugin</p>
                </a>
             </li>
             <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                   <i className="nav-icon fas fa-file" />
                   <p>Documentation</p>
                </a>
             </li>
             <li className="nav-header">MULTI LEVEL EXAMPLE</li>
             <li className="nav-item">
                <a href="#" className="nav-link">
                   <i className="fas fa-circle nav-icon" />
                   <p>Level 1</p>
                </a>
             </li>
             <li className="nav-item">
                <a href="#" className="nav-link">
                   <i className="nav-icon fas fa-circle" />
                   <p>
                      Level 1
                      <i className="right fas fa-angle-left" />
                   </p>
                </a>
                <ul className="nav nav-treeview">
                   <li className="nav-item">
                      <a href="#" className="nav-link">
                         <i className="far fa-circle nav-icon" />
                         <p>Level 2</p>
                      </a>
                   </li>
                   <li className="nav-item">
                      <a href="#" className="nav-link">
                         <i className="far fa-circle nav-icon" />
                         <p>
                            Level 2
                            <i className="right fas fa-angle-left" />
                         </p>
                      </a>
                      <ul className="nav nav-treeview">
                         <li className="nav-item">
                            <a href="#" className="nav-link">
                               <i className="far fa-dot-circle nav-icon" />
                               <p>Level 3</p>
                            </a>
                         </li>
                         <li className="nav-item">
                            <a href="#" className="nav-link">
                               <i className="far fa-dot-circle nav-icon" />
                               <p>Level 3</p>
                            </a>
                         </li>
                         <li className="nav-item">
                            <a href="#" className="nav-link">
                               <i className="far fa-dot-circle nav-icon" />
                               <p>Level 3</p>
                            </a>
                         </li>
                      </ul>
                   </li>
                   <li className="nav-item">
                      <a href="#" className="nav-link">
                         <i className="far fa-circle nav-icon" />
                         <p>Level 2</p>
                      </a>
                   </li>
                </ul>
             </li>
             <li className="nav-item">
                <a href="#" className="nav-link">
                   <i className="fas fa-circle nav-icon" />
                   <p>Level 1</p>
                </a>
             </li>
             <li className="nav-header">LABELS</li>
             <li className="nav-item">
                <a href="#" className="nav-link">
                   <i className="nav-icon far fa-circle text-danger" />
                   <p className="text">Important</p>
                </a>
             </li>
             <li className="nav-item">
                <a href="#" className="nav-link">
                   <i className="nav-icon far fa-circle text-warning" />
                   <p>Warning</p>
                </a>
             </li>
             <li className="nav-item">
                <a href="#" className="nav-link">
                   <i className="nav-icon far fa-circle text-info" />
                   <p>Informational</p>
                </a>
             </li> */}
          </ul>
       </nav>
    </div>
 </aside>
  )
}

export default CommonSideBar
import React from "react";

function SideBarDropdown(props) {
const {label, dropdownList, icon} = props;

  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        <i className={`nav-icon fas ${icon}`} />
        <p>
          {label}
          <i className="fas fa-angle-left right" />
        </p>
      </a>
      <ul className="nav nav-treeview">
        {dropdownList.map((item, index) => (<li className="nav-item">
          <a href="pages/UI/general.html" className="nav-link" key={index.toString()}>
            <i className="far fa-circle nav-icon" />
            <p>{item}</p>
          </a>
        </li>
        ))}        
      </ul>
    </li>
  );
}

export default SideBarDropdown;

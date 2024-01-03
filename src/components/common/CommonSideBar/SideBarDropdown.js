import React from "react";
import { Link } from "react-router-dom";
import { SideBarDropdownData } from "../../../constansts/LocalData";

function SideBarDropdown(props) {
const {label, url, dropdownList, icon} = props;

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
        {dropdownList.map((item, index) => {
          console.log(item)
          return<li className="nav-item">
          <Link to={url + item.url} className="nav-link" key={index.toString()}>
            <i className="far fa-circle nav-icon" />
            <p>{item.subMenuName}</p>
          </Link>
        </li>
        })}        
      </ul>
    </li>
  );
}

export default SideBarDropdown;

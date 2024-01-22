import React from "react";
import { Link } from "react-router-dom";
import { SideBarDropdownData } from "../../../constansts/LocalData";

function SideBarDropdown(props) {
  const { label, url, dropdownList, icon, } = props;
// console.log({dropdownList});
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
          // console.log(item.subDropdownList)
          return (
            <li className="nav-item" key={index.toString()}>
              <Link to={item.subDropdownList.length> 0 ? '#' : `${url + item.url}`} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>{item.subMenuName}</p>  
                {
                  item.subDropdownList.length> 0 && (
                    <i class="right fas fa-angle-left"></i>
                  )
                }              
              </Link>
              {item.subDropdownList.length > 0 && (
                  <ul class="nav nav-treeview">
                {item.subDropdownList.map((itemSub, index) => {
                  // console.log(itemSub);
                  return (
                    <li class="nav-item" key={index}>
                      <Link to={url + item.url + itemSub.url} class="nav-link pl-3">
                        <i class="far fa-dot-circle nav-icon"></i>
                        <p>{itemSub.subMenuName}</p>
                      </Link>
                    </li>
                   );
                })} 
              </ul>
                )
              } 
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default SideBarDropdown;

import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

function SideBarDropdown({ label, url, dropdownList, icon }) {
   const navigate = useNavigate();

   const [open, setOpen] = React.useState(false);
   const handleClick = () => {
      setOpen(!open);
   };

   const [openSubmenu, setOpenSubmenu] = React.useState("");
   const handleOpenSubmenu = (submenuName) => {
      console.log("ladkjnkjn");
      setOpenSubmenu((prev) => (prev === submenuName ? "" : submenuName));
   };

   return (
      <>
         <ListItemButton className="nav-item" onClick={handleClick}>
            <ListItemIcon className="text-white" sx={{ minWidth: 36 }}>
               <i className={`nav-icon fas ${icon}`} />
            </ListItemIcon>
            <ListItemText primary={label} className="text-white" />
            <ListItemIcon className="text-white" sx={{ minWidth: 36, ml: 4 }}>
               <i className="fas fa-angle-left right" />
            </ListItemIcon>
         </ListItemButton>

         <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
               {dropdownList.map((item, index) => {
                  return (
                     <>
                        <ListItemButton
                           className="nav-item text-white"
                           key={index.toString()}
                           onClick={() => {
                              navigate(
                                 item.subDropdownList.length > 0
                                    ? "#"
                                    : `${url + item.url}`
                              );
                              handleOpenSubmenu(item.subMenuName);
                           }}
                           sx={{ pl: 4 }}
                        >
                           <ListItemIcon className="text-white" sx={{ minWidth: 36 }}>
                              <i className="far fa-circle nav-icon" />
                           </ListItemIcon>
                           <ListItemText
                              primary={item.subMenuName}
                              className="text-white"
                           />
                           {item.subDropdownList.length > 0 && (
                              <ListItemIcon
                                 className="text-white"
                                 sx={{ minWidth: 36, ml: 4 }}
                              >
                                 <i class="right fas fa-angle-left"></i>
                              </ListItemIcon>
                           )}
                        </ListItemButton>

                        <Collapse
                           in={openSubmenu === item.subMenuName}
                           timeout="auto"
                           unmountOnExit
                        >
                           <List component="div" disablePadding>
                              {item.subDropdownList.map((itemSub, index) => {
                                 return (
                                    <ListItemButton
                                       sx={{ pl: 8 }}
                                       onClick={() => {
                                          navigate(url + item.url + itemSub.url);
                                       }}
                                    >
                                       <ListItemIcon
                                          className="text-white"
                                          sx={{ minWidth: 36 }}
                                       >
                                          <i class="far fa-dot-circle nav-icon"></i>
                                       </ListItemIcon>
                                       <ListItemText
                                          primary={itemSub.subMenuName}
                                          className="text-white"
                                       />
                                    </ListItemButton>
                                 );
                              })}
                           </List>
                        </Collapse>
                     </>
                  );
               })}
            </List>
         </Collapse>
      </>
   );
}

export default SideBarDropdown;

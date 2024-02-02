import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const AntTabs = styled(Tabs)({
   borderBottom: "1px solid #e8e8e8",
   "& .MuiTabs-indicator": {
      backgroundColor: "#1890ff",
   },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
   textTransform: "none",
   minWidth: 0,
   [theme.breakpoints.up("sm")]: {
      minWidth: 0,
   },
   fontWeight: theme.typography.fontWeightRegular,
   marginRight: theme.spacing(1),
   color: "rgba(0, 0, 0, 0.85)",
   fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
   ].join(","),
   "&:hover": {
      color: "#40a9ff",
      opacity: 1,
   },
   "&.Mui-selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
   },
   "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
   },
}));

function a11yProps(index) {
   return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
   };
}

const CustomTab = ({
   tabs = [],
   components = [],
   fontSize,
   pb = true,
   children,
   style,
}) => {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   // const value = useSelector((state) => state.tabNumber);
   // const handleChange = (event, newValue) => {
   //   dispatch(setTabNumber(newValue));
   // };

   // useEffect(() => {
   //    if (value > tabs.length) {
   //       dispatch(setTabNumber(0));
   //    }
   // }, [value, dispatch, tabs.length]);

   return (
      <div style={{ flexGrow: 1, backgroundColor: "#fff", ...style }}>
         <div style={{}}>
            <AntTabs
               value={value}
               onChange={handleChange}
               aria-label="ant example"
               variant="scrollable"
               scrollButtons="auto"
            >
               {tabs.map((tab, index) => (
                  <AntTab
                     label={tab}
                     key={index}
                     {...a11yProps(index)}
                     style={{ fontSize: fontSize ? fontSize : "" }}
                  />
               ))}
            </AntTabs>
            {pb && <Typography style={{ paddingBottom: "1rem" }} />}
            <div style={{ padding: "0 1rem" }}>{components[value]}</div>
         </div>
         {children}
      </div>
   );
};

export default React.memo(CustomTab);

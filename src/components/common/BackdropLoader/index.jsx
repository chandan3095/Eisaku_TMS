import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const BackdropLoader = () => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(2px)",
      }}
      open={true}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default BackdropLoader;

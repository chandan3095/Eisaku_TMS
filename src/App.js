import "./App.css";

import AppRoutes from "./AppRoutes";

import BackdropLoader from "./components/common/BackdropLoader";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const helper = useSelector((state) => state.helper);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {helper.backdropLoading && <BackdropLoader />}

      <AppRoutes />
    </>
  );
}

export default App;

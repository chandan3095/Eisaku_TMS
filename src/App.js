import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeDashboard from "./pages/HomeDashboard";
import AppRoutes from "./AppRoutes";
import Footer from "./components/common/Footer";
import CommonSideBar from "./components/common/CommonSideBar";
import Header from "./components/common/Header";
import BodyHeader from "./components/common/CommonBodyHeader";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <CommonSideBar />
      <div className="content-wrapper">        
        <section className="content pb-5">
          <div className="container-fluid">
            <AppRoutes />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

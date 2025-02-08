import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./mainContent";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="pageContainer">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

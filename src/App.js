import logo from "./logo.svg";
import "./App.css";
import Header from "./component/standartComponent/header/header";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import keyWord from "./function/keyWord";
import Main from "./component/mainPage/main";
import Footer from "./component/standartComponent/footer/footer";
import Contact from "./component/contact/contact";
import Cabinet from "./component/cabinet/cabinet";

function App() {
  const [windowDimensions, setWindowDimensions] = useState(false);
  const location = useLocation();
  const [activeUser, setActiveUser] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header setActiveUser={setActiveUser} activeUser={activeUser} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cabinet" element={<Cabinet activeUser={activeUser} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

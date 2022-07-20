import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { RiExternalLinkLine } from "react-icons/ri";
import MyNavbar from "./components/MyNavbar";
import Home from "./views/Home";
import MyFooter from "./components/Footer";
import MyBio from "./views/MyBio";
import MyWork from "./views/MyWork";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/martinkonecny" element={<Home />} />
        <Route path="bio" element={<MyBio />} />
        <Route path="work" element={<MyWork />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;

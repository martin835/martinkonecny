import { Route, Routes } from "react-router-dom";
import MyFooter from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Home from "./views/Home";
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

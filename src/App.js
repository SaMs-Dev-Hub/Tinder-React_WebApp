import axios from "axios";

import Card from "./component/UserInfo/CardList";

import { Routes, Route } from "react-router-dom";
import UserDetails from "./component/UserInfo/UserDetails";

import LikeUsers from "./component/UserInfo/LikeUsers";
import Home from "./Home";
import NavbarUi from './component/NavbarUi'
import { useState } from "react";

function App() {
const [count,setcount]=useState(0)
  return (
    <>
      <NavbarUi count={count} /> 
      <Routes>
        <Route path="/" element={<Home setcount={setcount}/>} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/userLike" element={<LikeUsers />} />
      </Routes>
    </>
  );
}

export default App;

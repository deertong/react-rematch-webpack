import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Home from "./home/index";
import List from "./list/index";
import Mine from "./mine/index";
import "./style.less";

function index() {
  const navigate = useNavigate();
  return (
    <div className="tabs-content">
      <div className="nav-top">
        <div>
          <Button onClick={() => navigate("/tab")}>首页</Button>
        </div>
        <div>
          <Button onClick={() => navigate("/tab/list")}>列表</Button>
        </div>
        <div>
          <Button onClick={() => navigate("/tab/mine")}>我的</Button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/mine" element={<Mine />} />
      </Routes>
    </div>
  );
}

export default index;

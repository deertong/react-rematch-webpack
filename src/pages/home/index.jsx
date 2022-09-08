import React, { Component } from "react";
import {Outlet} from 'react-router-dom'
import Button from "@mui/material/Button";

class index extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Button variant="contained">测试</Button>
        <Outlet/>
      </div>
    );
  }
}
export default index;

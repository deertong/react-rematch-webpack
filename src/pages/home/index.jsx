import React, { Component } from "react";
import Button from "@mui/material/Button";

class index extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Button variant="contained">测试</Button>
      </div>
    );
  }
}

export default index;


// import React from 'react';
// import { connect } from 'react-redux';

// const Count = ({
//   number,
//   increase,
//   decrease
// }) => {
//   return (
//     <div className="count-container">
//       <h1>數字計數器</h1>
//       <div>{number}</div>
//       <div>
//         <button className="increase-btn" onClick={() => increase(1)}>點擊加1</button>
//         <button className="decrease-btn" onClick={() => decrease(1)}>點擊減1</button>
//       </div>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   number: state.count.number
// })

// const mapDispatchToProps = dispatch => ({
//   increase: dispatch.count.increase,
//   decrease: dispatch.count.decrease
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Count);
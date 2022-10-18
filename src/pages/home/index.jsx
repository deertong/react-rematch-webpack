import React, { Component } from "react";
import Button from "@mui/material/Button";
import { connect } from 'react-redux';
class index extends Component {
  handleClick=()=>{
    this.props.query('dsdddd')
  }
  render() {
    const {text} = this.props
    return (
      <div>
        {text}
        <Button variant="contained" onClick={this.handleClick}>测试</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.test.text
})

const mapDispatchToProps = dispatch => ({
  query: dispatch.test.query,
})

export default connect(mapStateToProps, mapDispatchToProps)(index);
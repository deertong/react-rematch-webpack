import React, { Component } from 'react'
import { connect } from 'react-redux';
@connect(state => ({
  test: state.test
}))
export default class index extends Component {
  componentDidMount() {
  }

  handleTest = () => {
    const { dispatch } = this.props
    dispatch.test.query('你好呀')
  }
  render() {
    const { test } = this.props
    return (
      <div>
        <div onClick={this.handleTest}>{test.text}</div>
      </div>
    )
  }
}

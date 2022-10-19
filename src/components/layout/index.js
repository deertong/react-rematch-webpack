import React, { Component, Fragment } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.less'

function Layout(props) {
    const onOpen = (url) => {
        props.history.push(url)
    }
    return (
        <Fragment>
            <div>
                <Link to={'/home'}>首页</Link>
                <Link to={'/about'}>关于</Link>
            </div>
            {props.children}
        </Fragment>
    )
}
export default Layout

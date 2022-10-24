import React, { Component, Fragment } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './style.less'

function Layout(props) {
    const navigate = useNavigate();
    const onOpen = (url) => {
        navigate(url)
    }
    return (
        <Fragment>
            <div>
                <Button onClick={() => onOpen('/home')}>首页</Button>
                <Button onClick={() => onOpen('/about')}>关于</Button>
            </div>
            {props.children}
        </Fragment>
    )
}
export default Layout

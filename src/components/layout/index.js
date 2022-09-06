import React, { Component, Fragment } from 'react'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    header
                </div>
                {this.props.children}
                <div>footer</div>
            </Fragment>
        )
    }
}

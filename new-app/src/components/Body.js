import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from "../css/bodyStyle.module.css"

 class Body extends Component {
    render() {
        return (
            this.props.children
        )
    }
}

export default Body

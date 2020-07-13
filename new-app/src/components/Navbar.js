import React, { Component } from 'react'
import styles from "../css/navbarStyle.module.css"
import {AiFillInfoCircle} from "react-icons/ai"

 class Navbar extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
         this.clickHandler = this.clickHandler.bind(this)
     }
     
    clickHandler(){
         this.props.checker(Number(this.props.value))
    }

    render() {
        

        return (
            <nav className={styles.navbar}>
                  <div className={styles.customButton}>
                    <button onClick={this.clickHandler}>button {this.props.value}</button>
                 </div>
            </nav>
        )
    }
}

export default Navbar

import React, { Component } from 'react'
import styles from "../css/contentStyle.module.css"
import Test1 from "./Test1"
import Test2 from "./Test2"
import {Animated} from "react-animated-css"

 class Content extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        let obj={
            1:<Test1 />,
            2:<Test2 />
          }

        let render = obj[this.props.value]
        return (


         
            <div className={styles.content}>
                {render}
            </div>

        )
    }
}

export default Content

import React, { Component } from 'react'
import {Animated} from "react-animated-css"

 class Test1 extends Component {
    render() {
        return (
          <Animated animationIn="fadeInUp" isVisible={true} >
            <div >
                <h1>This is  1 invoked on click of button 1</h1>
            </div>
         </Animated>
        )
    }
}

export default Test1

import React, { Component } from 'react'
import {Animated} from "react-animated-css"

export class Test2 extends Component {
    render() {
        return (
            <Animated animationIn="fadeInUp" isVisible={true} >
              <div>
                 <h1>This is test 2 invoked on click of button 2</h1>
              </div>
              <div>
                 <h1>This is test 2 invoked on click of button 2</h1>
              </div>
              <h1>This is test 2 invoked on click of button 2</h1>
            </Animated>
        )
    }
}

export default Test2

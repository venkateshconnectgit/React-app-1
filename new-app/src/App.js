import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import "../src/index"
import Content from './components/Content'
import styles from "../src/css/navbarStyle.module.css"


export class App extends Component {
     
    

    constructor(props) {
      super(props)
    
      this.state = {
         value: 1
      }
      this.checker =  this.checker.bind(this);
    }
    
    checker(btn){
         this.setState({value:btn})
         console.log(btn)
    }


  render() {



   
     
    let i = 0;
    let array = []
    for(i=0; i<6; i++){
       array.push(<Navbar value={i+1} checker={this.checker}/>)
    }
     



    return (
  <div>
    <div className={styles.navbar}>
       {array}
    </div>
       <Content value={this.state.value} />
   </div>
  
    )
  }
}

export default App

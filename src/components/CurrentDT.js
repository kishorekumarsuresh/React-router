import React, { Component } from 'react'
 class CurrentDT extends Component {
    showDate = ()=>{
        let d = new Date()
        let cd = d.toLocaleTimeString()
        return cd
    }
  render() {
    return (
      <div>
        <b> {this.showDate()} </b>
      </div>
    )
  }
}

export default CurrentDT

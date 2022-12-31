import "./Heero2.css";
import React, { Component } from "react";


class Heero2 extends Component {
    render(){
  return (
    <div className="oip">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
  )
}
}

export default Heero2

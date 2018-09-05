import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name:"Dunder Mifflin",
    producer:"PaperCo",
   hasWatermark:"true",
   color:"white",
    weight:210
    };
  }
}
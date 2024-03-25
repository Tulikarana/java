import React, { Component } from 'react'
export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tulika",
      Phone: 9902622977,
      address:{ 
        city:"bangalore"
    }
  }
}
 render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.Phone}</h2>
        <h3>{this.state.address.city}</h3>
        <button onClick={()=>{
          this.setState({
            name:"xyz",
            Phone:8277120892,
            address:{
            city: "mysore",}})}}> update value </button>
            </div>
    )
  }
}

export class BesantSub extends Component{
render(){
  return (
    <div>
      <h1> {this.props.name}</h1>
    </div>
  )
}
}




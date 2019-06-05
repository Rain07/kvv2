import React, { Component } from 'react'
import './plan.css';




class PlanDate extends Component {
  constructor(props){
       super(props)
       this.state={
          items:[],
          isLoad:false,


       }
       
    }
  componentDidMount(){
         
   fetch('karnaval.herokuapp.com/api/plan/date?id=')
      .then(res => res.json())
      .then(json =>{
        this.setState({
          isLoaded: true,
          items: json,

        })
      });

  }


  render() {
    var {isLoaded, items}=this.state;
      if (!isLoaded){
       return <div>PlanDateFailed!</div>;

      }
     
   }
}

export default PlanDate;
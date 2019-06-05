import React, { Component } from 'react'
import './plan.css';




class PlanImage extends Component {
  constructor(props){
       super(props)
       this.state={
          items:[],
          isLoad:false,


       }
       
    }
  componentDidMount(){
         
   fetch('karnaval.herokuapp.com/api/plan/image?id=')
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
       return <div>PlanImageFailed!</div>;

      }
     
   }
}

export default PlanImage;
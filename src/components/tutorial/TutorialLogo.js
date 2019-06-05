import React, { Component } from 'react'
import './tutorial.css';




class TutorialLogo extends Component {
  constructor(props){
       super(props)
       this.state={
          items:[],
          isLoad:false,


       }
       
    }
  componentDidMount(){
         
   fetch('karnaval.herokuapp.com/api/tutorial/image?id=')
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
       return <div>TutorialLogoFailed!</div>;

      }
     
   }
}

export default TutorialLogo;
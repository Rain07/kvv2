import React, { Component } from 'react'
import './recent.css';




class RecentImage extends Component {
  constructor(props){
       super(props)
       this.state={
          items:[],
          isLoad:false,


       }
       
    }
  componentDidMount(){
         
   fetch('karnaval.herokuapp.com/api/recent/image?id=')
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
       return <div>RecentImageFailed!</div>;

      }
   }
}

export default RecentImage;
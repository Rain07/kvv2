import React, { Component } from 'react'
import './expense.css';




class ExpenseDate extends Component {
  constructor(props){
       super(props)
       this.state={
          items:[],
          isLoad:false,


       }
       
    }
  componentDidMount(){
         
   fetch('karnaval.herokuapp.com/api/expense/date?id=')
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
       return <div>ExpenseDateFailed!</div>;

      }
      
   }
}

export default ExpenseDate;
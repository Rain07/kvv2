import React, { Component } from 'react'
import './expense.css';
import ExpenseDate from './ExpenseDate';
import ExpenseImage from './ExpenseImage';
import ExpenseLogo from './ExpenseLogo';
import ExpenseTitle from  './ExpenseTitle';




class Expense extends Component {
 

  render() {
    var {isLoaded, items}=this.state;
      if (!isLoaded){
       return <div>ExpenseFailed!</div>;

      }
      else{

          return (
           <div class Name="Expense">
             <ui>
               {items.map(item =>(
                 <li key={item.id}>
                   Name: {item.name}

                 </li>
               ))

               };
             </ui>
             
             </div>

            );

        } 
   }
}

export default Expense;
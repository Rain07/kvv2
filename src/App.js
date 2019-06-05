import React, { Component } from 'react';
import Extense from './components/expense/Expense';
import Footer  from  './components/footer/Footer';
import Guidance from './components/guidance/Guidance';
import Headline from './components/headline/Headline';
import Plan from './components/plan/Plan';
import Recent from './components/recent/Recent';
import Service from './components/service/Service';
import Toolbar from './components/toolbar/Toolbar';
import Tutorial from './components/tutorial/Tutorial';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline/>
         <Plan/>
          <Recent/>
           <Service/>
             <Toolbar/>
           <Tutorial/>
          <Extense />
         <Guidance />
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import localimage from './me.png';

class App extends Component {
  render() {
      const now = new Date();
    return (
      <div className="App">
        <p> App Component Test </p>
        <h1> The date is: { now.toTimeString() } </h1>
        <hr></hr>
        <Biography/>
        <hr></hr>
        <GroceryList/>

      </div>
    );
  }
}

class Biography extends React.Component {
  render(){
    return (
        <div>
          <p> Biography Component Test </p>
          <p> Local image </p>
          <img src={localimage}/>
            <p> Web image </p>
          <img src="http://www.rednewswire.com/wp-content/uploads/2016/08/apple.jpg" style={{width:100, lenght:100}}/>
          <p> Name: Maulik Zalavadia </p>
          <p> Skill: Developing </p>
        </div>
    );
  }
}

class GroceryList extends React.Component {
  render(){
       const list = ['Banana','Cookies','Ice Cream',"Strawberry"]  
       const numlist = ['1','2','3',"4"]  
    
    return (
        <div>
          <p> Grocery list Component Test </p>
         
          <p>
           <h1>
              {list.map(list => <li>{list}</li>)}
            </h1>
            <ul>
             {numlist.map(list => <li>{list}</li>)}
            </ul>
         </p>
        </div>
    );
  }
}

export default App;

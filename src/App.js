import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import localimage from './me.png';
import ToDoItem from './todoitems';

class App extends Component {

  handleClick(data){
    alert(data + ' button clicked')
  }
  render() {
      const now = new Date();
    return (
      <div className="App">
        <p> App Component Test </p>
        <button onClick={this.handleClick.bind(this, 'Button data')}>
        Click Me!
        </button>
        <h1> The date is: { now.toTimeString() } </h1>
        <hr></hr>
        <Biography titel="my prop test"/>
        <hr></hr>
        <GroceryList/>
         <hr></hr>
        <ToDoItem/>
         <hr></hr>
        <ApiCall/>


      </div>
    );
  }
}



class Biography extends React.Component {
  render(){
    return (
        <div>
          <p> {this.props.titel} </p>
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

class ApiCall extends React.Component {
  constructor(){
    super();
    this.state = {
        quote: '',
        author: ''
      }
}

  componentDidMount(){
    this.UserList();
  }

  UserList(){
   request.get('https://talaikis.com/api/quotes/random/')
    .end((error, results) => {
      this.setState({
        quote: results.body.quote,
        author: results.body.author
      });
    }
    )
  }
  render(){
       const list = ['Banana','Cookies','Ice Cream',"Strawberry"]  
       const numlist = ['1','2','3',"4"]  
       const userlist = this.state.userslist
    
    return (
        <div>
          <p>{this.state.quote}</p>
          -<p>{this.state.author}</p>

      
        </div>
    );
  }
}



export default App;

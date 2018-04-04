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
        {/*<ApiCall/>
        <hr></hr>*/}
        <Game/>



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

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square"  onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props){
  return (
    <button className="square"  onClick={props.onClick}>
       {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
  return (
      <Square
       value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
  />
  );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner){
      status = 'Winner: ' + winner;
    } else{
     status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null; 
}

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

export default App;

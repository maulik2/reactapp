import React, { Component } from 'react';

export default class ToDoItem extends React.Component{
constructor(){
    super();
    this.state = {
      todoItems: []
    }
}

     handleAddButtonClick(){
            const todoItems = this.state.todoItems;
            todoItems.push(this.textbox.value);

            this.setState({
                todoItems:todoItems
            })         
}

 handleDeleteButtonClick(data){
            const todoItems = this.state.todoItems;
            const index = todoItems.indexOf(data)
            todoItems.splice(index,1);

            this.setState({
                todoItems:todoItems
            })
 }
            
    render(){
       
        return(
            <div>
            <input
                type="text"
                ref={textbox => this.textbox =textbox}
                />
           <button onClick={this.handleAddButtonClick.bind(this)}>
           Add item 
           </button>

           


           <p> Todo Items </p>
           <ul>
                {this.state.todoItems.map(item=> <li> {item} <button  onClick={this.handleDeleteButtonClick.bind(this, item)} > Delete </button></li>)
               
            }
                 
           </ul>
            </div>
        );
    }
}
import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    textInput: ''
  }
  
  textChangedHandler = (e) => {
    this.setState({textInput: e.target.value});
  }

  delCharHandler = (index) => {
     const text = this.state.textInput.split('');
     text.splice(index, 1);
     const newText = text.join('');
     this.setState({textInput: newText});
  };

  render() {
    const charList = this.state.textInput.split('').map((ch, index) => {
       return <Char 
         character={ch} 
         key={index}
         clicked={() => this.delCharHandler(index)}/>;
    });

    return (
    <div className="App">
      <h2>Second Assignment</h2>
      <input 
        type='text' 
        onChange={this.textChangedHandler} 
        value={this.state.textInput}
        len={this.state.textInput.length}/>
      <p>{this.state.textInput.length}</p>
      <Validation textLength={this.state.textInput.length}/>
      {charList}
    </div>
    );
  }
}

export default App;

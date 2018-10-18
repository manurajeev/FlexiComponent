import React, { Component } from 'react';
import './App.css';
import Flexi from './Flexi/Flexi';

class App extends Component {

  onFlexSubmit = (userInput) => {
    alert('Persons name : '+userInput.person_name + '\nPersons state : '+userInput.states );
  };

  render() {
    const flexiConfig = {
      items: [
      { 
      "name": "person_name",   
      "label": "Person's Name",    
      "type": "TextField",  
      },  
      {  
      "name": "states", 
      "label": "Person's state",     
      "type": "DropDown",     
      "values": [     
                "Maharashtra",     
                "Kerala",      
                "Tamil Nadu"  
              ]      
      } 
     ]     
    };
    return (
      <div className="App">
        <Flexi onSubmit={this.onFlexSubmit} config={flexiConfig} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Flexi.css';

class Flexi extends Component {

    constructor(props) {
        super(props);
        if(props.config.items) {
            let textfield = this.props.config.items[0].name; 
            let dropdown = this.props.config.items[1].name; 
            this.state = {
                [textfield] : '',
                [dropdown] : ''
            };
        }
    }

    //Change state on Changing input elements
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        });
    };

    render() {
        const config = this.props.config;
        return (
             !config.items ?  <p>Check the data Inflow</p> : //Check whether Input data is correct
            <div className="Flexi">
                <form onSubmit={ () => this.props.onSubmit(this.state) } className="form">
                    <p>
                        <label>{config.items[0].label}  </label>
                        <input type="text" 
                        className="textField"
                        name={config.items[0].name} 
                        onChange={this.handleChange}
                        value={this.state.textfield } /> 
                    </p>
                    <p>
                        <label>{config.items[1].label}  </label>
                        <select 
                        className="dropdown"
                        name={config.items[1].name}
                        onChange={this.handleChange}
                        defaultValue={this.state.dropdown}>
                            <option></option>
                            {config.items[1].values.map((state,index) => <option key={index}> {state} </option>) }
                        </select> 
                    </p>
                    <center>
                        <input type="submit" value="Submit" className="submit"/>
                    </center> 
                </form>
            </div>
        );
    }
}

export default Flexi;
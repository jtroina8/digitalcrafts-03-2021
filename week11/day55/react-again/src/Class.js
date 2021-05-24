import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props);
        // the point of using the constructor in react is to initalize your state
        this.state = {
            //state is a container that hold data, let us have access to it
            count: 0,
            pout: 0,
            clout: 0,
            doubt: 0,
        };
        // this refers to the entire class
        // this allows you to have access to individual elements, things, stuff on this class
        // this is unique to a class in JS
        // this is even more unique in that it refers to that specific class
    }
// setState, allows you to access the state object
    render() {
        return (
            <div>
                <h1>Class.js</h1>
                <p>Joe's Count Stat: {this.state.count}</p>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                    })}>Plus</button>
                <button onClick={() => this.setState({
                    count: this.state.count - 1
                    })}>Minus</button>
                  <p>Joe's Pout Stat: {this.state.pout}</p>
                <button onClick={() => this.setState({
                    pout: this.state.pout + 1
                    })}>Plus</button>
                <button onClick={() => this.setState({
                    pout: this.state.pout - 1
                    })}>Minus</button>
                  <p>Joe's Clout Stat: {this.state.clout}</p>
                <button onClick={() => this.setState({
                    clout: this.state.clout + 1
                    })}>Plus</button>
                <button onClick={() => this.setState({
                    clout: this.state.clout - 1
                    })}>Minus</button>
                  <p>Joe's Doubt Stat: {this.state.doubt}</p>
                <button onClick={() => this.setState({
                    doubt: this.state.doubt + 1
                    })}>Plus</button>
                <button onClick={() => this.setState({
                    doubt: this.state.doubt - 1
                    })}>Minus</button>
            </div>
        )
    }
}
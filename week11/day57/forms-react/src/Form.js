import React, { Component } from "react"
import "./App.css"
export default class Form extends Component {
    state = {
        firstName: "",
    };
    render() {
        return (
            <div>
                <h1 className='header'>Forms React</h1>
                <div className='shipping-form-container'>
                  <form action="" className='shipping-form'>
                    <input name='firstName' className='shipping-input-text' type='text' placeholder='First Name' value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value,})} ik/>
                    <input type='text' placeholder="Last Name" />
                    <input type='text' className='street-address' placeholder="Street Address" />
                    <input type='text' className='apt-suite' placeholder="Apt, Suite" />
                    <input type='text' placeholder="Postal Code" />
                    <input type='text' placeholder="City" />
                    <input type='text' placeholder="State" />
                    <input type='text' placeholder="Country" />
                    <input type='text' placeholder="Phone" />
                    <input type='submit' className='submit-btn' placeholder="Submit" />
                  </form>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Header from './Header'

export default class MainProfile extends Component {
    render() {
        return (
            <div className="main-page">
                <Header />
                <h3>I'm the Main page</h3>
            </div>
        )
    }
}

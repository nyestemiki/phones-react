import React, { Component } from 'react'

export default class Model extends Component {
    render() {
        return <img src={this.props.img} alt={this.props.key} />;
    }
}
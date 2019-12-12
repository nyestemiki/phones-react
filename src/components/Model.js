import React, { Component } from 'react';
import { ModelStyle } from './styles/BrandStyles';

export default class Model extends Component {
    render() {
        return (
            <ModelStyle>
                <img 
                    src={this.props.img} 
                    alt={this.props.id} 
                    onLoad={this.props.setsBackground && this.props.loaded}    
                    className="modelImg"
                />
            </ModelStyle>
        );
    }
}
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Spec from './Spec';
import Buy from './Buy';
import NoInfo from './NoInfo';

const detailsContainerAnimation = keyframes`
    from {
        transform: rotateX(-90deg);
    } to {
        transform: rotateX(0);
    }
`;

const DetailsContainer = styled.div`
    flex: 3;

    display: grid;
    grid-template-columns: 1fr ${props => props.split ? '1fr' : ''};
    margin-right: 15px;
    margin-left: -15px;
    font-size: 1.2vw;
    animation: ${detailsContainerAnimation} .45s;
    position: relative;
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, .125);
    border-radius: 10px;
`;

class Details extends Component {
    render() {
        if(this.props.status) {
            return (
                <DetailsContainer split={this.props.for.specs}>
                    {   
                        (
                            this.props.for.specs && 
                            Object
                                .keys(this.props.for.specs)
                                .map(spec => (
                                    <Spec 
                                        spec={spec} 
                                        value={this.props.for.specs[spec]}
                                        key={Date.now() + Math.random(Date.now())}
                                    />
                                )) 
                        )  ||
                        <NoInfo />
                    } 
                    { this.props.for.specs && <Buy /> }
                </DetailsContainer>
            );
        } else {
            return null;
        }
    }
}

export default Details;
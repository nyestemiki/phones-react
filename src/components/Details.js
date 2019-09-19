import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

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
    grid-template-areas: 1fr 1fr;
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
            return(
                <DetailsContainer>
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                    DetailsContainer
                </DetailsContainer>
            );
        } else {
            return null;
        }
    }
}

export default Details;
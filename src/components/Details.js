import React, { Component } from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
    flex: 3;
`;

class Details extends Component {
    render() {
        if(this.props.status) {
            return(
                <DetailsContainer>
                    DetailsContainer
                </DetailsContainer>
            );
        } else {
            return null;
        }
    }
}

export default Details;
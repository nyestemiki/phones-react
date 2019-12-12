import React from 'react';
import styled from 'styled-components';

const NoInfoContainer = styled.div`
    margin: 20px;
    color: black;

    @media screen and (max-width: 600px) {
        font-size: 1rem;
    }
`;

const NoInfo = () => (
    <NoInfoContainer>
        <p>No further information provided</p>
    </NoInfoContainer>
);

export default NoInfo;
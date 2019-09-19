import React from 'react';
import styled from 'styled-components';

const NoInfoContainer = styled.div`
    margin: 20px;
`;

const NoInfo = () => (
    <NoInfoContainer>
        <p>No further information provided</p>
    </NoInfoContainer>
);

export default NoInfo;
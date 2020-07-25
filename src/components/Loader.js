import React from 'react';
import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
    from{ transform: scale(1); }
    to{ transform: scale(0.5); }
`;

const Svg = styled.svg`
    width: 40px;
    animation: ${Pulse} .2s ease-in-out infinite alternate;
`;

function Loader() {
    return (
        <Svg viewBox="0 0 100 100">
            <circle cx="50%" cy="50%" r="50%" fill="#71d1cf" />
        </Svg>
    )
}

export default Loader;

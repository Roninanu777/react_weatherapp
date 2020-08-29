import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    cursor: pointer;
    padding: 2rem 2rem;
    margin-top: 2rem;
    transition: all 0.2s ease;
    border-radius: 5px;
    box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.07);
    &:hover{
        box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.16);
        transform: translateY(-3px);
    }
`;

const SearchedCity = (props) => {
    return (
        <Container>
            {props.children}
        </Container>      
    )
}

export default SearchedCity

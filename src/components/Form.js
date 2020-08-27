import React from 'react';
import styled from 'styled-components';

//Styles
//------------------------------------------------------------------

const WeatherForm = styled.form`
    padding: 20px;
    background-color: #bfdfe0;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    font-family: 'Varela Round', sans-serif;
`;

const Input = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    background-color: #f7f7f7;
    border-radius: 5px;
`;

const Btn = styled.button`
    outline: none;
    padding: 0 5px;
    border-radius: 5px;
    background-color: #bfdfe0;
    margin-left: 1rem;
    border: 2px solid #2b7a78;
    color: #2b7a78;
    cursor: pointer;
    transition: all 0.1s ease-in;
    &:hover{
        background-color: #2b7a78;
        color: white;
    }
`;

//------------------------------------------------------------------

const Form = (props) => (
        <WeatherForm onSubmit={props.getWeather}>
            <Input type="text" name="city" placeholder="City..." />
            <Btn type="submit">Search</Btn>
        </WeatherForm>
)

export default Form

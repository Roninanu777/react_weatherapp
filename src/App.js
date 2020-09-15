import React, { Component } from 'react';
import styled from 'styled-components';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrLocWeather from './components/CurrLocWeather';
import OtherLocWeather from './components/OtherLocWeather';
import Modal from './components/Modal';

const Overlay = styled.div`
    position: absolute;
    background-color: rgb(85, 99, 99);
    opacity: 0.7;
    transition: all 1s ease-in;
    height: 100%;
    width: 100%;
    align-self: center;
`;

const Add = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 8%;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    padding: 7px 10px;
    border-radius: 50%;
    background-color: #2b7a78;
    outline: none;
    cursor: pointer;
`;

class App extends Component {
    state={
      open: false
    }

    handleOpen = () => {
      this.setState({open: true})
    }

    handleClose = () => {
      this.setState({open: false})
    }

    render() {
      return (
        <React.Fragment>
          <CurrLocWeather />
          <OtherLocWeather show={this.state.open} />
          <Add>
              <Button onClick={this.handleOpen}><FontAwesomeIcon style={{fontSize: '1.7rem', color: 'white'}} icon={faPlus}></FontAwesomeIcon></Button>
          </Add>
          { this.state.open ? <Overlay onClick={this.handleClose} /> : null}
          <Modal show={this.state.open} close={this.handleClose} />
        </React.Fragment>
      )
    }
}

export default App;
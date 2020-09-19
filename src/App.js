import React, { Component } from 'react';
import styled from 'styled-components';
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
          <OtherLocWeather handleOpen={this.handleOpen} show={this.state.open} />
          { this.state.open ? <Overlay onClick={this.handleClose} /> : null}
          <Modal show={this.state.open} close={this.handleClose} />
        </React.Fragment>
      )
    }
}

export default App;
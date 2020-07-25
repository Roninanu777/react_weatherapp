import React, { Component } from 'react';
import CurrLocWeather from './components/CurrLocWeather';
import OtherLocWeather from './components/OtherLocWeather';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <CurrLocWeather />
        <OtherLocWeather />
      </React.Fragment>
    )
  }
}

export default App;
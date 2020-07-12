import React, { Component } from 'react'

class Weather extends Component {
    render() {
        const { temperature, city, country, humidity, description, error} = this.props.blob;
        return (
            <div>
                <p>Location: {city}, {country}</p>
            </div>
        )
    }
}

export default Weather

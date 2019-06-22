import React, { Component } from 'react';

const capitalize = (str) => {
    return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}

class Weather extends Component {
    render() {
        return (
            <div>
                <div className="locationTitle">
                    {this.props.city && 
                        <div>
                            <h4>Today's Weather</h4>
                            <h4 id="locTitle">{this.props.city}, {this.props.country}</h4>
                        </div>
                    }
                </div>
                <div className="flex-container weather-det">
                    <div>
                        { this.props.temperature &&
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front" style={{ backgroundColor:'#086375'}}>
                                        Temperature
                                    </div>
                                    <div className="flip-card-back" style={{ color: '#086375' }}>
                                        { this.props.temperature }&#176;C
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        { this.props.humidity &&
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front" style={{ backgroundColor: '#5DA399' }}>
                                        Humidity
                                    </div>
                                    <div className="flip-card-back" style={{ color: '#5DA399' }}>
                                        { this.props.humidity }%
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        { this.props.description &&
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front" style={{ backgroundColor: '#42858C' }}>
                                        Conditions
                                    </div>
                                    <div className="flip-card-back" style={{ color: '#42858C' }}>
                                        { capitalize(this.props.description) }
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;

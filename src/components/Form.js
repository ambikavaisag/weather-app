import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <div className="card" style={formCardStyle}>
                    <div className="card-body">
                        <form onSubmit={this.props.getWeather}>
                            Enter the city or place
                            <input type="text" className="form-control" name="city" placeholder="Eg: London" />
                            { this.props.error && <p style={errorMsg}>{this.props.error}</p> }
                            <div>
                                <button className="btn">Get Weather</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const formCardStyle = {
    top: '12%',
    fontWeight: 'bold',
    textAlign: 'center'
}

const errorMsg = {
    color: 'red'
}

export default Form;
import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <div>
                <h3 style={titleCardStyle}>Weather Finder</h3>
            </div>
        )
    }
}

const titleCardStyle = {
    textAlign: 'center',
    padding: '10px',
    borderRadius: '2px',
    backgroundColor: '#086375',
    color: '#FFF',
    fontWeight: 'bold'
}
export default Title;

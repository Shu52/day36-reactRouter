import React, { Component } from 'react'


export default class LocationList extends Component {
    state = {
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ]
    }
    render() {
        return (
            <React.Fragment>
                {<h1>Locations</h1>}
            {
                <ul>
                {
                    this.state.locations.map(location =>  <li key = {location.id}>{location.name}</li> )
                }
                </ul>
            }
            </React.Fragment>
        )
    }
}
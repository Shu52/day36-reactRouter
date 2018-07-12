import React, { Component } from 'react'
import LiComponets from "./LiComponets"

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
                {this.state.locations.map(location => {
                       return <LiComponets key={location.id} theStuffIPassIn={location}  />
                }
                      ) }
                </ul>
            }
            </React.Fragment>
        )
    }
}
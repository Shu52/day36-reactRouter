import React, { Component } from 'react'


export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
            {<h1>Owners</h1>}
            {
                this.props.owners.map((owner) =>
                    <div key={owner.id}>
                        {owner.name}
                    </div>
                )
            }
            </React.Fragment>
        )
    }
}
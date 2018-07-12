import React, { Component } from "react"
import LiComponets from "./LiComponets"

export default class AnimalList extends Component {
    state = {
        animals: [
            { id: 1, name: "Doodles" },
            { id: 2, name: "Jack" },
            { id: 3, name: "Angus" },
            { id: 4, name: "Henley" },
            { id: 5, name: "Derkins" },
            { id: 6, name: "Checkers" }
        ]
    }

    render() {
        return(
            <React.Fragment>
                {<h1>Animals</h1>}
               
                {
                     <ul>
                     {this.state.animals.map(animal => {
                       return <LiComponets key={animal.id} theStuffIPassIn={animal}  />
                }
                      ) }
            </ul>
        }
            
            </React.Fragment>
            )
        }
       
    }

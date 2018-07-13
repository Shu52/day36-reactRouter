import React, { Component } from "react"
import Animal from "./Animal"

export default class AnimalList extends Component {
    state = {
        animals: [
            { id: 1, name: "Doodles", breed: "German Shepherd", type:"animals" },
            { id: 2, name: "Jack", breed: "Cocker Spaniel", type:"animals" },
            { id: 3, name: "Angus", breed: "Dalmatian", type:"animals" },
            { id: 4, name: "Henley", breed: "Carolina Retriever", type:"animals" },
            { id: 5, name: "Derkins", breed: "Pug", type:"animals" },
            { id: 6, name: "Checkers", breed: "Bulldog", type:"animals" }
        ]
    }

    render() {
        return (
            <ul>
                {
                    this.state.animals.map(animal=>{
                       return <Animal animal={animal} key={animal.id}/>
                    })
                }
            </ul>
        )
    }
}

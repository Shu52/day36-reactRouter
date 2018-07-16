import React, { Component } from "react"

export default class AddAnimal extends Component {
    state = {
        addAnimal: {
            name: "",
            breed: "",
            type:"animals"
        }
     }
     addAnimal = (addAnimal) => {
        // Add the specified animal from the API
        fetch("http://localhost:5002/animals/", {
            method: "POST",
            data: addAnimal
        })
        // When POST is finished, retrieve the new list of animals
        .then(() => {
            // Remember you HAVE TO return this fetch to the subsequenet `then()`
            return fetch("http://localhost:5002/animals")
        })
        // Once the new array of animals is retrieved, set the state
        .then(a => a.json())
        .then(animalList => {
            this.setState({
                animals: animalList
            })
        })
    }
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    handleLogin = (e) => {
        e.preventDefault()}

    render() {
        return ( 
            <form onSubmit={this.handleLogin}>
        <label>
          Animal Name:
          <input type="text" id = "name" onChange={this.handleFieldChange} />
        </label>
        <label>
            Animal Breed:
            <input type = "text" id ="breed" onChange={this.handleFieldChange} />
            </label>
            <button type="submit" onClick={() => this.addAnimal(this.state.addAnimal)}>
                    Add Animal
                </button>
      </form>
        )}
    }

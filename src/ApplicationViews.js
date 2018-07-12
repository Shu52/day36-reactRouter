import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import LocationList from './LocationList'
import EmployeeList from './EmployeeList'
import LiComponets from './LiComponets';


export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LocationList} />

                <Route exact path="/animals" component={AnimalList} />
                <Route path="/animals/:animalId" render={(props) => {
                    return <LiComponets theStuffIPassIn={props.location.state.animal} />
                }} />

                <Route exact path="/employees" component={EmployeeList} />
                <Route path="/employees/:employeeId" render={(props) => {
                    return <LiComponets theStuffIPassIn={props.location.state.employee} />
                }} />
            </React.Fragment>
        )
    }
}
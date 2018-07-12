import React, { Component } from "react"
import LiComponets from "./LiComponets"

export default class EmployeeList extends Component {
    state = {
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ]
    }

    render() {
        return (
            
            <React.Fragment>
                {<h1>Employees</h1>}
                <ul>
                {this.state.employees.map(employee => {
                       return <LiComponets key={employee.id} theStuffIPassIn={employee}  />
                }
                      ) }
                </ul>
            </React.Fragment>
        )
    }
}
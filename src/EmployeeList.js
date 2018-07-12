import React, { Component } from "react"
import LiComponets from "./LiComponets"

export default class EmployeeList extends Component {
    state = {
        employees: [
            { id: 1, name: "Jessica Younker", type:"employee" },
            { id: 2, name: "Jordan Nelson",type:"employee" },
            { id: 3, name: "Zoe LeBlanc",type:"employee" },
            { id: 4, name: "Blaise Roberts",type:"employee" }
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
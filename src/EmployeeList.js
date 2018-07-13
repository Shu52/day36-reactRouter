import React, { Component } from "react"
import Employee from "./Employee"

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
            <ul>
                {
                    this.state.employees.map(employee=>{
                       return <Employee employee={employee} key={employee.id}/>
                    })
                }
            </ul>
        )
    }
}
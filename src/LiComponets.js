import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
    console.log("props",props)
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.theStuffIPassIn.name}
                </h5>
                <p className="card-text">{props.theStuffIPassIn.breed}</p>
                <Link className="card-link"
                    to={{
                        pathname: `/${props.theStuffIPassIn.type}/${props.theStuffIPassIn.id}`,
                        state: { animal: props.theStuffIPassIn ,
                         employee: props.theStuffIPassIn }
                    }}>
                    
                    Details
                </Link>
            </div>
        </div>
    )
}
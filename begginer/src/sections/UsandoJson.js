import React, {Component} from "react";

class CarItems extends Component {
render(){
    const {car, id} = this.props
    return(
        <li>
            <p>key: {id}</p>
            <p>Nombre: {car.name}</p>
            <p>Marca: {car.company}</p>
        </li>
    )
}
}

export default CarItems
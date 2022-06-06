import React, { Component } from "react";

class ComponentA extends Component {
    render() {
        return (
            <p>
                Componente A
            </p>
        )
    }
}
class ComponentB extends Component {
    render() {
        return (
            <p>
                Componente B
            </p>
        )
    }
}

// function UseConditionalRendering(mostrarA) {
//     if (mostrarA) {
//         return <ComponentA></ComponentA>
//     }
//     return <ComponentB></ComponentB>
// }

class CondicionalSections extends Component {
    constructor() {
        super()
        this.state = { mostrarA: true }
    }

    render() {
        return (
            <div>
                <h1>Condicional Rendering</h1>
                {this.state.mostrarA
                    ? <ComponentA></ComponentA>
                    : <ComponentB></ComponentB>
                }
            </div>
        )
    }
}
export default CondicionalSections
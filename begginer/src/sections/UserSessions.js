import React, { Component } from 'react';


class Loggon extends Component {
    render() {
        return <button>Iniciar Sesión</button>
    }
}


class Loggin extends Component {
    render() {
        return (
            <div>
                <h1>Bienvenido</h1>
                <button>Cerrar Sesion</button>
            </div>
        )
    }
}



class UserLogin extends Component {
    constructor() {
        super();
        this.state = { IsUserLogged: true }
    }

    render() {
        return (
            <div>
                {
                    this.state.IsUserLogged
                        ? <Loggin></Loggin>
                        : <Loggon></Loggon>
                }
            </div>
        )
    }
}


export default UserLogin
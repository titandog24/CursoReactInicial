import React, { Component } from 'react'
import CarItems from './sections/UsandoJson'
import cars from './data/cars.json'
import CondicionalSections  from "./sections/CondicionalSections"
import logo from './logo.svg'
import './App.css'

import UserSession from "./sections/UserSessions";


//Componente de tipo arrowFunctions
const Hello = (props) => <h2>{props.title}</h2>
//Component de tipo Clase
class Text extends Component {
  render() {
    //Destructuración: Permite objeter los atributos de un objeto como variables.
    const {
      arregloDeNum,
      boolean,
      defaules,
      title,
      multiply,
      number
    } = this.props

    const textfiltrado = boolean ? "Es cierto" : "Es Falso"
    const arrayOfNumbers = arregloDeNum.map(multiply)
    return (

      <div>
        {title}
        <p>{arrayOfNumbers.join(", ")}</p>
        <p>{number}</p>
        <p>{textfiltrado}</p>
        <h3>{defaules}</h3>
      </div>
    )
  }
}

class CompoDefault extends Component {
  render() {
    return (
      <div>
        <img src={this.props.logos} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    )
  }
}

//Renderizando contadores entre padre-hijo
//Padre
class Contandor extends Component {

  constructor(props) {
    super(props)
    this.state = { contandor: props.contadorInicial }
    setInterval(() => {
      this.setState({ contandor: this.state.contandor + 1 })
    }, 1000)
  }

  render() {
    return <RenderizadoraDeContadores numero={this.state.contandor} />
  }
}
//Hijo
class RenderizadoraDeContadores extends Component {
  render() {
    return <h1>{this.props.numero}</h1>
  }
}
//
class ListasDeNumeros extends Component {
  constructor(props) {
    super(props);
    this.state= {listaDeNumeros: props.arreglo}
  }
  
  render(){
    return(
      <>
        <h1>Transformando listas</h1>
        {
          this.state.listaDeNumeros.map((value, index)=>{
            return <p key={index}>Soy el número {value}</p>
          })
        }
      </>
    )
  }
}


//Permite definir los valores por defecto de las props de un componente
Text.defaultProps = {
  defaules: "Valor Default"
}

function App() {
  const muestraDefecto = false;
  return (
    <div className="App">
      <header className="App-header">
        {muestraDefecto ? <CompoDefault logos={logo}></CompoDefault> : ""}
        {muestraDefecto ? <Hello title="Hola mundo desde props"></Hello> : ""}
        {muestraDefecto ?
          <Text
            arregloDeNum={[1, 2, 3]}
            boolean={true}
            defaules="Si funciona"
            multiply={(n => n * 4)}
            number={1}
            title={<h1>Holo mundo desde componente text</h1>}
          ></Text>
          : ""}
       {muestraDefecto ? <Contandor contadorInicial={1000} /> :""}
       {muestraDefecto ? <CondicionalSections /> :""}
       {muestraDefecto ? <UserSession></UserSession> :""}
       {muestraDefecto ?<ListasDeNumeros arreglo={[1,1,2,3,4,5]}></ListasDeNumeros> :""}
       <ul>
          {
            cars.map(car => {
              return <CarItems id={car.id} car={car}></CarItems>
            })
          }
       </ul>
      </header>
    </div>
  );
}

export default App;

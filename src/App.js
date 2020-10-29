import React, {Component} from 'react'
import './styles/estiloCronometro.css'

import cronometroImg from './assets/cronometro.png'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <div className="container">
        <img src={cronometroImg} alt="Cronômetro" className="img"/>
        <a className="timer">0.0</a>
        <div className="areaBtn">
          <a className="btn">VAI</a>
          <a className="btn">LIMPAR</a>
        </div>
      </div>
    )
  }
}
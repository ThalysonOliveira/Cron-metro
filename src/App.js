import React, {Component} from 'react'
import './styles/estiloCronometro.css'

import cronometroImg from './assets/cronometro.png'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      numero: 0
    }

    this.vai =  this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai(){

  }
  limpar(){
    
  }

  render(){
    return(
      <div className="container">
        <img src={cronometroImg} alt="Cronômetro" className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="btn" onClick={this.vai}>VAI</a>
          <a className="btn" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>  
    )
  }
}
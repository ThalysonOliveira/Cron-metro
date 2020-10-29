import React, {Component} from 'react'
import './styles/estiloCronometro.css'

import cronometroImg from './assets/cronometro.png'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      numero: 0,
      btn: 'VAI'
    }
    this.timer = null
    this.vai =  this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai(){
    let state = this.state
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      state.btn = 'VAI'
    }else{
      this.timer = setInterval(()=>{
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      },100)
      state.btn = 'PAUSAR'
    }
    this.setState(state)
  }
  limpar(){

  }

  render(){
    return(
      <div className="container">
        <img src={cronometroImg} alt="Cronômetro" className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
        <a className="btn" onClick={this.vai}>{this.state.btn}</a>
          <a className="btn" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>  
    )
  }
}
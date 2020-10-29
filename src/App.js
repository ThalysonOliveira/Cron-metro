import React, {Component} from 'react'

import cronometroImg from './assets/cronometro.png'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <div>
        <img src={cronometroImg} alt="Cronômetro"/>
      </div>
    )
  }
}
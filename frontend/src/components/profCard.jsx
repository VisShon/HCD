import React, { Component } from 'react'
import '../styles/profCard.css'
export default class profCard extends Component {
  render() {
    return (
      <div id="profCard">
          <img id="profImg" src={'frontend/src/assets/profsImg/Jainendra.png'}/>
          <div className="font-Archivo text-[1rem] font-semibold text-[#ffffff]">
             {this.props.name}
          </div>
      </div>
    )
  }
}

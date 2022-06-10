import React, { Component } from 'react'
import '../styles/profCard.css'
export default class profCard extends Component {
clickHandler(){
    const x= document.getElementsByClassName('profImg');
    x.style='transition: transform ease-out 0.5s;transform: scale(1.2);';
}
  render() {
    return (
      <div className="profCard" onClick={this.clickHandler}>
          <img className='profImg' src={this.props.img}/>
          <div className="font-Archivo text-[1rem] font-semibold text-[#ffffff]">
             {this.props.name}
          </div>
      </div>
    )
  }
}

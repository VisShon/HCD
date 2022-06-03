import React, { Component } from 'react'
import '../styles/research.css';
import Panel from '../components/researchPanel';
import Body from '../components/researchbody';

import di from '../assets/di.png'
import robo from '../assets/robo.png';

import vr from '../assets/vr.png';
import weave from '../assets/weave.png'

import midas from '../assets/midas.png';
import hands from '../assets/hands.png'

import living from '../assets/living.png';
import hci from '../assets/hci.png'

const arr = ['panel1','panel2','panel3','panel4']

function clicked(id){
    console.log('clicked')
    var panel = document.getElementById(id);
    var body = document.getElementById('contentSpace');
    for(var i = 0; i < arr.length; i++){
        if(arr[i]!== id){
            const hide = document.getElementById(arr[i]);
            hide.hidden = true;
        }
    }
    const x = document.getElementById('backBtn');
    x.hidden = false;
}

function back(){
    window.location.reload(false);
}
function Research(){

    return (
        <>
            <button type="button" id='backBtn' hidden="true" onClick={()=>back()}>X</button>
            <div className="panelBody">
                <div id = 'panel1' onClick={()=>clicked('panel1')}>
                    <Panel color='#39AEA8' logo={di} image={robo}/>
                </div>
                <div id='panel2' onClick={()=>clicked('panel2')}>
                    <Panel color='#F4B950' logo={weave} image={vr} />
                </div>
                <div id='panel3' onClick={()=>clicked('panel3')}>
                    <Panel color='#F28900' logo={midas} image={hands} />
                </div>
                <div id='panel4' onClick={()=>clicked('panel4')}>
                    <Panel color='#A4DAC3' logo={living} image={hci} />
                </div>
            </div>
            <Body title='Human - Machine Interaction Lab' color='#39AEA8' info='Dr. Jainendra Shukla, A - 413' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus sapien, ullamcorper vel lorem at, volutpat eleifend orci. Proin sagittis tristique euismod. ' link='https://hmi.iiitd.edu.in/'/>
        </>
    )
};

export default Research;
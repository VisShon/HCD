import React, { Component, useState } from 'react'
import '../styles/research.css';
import Panel from '../components/researchPanel';
import Body from '../components/researchbody';
import NavBar from '../components/navbar';
import backBtn from '../assets/bBtn.png'

import aid from '../assets/aid.png'
import aidImg from '../assets/aidImg.png';

import living from '../assets/living.png';
import hci from '../assets/hci.png'

import hmi from '../assets/hmi.png'
import hands from '../assets/hands.png'


import vr from '../assets/vr.png';
import weave from '../assets/weave.png'

import midas from '../assets/midas.png';
import midasImg from '../assets/midasImg.png';

import data from '../data/researchPageData.json';

const arr = ['1','2','3','4','5']



function back(){
    window.location.reload(false);
}


function Research(){
    const [panelID, setPanelID] = useState('0');
    
    function clicked(id){
        for(var i = 0; i < arr.length; i++){
            if(arr[i]!== id){
                const hide = document.getElementById(arr[i]);
                hide.style="transition: opacity 0.2s; opacity: 0;pointer-events: none;"
            }
        }
        setPanelID(id);
        var panel = document.getElementById(id);
        
        // var body = document.getElementById('body-section');
        panel.style='transition: transform ease-out 0.5s;transform: translateX(-'+(20*(parseInt(id)-1))+'vw);pointer-events: none;';
        // body.style="transform: translateX(0);"
        const x = document.getElementById('backBtn');
        const y = document.getElementById('title');
        x.hidden=false;
        y.hidden=true;
    }

    return (
        <>
            <NavBar/>
            <button type="button" id='backBtn' hidden="true" onClick={()=>back()} >
                <img src={backBtn}/>
            </button>
            <div className="panelBody">
                <div id = '1' onClick={()=>clicked('1')}>
                    <Panel color='#47638A' logo={aid} image={aidImg}/>
                </div> 
                <div id='2' onClick={()=>clicked('2')}>
                    <Panel color='#A4DAC3' logo={living} image={hci} />
                </div>
                <div id='3' onClick={()=>clicked('3')}>
                    <Panel color='#8AC5EE' logo={hmi} image={hands} />
                </div>
                <div id='4' onClick={()=>clicked('4')}>
                    <Panel color='#F4B950' logo={weave} image={vr} />
                </div>
                <div id='5' onClick={()=>clicked('5')}>
                    <Panel color='#F28900' logo={midas} image={midasImg} />
                </div>
                <Body data={parseInt(panelID)==0?null:data[parseInt(panelID)-1]}/>
            </div>
        </>
    )
};

export default Research;
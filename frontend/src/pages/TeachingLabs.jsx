import React, { Component, useState } from 'react'
import '../styles/research.css';
import NavBar from '../components/navbar';
import Panel from '../components/researchPanel';
import Body from '../components/researchbody';

import backBtn from '../assets/bBtn.png'
import data from '../data/teachingPageData.json';

import di from '../assets/di.png'
import robo from '../assets/robo.png'

import cdnm from '../assets/cdnm.png'
import cdnmImg from '../assets/cdnmImg.png'

const arr = ['1','2','3']

function back(){
    window.location.reload(false);
}

function TeachingLabs() {
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
        panel.style='transition: transform ease-out 0.5s;transform: translateX(-'+(20*(parseInt(id)-1) + 40)+'vw);pointer-events: none;';
        // body.style="transform: translateX(0);"

        const x = document.getElementById('backBtn');
        const y = document.getElementById('banner');
        x.hidden=false;
        y.style="transition: opacity ease-out 0.5s; opacity: 0"
    }

    return (
        <>
            <NavBar logo={true}/>
            <button type="button" id='backBtn' hidden="true" onClick={()=>back()} >
                <img src={backBtn}/>
            </button>
            <div className="panelBody  ">
                <div id="banner" className="font-Maven font-semibold text-[#39AEA8] text-[4vw] w-[40%] p-[5%] relative"> Teaching Labs
                    <p className='font-Maven text-[1.2vw] text-[#555555] mt-10'>
                        The purpose of Teaching Labs is to learn together about practice and develop shared, collaborative practices. In this spirit, all participants engage in the learning and planning. The lab is organized around the learning cycle.
                    </p>
                </div>
                <div id = '1' onClick={()=>clicked('1')}>
                    <Panel color='#39AEA8' logo={di} image={robo}/>
                </div> 
                <div id='2' onClick={()=>clicked('2')}>
                    <Panel color='#1799C2' logo={cdnm} image={cdnmImg} />
                </div>
                <div id='3' onClick={()=>clicked('3')}>
                    <Panel color='#A4DAC3' logo={cdnm} image={cdnmImg} />
                </div>
                <Body data={parseInt(panelID)==0?null:data[parseInt(panelID)-1]}/>
            </div>
        </>
    )
}

export default TeachingLabs
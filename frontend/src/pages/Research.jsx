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

function Research(){

    return (
        <>
            <div class='body'>
                <Panel color='#39AEA8' logo={di} image={robo}/>
                <Panel color='#F4B950' logo={weave} image={vr}/>
                <Panel color='#F28900' logo={midas} image={hands}/>
                <Panel color='#A4DAC3' logo={living} image={hci}/>
                {/* <Body/> */}
            </div>
        </>
    )
};

export default Research;
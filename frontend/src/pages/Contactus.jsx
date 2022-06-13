import React from 'react'
import NavBar from '../components/navbar'
import '../styles/contactUs.css'
import tweet from '../assets/tweet.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png'
import { Map, Marker } from "pigeon-maps"

function Contactus() {
  return (
    <>
        <NavBar logo={true} rel={true}/>
        <div id="topSection">
          <span id="heading" className='font-Archivo font-[200] text-[10vw]'>CONTACT US</span>
        </div>


        <div id="Content" className="font-Maven text-[#39AEA8] text-[1rem] ">
          <div className="h-[20vw] w-[20vw] rounded-[2rem] m-[1em] overflow-hidden">
            <Map  defaultCenter={[28.5459, 77.2732]} defaultZoom={14}>
              <Marker width={30} anchor={[28.5459, 77.2732]} />
            </Map>
          </div>

          <div id="Address" className="Card">
              <p><b>Address</b></p>
              <p className="text-[#414141]">Okhla Industrial Estate, Phase III, near Govind Puri Metro Station, New Delhi, Delhi 110020</p>
          </div>

          <div id="contacts" className="Card">
              <p><b>Contacts</b></p>
              <a className="text-[#414141]" href="mailto:admin-hcd@iiitd.ac.in">admin-hcd@iiitd.ac.in</a>
              <a className="text-[#414141]" href="tel:+91-11-26907588">+91-11-26907588</a>
              <p className="mt-4"><b>Socials</b></p>
              <span className='flex my-2 justify-between w-[40%]'>
                  <img  src={facebook}/>
                  <img  src={tweet}/>
                  <img  src={insta}/>
              </span>
          </div>
        </div>
    </>
  )
}

export default Contactus
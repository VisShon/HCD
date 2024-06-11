import "../../styles/bottomCard.css";
import {Link} from "react-router-dom";
import dropN from '../../assets/dropN.svg';

export default function BottomCard(props){
    return(
        <div id='bottomCard' className='card z-5 absolute right-0' >

        <div id='cardHead' className='font-Archivo text-[#424949]'>
            {props.cardContent.heading}
        </div>

        <div id='cardDesc' className='font-Maven'>
            {props.cardContent.description}
        </div>

        <Link id="subHeading" to='/Announcements'>

        <div id='cardCTA' className='flex flex-row'>
          <button id='cardBtn' onClick={() => {document.getElementsByClassName('newsSectionContainer')[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}}>
            <img src={dropN} width='25px'alt="No img"/>
          </button>
          <div className='mxAnnouncements -3 text-[18px] font-Maven'>
          <button id='' onClick={() => {document.getElementsByClassName('newsSectionContainer')[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}}>
            Read News

          </button>

          </div>
        </div>
        </Link>
        
      </div> 
    );
}
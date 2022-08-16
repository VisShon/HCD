import React,{useState} from 'react'
import studentIcon from '../../assets/studentIcon.png'

function StudentBlobs({name,details,bubbleSize}) {

  return (
    <div className="rounded-full border overflow-hidden h-[100%] flex flex-col relative text-center" >
        <img className="w-[100%] h-[100%]" src={studentIcon} />
        {bubbleSize>100&&
            <>
                <div className="absolute bottom-5 self-center w-[90%] z-[10] ">
                    <h1 className="font-[600] text-[0.75rem]">{name}</h1>
                    <span className="text-[0.5rem]">{details}</span>
                </div>
                <div className="absolute bottom-0 self-center bg-white/50 w-[100%] h-[4rem] z-[0] backdrop-blur-sm"></div>
            </>
        }
    </div>
  )
}

export default StudentBlobs
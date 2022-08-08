import React,{useState} from 'react'

function FacultyBlobs({image,name,education}) {
    const [isSelected,setIsSelected] = useState(false)

    const onMouseOver = () =>{
        setIsSelected(true);
    }
    const onMouseOut = () =>{
        setIsSelected(false);
    }

  return (
    <div className="rounded-full overflow-hidden w-[12rem] h-[12rem] flex flex-col relative text-center" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <img src={require("../../assets/profsImg/"+image)} className="w-[12rem] z-[0] "/>
        {isSelected&&<>
            <div className="absolute bottom-5 self-center w-[90%] z-[10] ">
                <h1 className="font-[600] text-[0.75rem]">{name}</h1>
                <span className="text-[0.5rem]">{education}</span>
            </div>
            <div className="absolute bottom-0 self-center bg-white/50 w-[100%] h-[4rem] z-[0] backdrop-blur-sm">
            </div>
        </>}
    </div>
  )
}

export default FacultyBlobs
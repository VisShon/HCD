import React ,{useEffect}from 'react'

function FacultyCard(data,iiitd) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="group text-center text-[#616161] mx-10  flex flex-col items-center">
      <a href={data.iiitd} target="_blank">
        <img className="relative" src={require("../../assets/profsImg/"+data.image)}/>
        <p className="font-[600] group-hover:text-[#39AEA8]">{data.name}</p>
        <p className="w-90 ">{data.description}</p>
        </a>

        <p className="w-90 flex items-center justify-center">
        <span className="material-symbols-outlined">school</span> 
        &nbsp;Google Scholar Profile
      </p>
    </div>
  )
}

export default FacultyCard
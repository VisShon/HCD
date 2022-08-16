import React from 'react'

function Button({Content, setFacultySelected, setFacultyData,Data}) {
    const selectButton=()=>{
      setFacultySelected(Content);
        let facutyList=Data.find(d=>d.title==Content).data;
        setFacultyData(facutyList);
        console.log(facutyList)
    }

  return (
    <button className={"yearButton"} onClick={selectButton}>
        {Content}
    </button>
  )
}

export default Button
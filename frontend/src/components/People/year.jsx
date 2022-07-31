import React from 'react'
import data from '../../data/studentPageData.json'
function Year({year, setYearSelected, setStudentsData}) {
    const selectYear=()=>{
        setYearSelected(year);
        let studentsList=data.find(d=>d.year==year).students;
        setStudentsData(studentsList);
        console.log(studentsList)
    }

  return (
    <button className={"yearButton"} onClick={selectYear}>
        {year}
    </button>
  )
}

export default Year
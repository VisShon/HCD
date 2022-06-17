import React from 'react'
import data from '../../data/studentPageData.json'
function Year({year, yearSelected, setYearSelected, setStudentsData}) {
    const selectYear=()=>{
        setYearSelected(year);
        let studentsList=data.find(d=>d.year==yearSelected).students;
        setStudentsData(studentsList);
    }

  return (
    <button className={"yearButton"} onClick={selectYear}>
        {year}
    </button>
  )
}

export default Year
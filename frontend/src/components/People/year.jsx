import React from 'react'
import data from '../../data/studentPageData.json'
function Year(year, yearSelected, setYearSelected, setStudentsData) {
    // const selectYear=()=>{
    //     setYearSelected(year);
    //     let studentsList=[];
    //     data.find(d=>{
    //         if(d.year.startsWith(yearSelected)){
    //             studentsList=(d.students)
    //         }
    //     })
    //     setStudentsData(studentsList);
    // }

  return (
    <button className={"yearButton"}>
        {year}
    </button>
  )
}

export default Year
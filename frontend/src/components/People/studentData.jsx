import React from 'react'
import studentIcon from '../../assets/studentIcon.png'
import '../../styles/students.css'
function StudentData({student}) {
  return (
    <div className="flex mb-10">
        <img src={studentIcon} className="mx-5 h-[5rem] "/>
        <div id="studentInfo">
            <span><b>{student.name}</b></span>
            <span>{student.email}</span>
            <span>{student.rollno}</span>
        </div>
    </div>
  )
}
export default StudentData
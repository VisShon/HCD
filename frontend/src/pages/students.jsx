import React, {useState }from 'react'
import NavBar from '../components/navbar'
import '../styles/students.css'
import data from '../data/studentPageData.json'
import Year from '../components/People/year'
import StudentBlobs from '../components/People/StudentBlobs'
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

function Students() {

  const[yearSelected,setYearSelected]= useState("2021");
  const[studentData, setStudentData]= useState(data.find(d=>d.year==yearSelected).students);

  const options = {
		size: 156,
		minSize: 25,
		gutter: 17,
		provideProps: true,
		numCols: 6,
		fringeWidth: 170,
		yRadius: 144,
		xRadius: 220,
		cornerRadius: 114,
		showGuides: false,
		compact: false,
		gravitation: 2
	}


  return (
    <>
      <NavBar logo={true} bg={false}/>
      <div id="topSection">    
            <span id="heading" className='font-Archivo font-[200] text-[10vw]'>STUDENTS</span>
      </div>
      <div className="studentBody">
        <div className="scrollContainer">
          {data.map((items,index)=>(<Year year={items.year} setYearSelected={setYearSelected} setStudentsData={setStudentData} key={index}/>))}
        </div>
          {/* <div className="studentsContainer">
            <p className="font-Archivo text-center w-[100%] mb-10 text-[2rem]"><b>Btech {yearSelected}</b></p>
            
        </div> */}
        <BubbleUI options={options} className="myBubbleUI">
              {studentData.map((items,index)=>(<StudentBlobs className="child" name={items.name} details={items.rollno + ' ' + items.email} key={index}/>))}
        </BubbleUI>
      </div>
    </>
  )
}

export default Students
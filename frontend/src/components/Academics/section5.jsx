import { useState } from "react";
import Course from "./course";
import Subject from "./subject";
export default function Section5({data}){
    const [sub, setSub] = useState(data.subjects);
    const [courses, setCourses] = useState(data.courseList);
    return(
        <>
            <div className="section5Container">
                <div className="subjects">
                    {
                        data.subjects.map((subj) => (
                                <Subject subjCode={subj.code} subjName={subj.text} selectedSub={sub} setSelectedSub={setSub} courses={data.courseList} setCourses={setCourses}/>
                            )
                        )
                    }
                </div>
                <div className="courses">
                    {
                        courses.map((course) => {
                            return(
                                <Course data={course} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
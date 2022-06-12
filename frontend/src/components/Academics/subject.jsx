export default function Subject({subjCode, subjName, selectedSub, setSelectedSub, courses, setCourses}){
    function selectSubject(){
        setSelectedSub(subjCode);

        let CL = [];
        courses.forEach(c => {
            if(c.code.startsWith(subjCode)){
                // console.log("str:",subjCode)
                // console.log("course:",c.code)
                CL.push(c);
            }
        });
        console.log("new course list: ",CL);
        setCourses(CL);
    }
    return(
        <>
            <button className={(selectedSub==subjCode)?("selectedSubject"):("") +" subject"} onClick={selectSubject}>
                {subjName}
            </button>
        </>
    );
}
export default function Course({data}){
    return(
        <>
            <div className="course">
                <h1>{data.name}</h1>
                <h2>{data.code}</h2>
                <p>{data.description}</p>
            </div>
        </>
    );
}
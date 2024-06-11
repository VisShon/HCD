import React from 'react';

function projDescp({ data, index }) {
    return (
        <>
            <div className='projectContainer'>
                <span className='projectInfo'>
                    {data.title !== "NA" && (
                        <div className='projectTitle'>
                            <b>Title: </b>{data.title}
                        </div>
                    )}
                    {data.prof !== "NA" && (
                        <div className='projectTitle'>
                            <b>Featured: </b>{data.prof}
                        </div>
                    )}
                    {data.link !== "NA" && (
                        <div className='projectFunding'>
                            <a href={data.link} target='_blank'><b>Link:</b> {data.link}</a>
                        </div>
                    )}
                    {data.year !== "NA" && (
                        <div className='projectDuration'>
                            <b>At: </b>{data.year}
                        </div>
                    )}
                    {data.description !== "NA" && (
                        <div className='projectDescription'>
                            <b>Description: </b>{data.description}
                        </div>
                    )}
                </span>
            </div>
        </>
    );
}

export default projDescp;

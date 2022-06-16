import React from 'react'

function projDescp({data, index, }) {
	return(
		<>
			<div className='projectContainer'>
				<span className='projectIndex'>
					{index+1}
				</span>
				<span className='projectInfo'>
					<div className='projectTitle'>
						<b>Project Title: </b>{data.title}
					</div>
					<div className='projectFunding'>
						<b>Project Funding: </b>{data.fundedBy}
					</div>
					<div className='projectDuration'>
						<b>Duration: </b>{data.year}
					</div>
					<div className='projectDescription'>
						<b>Project Description: </b>{data.description}
					</div>
				</span>
			</div>
		</>
	);
}

export default projDescp;
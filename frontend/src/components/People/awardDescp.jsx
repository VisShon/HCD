// import React from 'react'

// function projDescp({data, index, }) {
// 	return(
// 		<>
// 			<div className='projectContainer'>
// 				<span className='projectInfo'>
// 				<div className='projectTitle'>
// 						<b>Faculty Name: </b>{data.prof}
// 					</div>
// 					<div className='projectTitle'>
// 						<b>Project Title: </b>{data.title}
// 					</div>
// 					<div className='projectFunding'>
// 						<b>Project Funding: </b>{data.fundedBy}
// 					</div>
// 					<div className='projectDuration'>
// 						<b>Duration: </b>{data.year}
// 					</div>
// 					<div className='projectDescription'>
// 						<b>Project Description: </b>{data.description}
// 					</div>
// 				</span>
// 			</div>
// 		</>
// 	);
// }

// export default projDescp;

import React from 'react'

function projDescp({data, index, }) {
	return(
		<>
			<div className='projectContainer'>
				<span className='projectInfo'>
					<div className='awardTitle'>
						<b>Award Title: </b>{data.title}
					</div>
					<div className='awardedTo'>
						<b>awarded to </b>{data.awarded}
					</div>
					<div className='profName'>
						<b>Faculty Name: </b>{data.prof}
					</div>
					{/* <div className='projectDuration'>
						<b>Duration: </b>{data.year}
					</div>
					<div className='projectDescription'>
						<b>Project Description: </b>{data.description}
					</div> */}
				</span>
			</div>
		</>
	);
}

export default projDescp;
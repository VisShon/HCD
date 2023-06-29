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
				</span>
			</div>
		</>
	);
}

export default projDescp;
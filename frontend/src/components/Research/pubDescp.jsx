import React from 'react'

export default function PubDescp({data, index, }) {
	return(
		<>
			<div className='projectContainer'>
				<span className='projectIndex'>
					{index+1}
				</span>
				<span className='projectInfo'>
					<div className='pubTitle'>
						<b>Title: </b>{data.title}
					</div>
					<div>
						<b>DOI: </b><a href={data.DOI} className='pubDOI'>{data.DOI}</a>
					</div>
					<div className='pubAbstract'>
						<b>Abstract: </b>{data.abstract}
					</div>
				</span>
			</div>
		</>
	);
}
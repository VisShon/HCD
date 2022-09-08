import React from 'react'

export default function phdDesc({data, index, }) {
	return(
		<>
			<div className='phdContainer'>
				<span className='projectInfo'>
					<div className='pubTitle'>
						<b>Name: </b>{data.title}
					</div>
					<div className='pubAbstract'>
						<b>Specialization: </b>{data.abstract}
					</div>
					<div>
						<b>Supervisor: </b>{data.Supervisor}
					</div>
					<div>
						<b>Research Areas: </b>{data.ResearchAreas}
					</div>
					<div>
						<b>Thesis: </b>{data.Thesis}
					</div>
					<div>
						<b>Linkedin: </b><a href={data.DOI} className='pubDOI'>{data.DOI}</a>
					</div>
				</span>
			</div>
		</>
	);
}
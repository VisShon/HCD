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

  // return (
  //   <div className="flex">
  //       <p className="font-Maven font-semibold text-[#39AEA8] text-[5vw]">1</p>
  //       <div>
  //           <p className='font-Archivo m-5 text-[#454545]'><b>Title</b>: Akash Chaudhary, Manshul Belani, Naman Maheshwari, and Aman Parnami. 2021. Verbose: Designing a Context-based Educational System for Improving Communicative Expressions. In Proceedings of the 23rd International Conference on Mobile Human-Computer Interaction (MobileHCI '21). Association for Computing Machinery, New York, NY, USA, Article 41, 1–13.</p>
  //           <p className='font-Archivo m-5 text-[#454545]'><b>DOI</b>: https://doi.org/10.1145/3447526.3472057</p>
  //           <p className='font-Archivo m-5 text-[#454545]'><b>Abstract</b>: ESL (English as a second language) speakers tend to follow the tone structure of their first language, making their speech difficult to understand for native speakers, thereby limiting their opportunities for education and employment. To address this problem, we build an interactive smartphone-based educational mobile application using the user-centered design process. This application teaches English intonations based on globally consistent pitch patterns through conversations with a trained chat assistant, which inculcates expert linguists’ teaching principles. After co-designing the application’s parameters with primary stakeholders and expert visual designers, we assess its effectiveness by measuring the pre and post-performance of the users after the system usage, using various quantitative measures, like intonation scores, SEQ, and SUS. Feedback from users suggests that ESL speakers find significant improvement in the perception of their vocal expressions, thereby highlighting the necessity of such a system in improving the quality of conversations that people have in general.</p>
  //       </div>
  //   </div>
  // )
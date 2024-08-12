import React from 'react'
import NavBar from '../components/navbar';
import Carousel from '../components/Events/eventsCarousel';
import Footer from '../components/footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Events Images Import
import img1 from '../assets/events/event_1.png';
import img2 from '../assets/events/event_2.png';
import img3 from '../assets/events/event_3.png';
import img4 from '../assets/events/event_4.png';
import img5 from '../assets/events/event_5.png';
import img6 from '../assets/events/event_6.png';
import img7 from '../assets/events/event_7.png';
import img8 from '../assets/events/event_8.jpg';
import img9 from '../assets/events/event_9.jpg';
import img10 from '../assets/events/event_10.jpg';
import img11 from '../assets/events/event_11.jpg';
import img12 from '../assets/events/event_12.jpg';
import img13 from '../assets/events/event_13.jpg';
import img14 from '../assets/events/event_14.jpg';
import img15 from '../assets/events/event_15.jpg';
import img16 from '../assets/events/event_16.png';
import img17 from '../assets/events/event_17.jpg';
import img18 from '../assets/events/event_18.jpg';
import img19 from '../assets/events/event_19.jpg';
import img20 from '../assets/events/event_20.jpg';
import img21 from '../assets/events/event_21.jpg';
import img22 from '../assets/events/event_22.jpg';
import img23 from '../assets/events/event_23.png';
import img24 from '../assets/events/event_24.jpg';
import img25 from '../assets/events/event_25.jpg';
import img26 from '../assets/events/event_26.jpg';
import img27 from '../assets/events/event_27.jpg';
import img28 from '../assets/events/event_28.jpg';
import img29 from '../assets/events/event_29.jpg';
import img30 from '../assets/events/event_30.jpg';
import img31 from '../assets/events/event_31.jpg';
import img32 from '../assets/events/event_32.jpg';
import img33 from '../assets/events/event_33.jpg';
import img34 from '../assets/events/event_34.jpg';
import img35 from '../assets/events/event_35.png';
import img36 from '../assets/events/event_36.jpg';
import img37 from '../assets/events/event_37.jpg';
import img38 from '../assets/events/event_38.jpg';
import img39 from '../assets/events/event_39.jpg';
import img40 from '../assets/events/event_40.jpg';
import img41 from '../assets/events/event_41.jpg';
import img42 from '../assets/events/event_42.jpg';
import img43 from '../assets/events/event_43.jpg';
import img44 from '../assets/events/event_44.jpg';
import img45 from '../assets/events/event_45.png';
import img46 from '../assets/events/event_46.jpg';
import img47 from '../assets/events/event_47.jpg';
import img48 from '../assets/events/event_48.jpg';
import img49 from '../assets/events/event_49.jpg';
import img50 from '../assets/events/event_50.png';
import img51 from '../assets/events/event_51.png';
import img52 from '../assets/events/event_52.jpg';
import img53 from '../assets/events/event_53.jpg';
import img54 from '../assets/events/event_54.jpg';
import img55 from '../assets/events/event_55.jpg';
import img56 from '../assets/events/event_56.jpg';
import img57 from '../assets/events/event_57.jpg';
import img58 from '../assets/events/event_58.jpg';
import img59 from '../assets/events/event_59.jpg';
import img60 from '../assets/events/event_60.jpg';
import img61 from '../assets/events/event_61.png';
import img62 from '../assets/events/event_62.jpg';
import img63 from '../assets/events/event_63.jpg';
import img64 from '../assets/events/event_64.jpg';
import img65 from '../assets/events/event_65.jpg';

function Events_24() {

    const data = [
        {
            title: '1-Pixel Design Conference - Second Edition',
            date: '6-7 January 2024',
            details: `The 1-Pixel Design Conference of 2024 stands as a landmark event in the realm of design, where visionaries, industry leaders, and enthusiasts converged for a two-day extravaganza of unparalleled insights, innovation, and collaborative energy. Orchestrated by the dynamic collaboration between the Department of Human-Centered Design, TCS's Center of Design and New Media, Ihub, and HCI Foundation, IIT Mandi, the conference not only showcased the latest trends in design but also fostered a vibrant platform for knowledge exchange and networking. \n
            Complementing the insightful speaker sessions, two workshops unfolded, one on each day, offering participants hands-on engagement. The sustainability-themed sculpting workshop and the product ideation workshop added practical dimensions to the conference, fostering creativity and skill development among attendees.\n\n <b>Guest Speakers:</b> The event witnessed an impressive assembly of 16 speakers, each a luminary in their respective domains. Industry giants like Microsoft's Yogesh Gurera, Amazon's Anudeep Ayyagari, and TCS's Bhaskarjyoti Das shared their invaluable insights into the ever-evolving landscape of design and technology. The presence of renowned design studios, most notably IDEO represented by Savannah Kunovsky, added a layer of depth to the discussions. Startup unicorns PayTM with Kushagra Tripathi and Cred with Atul Khola brought forth their unique design perspectives. The academic community was well-represented by luminaries from IIT Delhi (Charu Monga and Subir Dey) and IIIT Delhi (Richa Gupta and Anmol Srivastava). The event also showcased emerging startups such as Spur from Mission Startab fame, Sustainable Ceramics Studio - Earth Tatva, and the Design-to-Code startup Dualite. A standout moment was the "Runway to Startup" session by IHub and HCI Foundation IIT Mandi, featuring a compelling talk by CEO Somjit Amrit.\n`,
            images: [
                img1, 
                img2, 
                img3, 
                img4, 
                img5, 
                img6
            ],
        },
        {
            title: 'Wearable devices using Machine Learning – Challenges and Opportunities for Building Explainable And Attack Averse Systems',
            date: 'June 12th, 2023',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Prof. Vir V. Phoha (Professor, Syracuse University)\n Prof. Vir V. Phoha received a Ph.D. degree in computer science from Texas Tech University, Lubbock, USA in 1992. He is currently a Professor of Electrical Engineering and Computer Science in the College of Engineering and Computer Science at Syracuse University, New York, USA.  His research interests include human interaction with mobile devices; machine learning; spatial-temporal pattern detection and event recognition; attack-averse authentication, optimized attack formulation; anomaly detection, and knowledge discovery and analysis.  Professor Phoha holds fourteen patents and has over 250 publications including six books.  He serves as an associate editor of IEEE Transactions on Social Computational Networks and an associate editor of ACM DTRAP. Professor Phoha is a Fellow of IEEE; AAAS; NAI; and SDPS. He is also an ACM Distinguished Scientist.\n",
            images: [
                img7
            ],
        },
        {
            title: 'Policy and challenges around learning disabilities',
            date: '28th Aug 2023',
            details: "<b>Organizing Team:</b> Dr. Richa Gupta, Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> ChangeInkk Team\n",
            images: [],
        },
        {
            title: 'I-wayplus - Automated Indoor Navigation Initiative for persoons with Blindness',
            date: '11th Sep 2023 ',
            details: "<b>Organizing Team:</b> Dr. Richa Gupta, Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Dr. Vikas Upadhayay (IIT Delhi / Iwayplus) and Pulkit Sapra (IIT Delhi / Raised lines foundation) Work and challenges around education resources and automated indoor navigation systems for persons with blindness.\n",
            images: [
                img8,
                img9
            ],
        },
        {
            title: 'Accessible Travel',
            date: '20th Sep 2023',
            details: "<b>Organizing Team:</b> Dr. Richa Gupta, Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Mr. Prashant Ranjan Verma (DAISY Consortium and General Secretary, National Association for the Blind, INDIA) - Solutions and challenges around accessible travel for persons with blindness.\n",
            images: [
                img10
            ],
        },
        {
            title: 'To interact with PhD students on their problem statement',
            date: '5 January 2024',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Varun Mishra is an assistant professor at Northeastern University, holding a joint appointment with the Khoury College of Computer Sciences and the Bouvé College of Health Sciences.\n",
            images: [
                img11
            ],
        },
        {
            title: 'Understanding HCI Approaches for the Metaverse in Education Applications for the Global South',
            date: '29 August 2023',
            details: "<b>Organizing Team:</b> The Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b>  Prof. Pradeep Yammiyavar, IIT Dharwad;  Mr. Pankaj Badoni, Dr. Anmol Srivastava\n",
            images: [
                img12,
                img13
            ],
        },
        {
            title: 'Impact of Artificial Intelligence in semiconductor industry',
            date: 'September 2023',
            details: "<b>Organizing Team:</b> Dr. Vinish, Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b>  Anku Jain, MD Mediatek\n",
            images: [],
        },
        {
            title: 'Artificial Intelligence in Industrail sector',
            date: 'October 2023',
            details: "<b>Organizing Team:</b> Dr. Vinish, Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Puneet Wadhwa, Head IT & Digital Development\n",
            images: [
                img14,
                img15
            ],
        },
        {
            title: 'Generative Artificial Intelligence : Human Centered View',
            date: 'January 2024',
            details: "<b>Organizing Team:</b> Dr. Vinish, Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b>  Dr. Rajeev Chabra, Scientist, Procter & Gamble\n",
            images: [],
        },
        {
            title: 'Integrating UI / UX in your design strategy',
            date: 'February 2024',
            details: "<b>Organizing Team:</b> Dr. Vinish, Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Stuti Kalra, Designer\n",
            images: [
                img16
            ],
        },
        {
            title: 'Defiance, Disobedience, Revolution - The students have prepared various interactive art installations and various contraptions.',
            date: '11th May 2023',
            details: "<b>Organised by:</b> Dr. Anmol Srivastava\n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> External guests Mr. Avnish P. Gautam (Director UX, Tata 1mg) and Dr. Indrani De Parker (Former Visiting Faculty IIITD) were invited to access students’ work and provide feedback. The exhibit was also an opportunity to showcase core strengths of HCD for further collaborations with Industry and academia.\n",
            images: [
                img17,
                img18,
                img19,
                img20
            ],
        },
        {
            title: 'Understanding HCI Approaches for the Metaverse in Education Applications for the Global South',
            date: '29th August 2023',
            details: "<b>Organised by:</b>  Dr. Anmol Srivastava\n\n <b>Venue:</b> Interact 2023, UK (Online)\n\n <b>Keynote Speaker(s):</b> Dr. Pradeep Yammiyavar, Mr. Pankaj Badoni, Dr. Anmol Srivastava\n\n Dr. Pradeep Yammiyavar: Emeritus Professor at IITG & IISc for 39+ years, specializing in Creative Design, Innovation & Technology. Established India's first HCI Design Research activity. Founded UX-UE-UI stream in IITG's B.Des program. Pioneered Ph.D. program in Design. Co-founder of IISc's acclaimed CPDM M.Des program. Advisor to Patents office, IT, & Design industries. Mentor to Forbes-listed startups. Recognized with National Teaching Innovation Award. Fellow of Design Research Society-UK. Published 140+ research works, holds 9 IPRs, supervised 100+ postgraduates & PhDs. Trained as Psychologist, active in counseling & mentoring. Expertise: Product Design, UX/UI, HCI, Design Thinking, Mental Health. Currently a Visiting Professor at IIT Dharwad.\n\n Mr. Pankaj Badoni: Experienced Assistant Professor (Selection Grade) with 9 years at UPES, holding a PhD in Interaction Design. Accomplished in Game Design, AR/VR, Computer Graphics, and Cognitive Science. Recognized for board game innovations, awarded Best Teacher in 2020.\n",
            images: [],
        },
        {
            title: 'Open house Discussion ',
            date: '01st September 2023',
            details: "",
            images: [
                img21,
                img22
            ],
        },
        {
            title: "Unleashing Creativity: Design360 x 1Pixel's Designathon Draws Attention (Esya Fest)",
            date: '25th & 26th August, 2023',
            details: "<b>Organised by:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Outcome of the hackathon:</b> In a spectacular showcase of creativity and innovation, the Designathon event, a collaborative effort by Design360 and 1Pixel, left a lasting impression as it brought together more than 220 talented individuals. The event, which took place on the 25th and 26th of August, featured 129 participants who physically joined the gathering, and it achieved an extraordinary outreach of over 20,000 impressions on Unstop, emphasizing its remarkable impact.\n",
            images: [
                img23,
                img24,
                img25,
                img26
            ],
        },
        {
            title: 'Second National Artists Workshop',
            date: '15th to 17th September 2023',
            details: "<b>Organised by:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> 8-renowned artists across the nation.\n",
            images: [
                img27,
                img28,
                img29
            ],
        },
        {
            title: 'Workshop on Typography - Psychology and Techniques',
            date: '24th to 27th of April 2023',
            details: "<b>Organised by:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> Karambir Singh Rohilla, Type Design Professional.\n",
            images: [
                img30
            ],
        },
        {
            title: 'From Contextual Search to Data Storytelling: Building Semantic Competence Using Multiple AI Substrates by Prof. Larry Birnbaum',
            date: '11th August 2023',
            details: "<b>Organised by:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> Larry Birnbaum is Professor of Computer Science at Northwestern University, with a research focus on applied AI and human-AI collaboration.  He and his students develop, study, and apply new technologies in natural language processing (NLP), conversational interfaces, intelligent information systems, social media data analytics, machine learning, computational journalism and media, and automatic content generation. Together with colleagues and students, Larry has published more than 150 papers on these topics, and holds 66 U.S. patents.\n",
            images: [
                img31,
                img32,
                img33,
                img34,
                img35
            ],
        },
        {
            title: '1Pixel Design  Conference',
            date: '6th and 7th of January 2024',
            details: "<b>Organised by:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> Dr. Charu Monga, Mr. Somjit Amrit, Mr. Yogesh Gurera\n",
            images: [],
        },
        {
            title: '3-day Artist Camp - Second National Painting Workshop',
            date: '15th -17th September 2024',
            details: "<b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> 8 artists across India. Eminent Painter and writer Shri Ashok Bhowmick and a Famous TV Anchor from Rajya Sabha Shri Syed Mohd Irfan Were invited for the inauguration and concluding ceremonies respectively.\n",
            images: [
                img36,
                img37
            ],
        },
        {
            title: 'Previz of virtual production in Unreal Engine',
            date: '27th and 29th November 2023',
            details: "<b>Organised by:</b> Mr Anoop Ratn \n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> Santosh Gopal Shetty\n",
            images: [
                img38
            ],
        },
        {
            title: 'Print-making workshop',
            date: '12th-13th March 2024',
            details: "<b>Organised by:</b> Dr Anoop Ratn \n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> Pavan Kumar D\n",
            images: [
                img39,
                img40
            ],
        },
        {
            title: 'Workshop on clay-modeling',
            date: '30th-31st March 2024',
            details: "<b>Organised by</b>: Dr Anoop Ratn\n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> Mahendra Pratap Dinkar\n",
            images: [
                img41,
                img42
            ],
        },
        {
            title: 'Workshop on Photography',
            date: '04 March 2024',
            details: "<b>Organised by:</b> Dr Aman Samuel \n\n <b>Venue:</b> IIIT-Delhi\n\n <b>Keynote Speaker(s):</b> Mr.Sameer Ashraf from Sony India\n",
            images: [
                img43,
                img44,
                img45
            ],
        },
        {
            title: 'Past Failure and the Promising Future of Human-Centered Design',
            date: '10 November 2023',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Prof. Patrick Whitney, led the Institute of Design at the Illinois Institute of Technology from  1984 to 2016.  While there, he led the formation of the world's first masters and PhD programs in human-centered design and in strategic design. His research is supported by numerous companies and foundations, including Gates and MacArthur foundations. He has advised executives from many companies including P&G, Steelcase, Godrej and government officials from the UK, USA, Japan. Five years ago he moved to the Harvard TH Chan School of Public Health and in September of 2023 moved to the School of Public Health at Brown University.\n",
            images: [
                img46,
                img47
            ],
        },
        {
            title: 'Digital Fabrication Technologies for Sustainable Construction',
            date: '03 November 2023',
            details: `<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Dr. Biranchi Panda (<a href="https://iitg.ac.in/mech/faculty/pandabiranchi/" target="_blank" rel="noopener noreferrer">Profile</a>)\n`,
            images: [
                img48
            ],
        },
        {
            title: 'SecureCSuite: Secure Computation over Untrusted Cloud Servers',
            date: '25 October 2023',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Pradeep K. Atrey, University at Albany, State University of New York, USA\n",
            images: [
                img49
            ],
        },
        {
            title: 'Direct Digital Product Design with Additive Manufacturing in the era of Industry 4.0',
            date: '17 November 2023',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Dr. Ajeet Kumar, PhD\n",
            images: [],
        },
        {
            title: 'LLMs for Everybody: How inclusive are the LLMs today and Why should we care?',
            date: '24 January 2024',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Monojit Choudhury is a professor of Natural Language Processing at Mohd bin Zayed University of Artificial Intelligence (MBZUAI), Abu Dhabi. Prior to this, he was a principal scientist at Microsoft Research Lab and Microsoft Turing, India. He is also a professor of practice at Plaksha University, and an adjunct professor at IIIT Hyderabad.\n",
            images: [
                img50,
                img51
            ],
        },
        {
            title: 'Heterogenous Benchmarking across Domains and Languages: The Key to Enable Meaningful Progress in IR Research',
            date: '24 January 2024',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Nandan Thakur is a third-year PhD student in the David R. Cheriton School of Computer Science at University of Waterloo under the supervision of Prof. Jimmy Lin. His research broadly investigates data efficiency and model generalization across specialized domains and languages in information retrieval. He was the co-organizer of the MIRACL competition in WSDM 2023 and will co-organize the upcoming RAG Track in TREC 2024. His work has been published in top conferences and journals, including ACL, NAACL, NeurIPS, SIGIR and TACL.\n",
            images: [
                img52,
                img53,
                img54
            ],
        },
        {
            title: 'Generative AI : Human Centered View',
            date: '27 January 2024',
            details: `<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Dr. Rajeev Chabra (<a href="http://linkedin.com/in/rchhabra" target="_blank" rel="noopener noreferrer">Profile</a>) spearheads multiple Generative AI initiatives with P&G in the USA and will bring out the consumer view of Generative AI.\n`,
            images: [
                img55
            ],
        },
        {
            title: 'Hosted BCA students',
            date: '29 January 2024',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> The final year batch of Bachelor of Computer Application (BCA) accompanied by Dr. Daphna Chacko (Assistant Professor and HoD, PG Department of Computer Science, KBM Government College Thalassery on January 29, 2024.\n",
            images: [
                img56
            ],
        },
        {
            title: 'Visit the National Gallery Of Modern Art ',
            date: '30 January 2024',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Details:</b> The students of DDV course visit the National Gallery Of Modern Art to apply theory into practice.\n",
            images: [
                img57,
                img58
            ],
        },
        {
            title: 'Visit to Museo Camera',
            date: '14 February 2024',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Details:</b> VDC course students visit the Museo Camera, Gurgaon.\n",
            images: [
                img59,
                img60
            ],
        },
        {
            title: 'Hands-On Workshop on  Envision AR - Design and Development of Augmented Reality applications.',
            date: '20-21 January 2024',
            details: "<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Workshop details:</b> \nIdea 1: Adding different objects in the AR scene and seeing how they interact with each other; \nIdea 2: Shooting/Magic Spell/Fighting at an AI enemy mini-game.\n",
            images: [
                img61,
                img62,
                img63
            ],
        },
        {
            title: 'Research Opportunities at NII, Japan',
            date: '02 February 2024',
            details: `<b>Organizing Team:</b> Center for Design and New Media in collaboration with the Department of Human-Centered Design, IIIT-Delhi\n\n <b>Keynote Speaker:</b> Prof Emmanuel Planas is Deputy-Director for International Relations at the National Institute of Informatics, Tokyo (NII). NII is one of the top research institutes in Computer Sciences in Japan, and among the 100 best in the World. Please see CS Rankings (<a href="https://csrankings.org/#/index?all&worlda" target="_blank" rel="noopener noreferrer">Link</a>) and our ACM Portal production (<a href="https://dl.acm.org/institution/60028928" target="_blank" rel="noopener noreferrer">Link</a>).\n`,
            images: [
                img64,
                img65
            ],
        },
    ];

    return (
        <>
            <NavBar logo={true} rel={false} bg={false}/>
            <div id="topSection">    
                <span id="heading" className='font-Archivo font-[200] text-[8vw] small:w-[100%]'>2023-2024</span>
            </div>
            <Carousel />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h4" style={{ margin: '10px 0', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                    Events
                </Typography>
            </div>
            <div>
                {data.map((section, index) => (
                    <AccordionComponent
                        key={index}
                        title={section.title}
                        date={section.date}
                        details={section.details}
                        images={section.images}
                    />
                ))}
            </div>
            <Footer/>
        </>
    )
}

const AccordionComponent = ({ title, date, details, images }) => (
    <Accordion style={{ margin: '0 20px 10px 20px' }}>
        <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel-content"
            id="panel-header"
            style={{
                backgroundColor: '#39AEA8',
                borderBottom: '1px solid #ddd',
            }}
        >
            <Typography variant="subtitle1" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#333' }}>
                {title}
            </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#fafafa', padding: '16px', borderTop: '1px solid #ddd' }}>
            <div style={{ marginBottom: '10px' }}>
                <Typography variant="body2" style={{ fontFamily: 'Arial, sans-serif', color: '#888' }}>
                    {date}
                </Typography>
            </div>
            <Typography variant="body1" style={{ fontFamily: 'Arial, sans-serif', color: '#666', marginBottom: '10px', whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: details }}>
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {images.map((img, index) => (
                    <a key={index} href={img} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={`img-${index}`} style={{ width: '500px', height: '250px', objectFit: 'cover' }} />
                    </a>
                ))}
            </div>
        </AccordionDetails>
    </Accordion>
);

export default Events_24
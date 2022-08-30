import arrow from "../assets/academics/arrow.svg";
import NavBar from "../components/navbar";
import data from "../data/academicsPageData.json";
import "../styles/academics.css";
import Footer from '../components/footer';

const PageData = data.section7
export default function StudentConduct(){
    return(
        <>
            <NavBar logo={true} rel={true} bg={false}/>
            <div className="section7Container">
                <h1>
                    {PageData.heading}
                </h1>
                <div className="cardsContainer">
                    {
                        PageData.policies.map((policy) => {
                            return (
                                <a href={policy.link}>
                                    <button>
                                        <p>{policy.text}</p>
                                        <img src={arrow} />
                                    </button>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}
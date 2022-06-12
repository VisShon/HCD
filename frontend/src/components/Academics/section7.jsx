import arrow from "../../assets/academics/arrow.svg";

export default function Section7({data}){
    return(
        <>
            <div className="section7Container">
                <h1>
                    {data.heading}
                </h1>
                <div className="cardsContainer">
                    {
                        data.policies.map((policy) => {
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
        </>
    );
}
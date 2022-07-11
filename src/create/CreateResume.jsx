import { useState,useEffect,useRef } from 'react'
import FormForTheme from '../components/FormForTheme'
import { useLocation,useNavigate } from 'react-router-dom'
import PhoneImg from '../images/phone.webp'
import EmailImg from '../images/email.jpg'
import LocationImg from '../images/location.png'
import ProgressBar from '../components/progressBar/ProgressBar'
import './CreateResume.scss'

export default function CreateResume() {

    const location = useLocation()
    const navigate = useNavigate()

    //ThemeInformation
    const themeColor = location
        .search
        .split("=")[2]
    const themeName = location
        .search
        .split("=")[1]
        .split("&")[0]
        
    const [data,setData] = useState({})
    const [disabledChecker,setDisabledChecker] = useState(true)
    const [name,setName] = useState("")
    const [number,setNumber] = useState("")
    const [email,setEmail] = useState("")
    const [adress,setAdress] = useState("")
    const [summary,setSummary] = useState("")
    const [experience,setExperience] = useState("")
    const [skills,setSkills] = useState("")

    const arrayOfAllInputs = [name,number,email,adress,summary,experience,skills]

    const findOuFillInput = arrayOfAllInputs.filter(e => e.length > 0).length

    //Refs
    const themeRef = useRef()

    useEffect(()=> {
        findOuFillInput === 7 ? setDisabledChecker(false) : setDisabledChecker(true)
    }, [name,number,email,adress,summary,experience,skills])

    const navigateToExport = () => {
        navigate('/export', {state: {theme :themeRef}})
    }

    return (
        <div className="create-resume-container">
            <div className="create-resume-container-info-inputs">
                <FormForTheme 
                data={data}
                setData={setData} 
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber}
                email={email}
                setEmail={setEmail}
                adress={adress}
                setAdress={setAdress}
                summary={summary}
                setSummary={setSummary}
                experience={experience}
                setExperience={setExperience}
                skills={skills}
                setSkills={setSkills}
                />
                <button className={disabledChecker ? "disabled" : ""} onClick={navigateToExport} disabled={disabledChecker}>continue</button>
            </div>
            <div className='create-resume-container-template'>
                {themeName === "Angora"
                    ? <div className="angora-container">
                            <div className='angora-container-name'>
                                <h1
                                    style={{
                                    color: themeColor
                                }}>{localStorage.getItem("name") && localStorage.getItem("name") !== ""
                                        ? localStorage.getItem("name")
                                        : "Lorem Ipsum"}</h1>
                                <p>{localStorage.getItem("number") && localStorage.getItem("number") !== ""
                                        ? localStorage.getItem("number")
                                        : "Lorem ipsum dolor sit."}</p>
                                <p>{localStorage.getItem("email") && localStorage.getItem("email") !== ""
                                        ? localStorage.getItem("email")
                                        : "Lorem ipsum dolor sit."}.</p>
                                <p>{localStorage.getItem("adress") && localStorage.getItem("adress") !== ""
                                        ? localStorage.getItem("adress")
                                        : "Lorem ipsum dolor sit."}</p>
                            </div>
                            <div className='angora-container-summary'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Professional Summary</h2>
                                <p>{localStorage.getItem("summary") && localStorage.getItem("summary") !== ""
                                        ? localStorage.getItem("summary")
                                        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eaque error au" +
                                            "tem unde tenetur soluta quos eligendi ab distinctio in!"}</p>
                            </div>
                            <div className='angora-container-skills'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Skills</h2>
                                <p>{localStorage.getItem("skills") && localStorage.getItem("skills") !== ""
                                        ? localStorage.getItem("skills")
                                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, necessitatibus" +
                                            " aut! Debitis cupiditate molestias consequatur. Ducimus exercitationem, assumend" +
                                                "a et ab a velit quam, aperiam aliquam in nihil, vero minus est."}</p>
                            </div>
                            <div className='angora-container-experience'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Experience</h2>
                                <p>{localStorage.getItem("experience") && localStorage.getItem("experience") !== ""
                                        ? localStorage.getItem("experience")
                                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, necessitatibus" +
                                            " aut! Debitis cupiditate molestias consequatur. Ducimus exercitationem, assumend" +
                                                "a et ab a velit quam, aperiam aliquam in nihil, vero minus est."}</p>
                            </div>
                        </div>
                    : <div ref={themeRef} className="blueprint-container">
                        <div className='blueprint-container-badge'></div>
                        <h1
                            style={{
                            color: themeColor
                        }}>{localStorage.getItem("name") && localStorage.getItem("name") !== ""
                                ? localStorage.getItem("name")
                                : "Lorem Ipsum"}</h1>
                        <div className='blueprint-container-inner'>
                            <div className="blueprint-container-inner-left-side">
                                <div className="contact">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>CONTACT</span>
                                    <div>
                                        <img src={PhoneImg} alt="PhoneImg"/>
                                        <p>{localStorage.getItem("number") && localStorage.getItem("number") !== ""
                                                ? localStorage.getItem("number")
                                                : "543-219-876"}</p>
                                    </div>
                                    <div>
                                        <img src={EmailImg} alt="EmailImg"/>
                                        <p>{localStorage.getItem("email") && localStorage.getItem("email") !== ""
                                                ? localStorage.getItem("email")
                                                : "myemail@gmail.com"}</p>
                                    </div>
                                    <div>
                                        <img src={LocationImg} alt="LocationImg"/>
                                        <p>{localStorage.getItem("adress") && localStorage.getItem("adress") !== ""
                                                ? localStorage.getItem("adress")
                                                : "123 Main street,Geo"}</p>
                                    </div>
                                </div>
                                <div className="summary">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>SUMMARY</span>
                                    <p>{localStorage.getItem("summary") && localStorage.getItem("summary") !== ""
                                            ? localStorage.getItem("summary")
                                            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,architecto! A" +
                                                "liquam pariatur ullam alias quae?"}</p>
                                </div>
                                <div className="skills">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>SKILLS</span>
                                    <p>{localStorage.getItem("skills") && localStorage.getItem("skills") !== ""
                                            ? localStorage.getItem("skills")
                                            : "Lorem Ipsum"}</p>
                                </div>
                            </div>
                            <div className="blueprint-container-inner-right-side">
                                <span
                                    style={{
                                    color: themeColor
                                }}>EXPERIENCE</span>
                                <p>{localStorage.getItem("experience") && localStorage.getItem("experience") !== ""
                                        ? localStorage.getItem("experience")
                                        : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, est. Quos nem" +
                                            "o voluptate,aliquam sunt cum laborum quam totam,sequi iure expedita beatae ducim" +
                                                "us sint velit non consectetur quo officia debitis,voluptas assumenda cumque aper" +
                                                "iam.Magnam doloremque sapiente fuga laboriosam !"}</p>
                            </div>
                        </div>
                        <div className="arrow"></div>
                    </div>
                }
            </div>
            <ProgressBar findOuFillInput={findOuFillInput} />
        </div>
    )
}
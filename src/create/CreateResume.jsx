import { useState,useEffect } from 'react'
import FormForTheme from '../components/FormForTheme'
import { useLocation,useNavigate } from 'react-router-dom'
import PhoneImg from '../images/phone.webp'
import EmailImg from '../images/email.jpg'
import LocationImg from '../images/location.png'
import ProgressBar from '../components/progressBar/ProgressBar'
import useFetch from '../useFetch'
import { Spinner } from 'reactstrap'
import './CreateResume.scss'

export default function CreateResume() {

    const location = useLocation()
    const navigate = useNavigate()

    const [data,setData] = useState({})
    const [disabledChecker,setDisabledChecker] = useState(true)
    const [name,setName] = useState("")
    const [number,setNumber] = useState("")
    const [email,setEmail] = useState("")
    const [adress,setAdress] = useState("")
    const [summary,setSummary] = useState("")
    const [experience,setExperience] = useState("")
    const [skills,setSkills] = useState("")

    const themeColor = localStorage.getItem("color")
    const themeName = localStorage.getItem("theme")

    let parsedSavedJSON

    if(location.state !== null){
        parsedSavedJSON = JSON.parse(location.state.files)
    }

    const arrayOfAllInputs = [name,number,email,adress,summary,experience,skills]

    const findOuFillInput = arrayOfAllInputs.filter(e => e.length > 0).length

    useEffect(()=> {
        findOuFillInput === 7 ? setDisabledChecker(false) : setDisabledChecker(true)
    }, [findOuFillInput])


    const navigateToExport = () => {
        navigate('/export', {state: {themeColor,themeName}})
    }

    const { data: userdata,loading } = useFetch()

    return (
        <>
            {loading ? <Spinner id="spinner" color="primary">
              Loading...
            </Spinner>
            :
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
                parsedSavedJSON={parsedSavedJSON}
                />
                <button className={disabledChecker ? "disabled" : ""} onClick={navigateToExport} disabled={disabledChecker}>continue</button>
            </div>
            <div className='create-resume-container-template'>
                {themeName === "Angora"
                    ? <div className="angora-container">
                            <div className='angora-container-name'>
                                <h1
                                    style={{color:themeColor}}>
                                        {localStorage.getItem("name") && localStorage.getItem("name") !== ""
                                        ? localStorage.getItem("name")
                                        : userdata.name}</h1>
                                <p>{localStorage.getItem("number") && localStorage.getItem("number") !== ""
                                        ? localStorage.getItem("number")
                                        : userdata.phone}</p>
                                <p>{localStorage.getItem("email") && localStorage.getItem("email") !== ""
                                        ? localStorage.getItem("email")
                                        : userdata.email}.</p>
                                <p>{localStorage.getItem("adress") && localStorage.getItem("adress") !== ""
                                        ? localStorage.getItem("adress")
                                        : userdata.address}</p>
                            </div>
                            <div className='angora-container-summary'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Professional Summary</h2>
                                <p>{localStorage.getItem("summary") && localStorage.getItem("summary") !== ""
                                        ? localStorage.getItem("summary")
                                        : userdata.summary}</p>
                            </div>
                            <div className='angora-container-skills'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Skills</h2>
                                <p>{localStorage.getItem("skills") && localStorage.getItem("skills") !== ""
                                        ? localStorage.getItem("skills")
                                        : userdata.skills}</p>
                            </div>
                            <div className='angora-container-experience'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Experience</h2>
                                <p>{localStorage.getItem("experience") && localStorage.getItem("experience") !== ""
                                        ? localStorage.getItem("experience")
                                        : userdata.experience}</p>
                            </div>
                        </div>
                    : <div className="blueprint-container">
                        <div className='blueprint-container-badge'></div>
                        <h1
                            style={{
                            color: themeColor
                        }}>{localStorage.getItem("name") && localStorage.getItem("name") !== ""
                                ? localStorage.getItem("name")
                                : userdata.name}</h1>
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
                                                : userdata.phone}</p>
                                    </div>
                                    <div>
                                        <img src={EmailImg} alt="EmailImg"/>
                                        <p>{localStorage.getItem("email") && localStorage.getItem("email") !== ""
                                                ? localStorage.getItem("email")
                                                : userdata.email}</p>
                                    </div>
                                    <div>
                                        <img src={LocationImg} alt="LocationImg"/>
                                        <p>{localStorage.getItem("adress") && localStorage.getItem("adress") !== ""
                                                ? localStorage.getItem("adress")
                                                : userdata.address}</p>
                                    </div>
                                </div>
                                <div className="summary">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>SUMMARY</span>
                                    <p>{localStorage.getItem("summary") && localStorage.getItem("summary") !== ""
                                            ? localStorage.getItem("summary")
                                            : userdata.summary}</p>
                                </div>
                                <div className="skills">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>SKILLS</span>
                                    <p>{localStorage.getItem("skills") && localStorage.getItem("skills") !== ""
                                            ? localStorage.getItem("skills")
                                            : userdata.sills}</p>
                                </div>
                            </div>
                            <div className="blueprint-container-inner-right-side">
                                <span
                                    style={{
                                    color: themeColor
                                }}>EXPERIENCE</span>
                                <p>{localStorage.getItem("experience") && localStorage.getItem("experience") !== ""
                                        ? localStorage.getItem("experience")
                                        : userdata.experience}</p>
                            </div>
                        </div>
                        <div className="arrow"></div>
                    </div>
                }
            </div>
            <ProgressBar findOuFillInput={findOuFillInput} />
        </div>
            }
        </>
    )
}
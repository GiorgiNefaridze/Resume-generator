import { useState,useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Spinner } from 'reactstrap'

import FormForTheme from '../components/FormForTheme'
import PhoneImg from '../images/phone.webp'
import EmailImg from '../images/email.jpg'
import LocationImg from '../images/location.png'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import useFetch from '../hooks/useFetch'

import './CreateResume.scss'

    const getLocalStorageItems = (arr) => {
        return arr.map(item => localStorage.getItem(item))
    }
    
export default function CreateResume() {
    const [userName, phone, mail, address, smry, userExperience, userSkills] = getLocalStorageItems(['name', 'number', 'email', 'adress','summary', 'experience','skills'])

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
                                        {userName && userName !== "" ? userName : userdata.name}</h1>
                                <p>{phone && phone !== "" ? phone : userdata.phone}</p>
                                <p>{mail && mail !== "" ? mail: userdata.email}</p>
                                <p>{address && address !== "" ? address : userdata.address}</p>
                            </div>
                            <div className='angora-container-summary'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Professional Summary</h2>
                                <p>{smry && smry !== "" ? smry : userdata.summary}</p>
                            </div>
                            <div className='angora-container-skills'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Skills</h2>
                                <p>{userSkills && userSkills !== "" ? userSkills: userdata.skills}</p>
                            </div>
                            <div className='angora-container-experience'>
                                <h2
                                    style={{
                                    color: themeColor
                                }}>Experience</h2>
                                <p>{userExperience &&  userExperience !== "" ? userExperience: userdata.experience}</p>
                            </div>
                        </div>
                    : <div className="blueprint-container">
                        <div className='blueprint-container-badge'></div>
                        <h1
                            style={{
                            color: themeColor
                        }}>{userName && userName !== "" ? userName : userdata.name}</h1>
                        <div className='blueprint-container-inner'>
                            <div className="blueprint-container-inner-left-side">
                                <div className="contact">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>CONTACT</span>
                                    <div>
                                        <img src={PhoneImg} alt="PhoneImg"/>
                                        <p>{phone && phone !== "" ? phone : userdata.phone}</p>
                                    </div>
                                    <div>
                                        <img src={EmailImg} alt="EmailImg"/>
                                        <p>{mail && mail !== "" ? mail: userdata.email}</p>
                                    </div>
                                    <div>
                                        <img src={LocationImg} alt="LocationImg"/>
                                        <p>{address && address !== "" ? address : userdata.address}</p>
                                    </div>
                                </div>
                                <div className="summary">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>SUMMARY</span>
                                    <p>{smry && smry !== "" ? smry : userdata.summary}</p>
                                </div>
                                <div className="skills">
                                    <span
                                        style={{
                                        color: themeColor
                                    }}>SKILLS</span>
                                    <p>{userSkills && userSkills !== "" ? userSkills: userdata.skills}</p>
                                </div>
                            </div>
                            <div className="blueprint-container-inner-right-side">
                                <span
                                    style={{
                                    color: themeColor
                                }}>EXPERIENCE</span>
                                <p>{userExperience &&  userExperience !== "" ? userExperience: userdata.experience}</p>
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
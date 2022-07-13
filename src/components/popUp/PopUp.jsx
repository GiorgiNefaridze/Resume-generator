import { useEffect,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './PopUp.scss'

export default function PopUp({setPopUpCheck}) {

    const navigate = useNavigate()

    const popUpRef = useRef()
    const closeRef = useRef()

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })

    const handleClickOutside = (e) => {
        if(!popUpRef.current.contains(e.target) || e.target === closeRef.current){
            setPopUpCheck(false)
        }
    }

    const saveResume = () => {
        const resume = {
            date:new Date().toString(),
            name:localStorage.getItem("name"),
            email:localStorage.getItem("email"),
            number:localStorage.getItem("number"),
            adress:localStorage.getItem("adress"),
            summary:localStorage.getItem("summary"),
            skills:localStorage.getItem("skills"),
            experience:localStorage.getItem("experience"),
        }
        localStorage.clear();
        localStorage.setItem("resume",JSON.stringify(resume))
        navigate("/")
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        navigate("/")
    }

    return (
        <div className="pop-up">
            <div className="pop-up-inner" ref={popUpRef}>
                <div>
                    <h1>Do you want to save this resume?</h1>
                    <span ref={closeRef}>X</span>
                </div>
                <div>
                    <button onClick={saveResume}>YES</button>
                    <button onClick={clearLocalStorage}>NO</button>
                </div>
            </div>
        </div>
    )
}
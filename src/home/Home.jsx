import { useNavigate } from 'react-router-dom'
import './Home.scss'

export default function Home() {

    const navigate = useNavigate()

    const navigateToChooseTemplate = ()=> {
        navigate("/choose-template")
    }

    const navigateToImportResume = () => {
        navigate("/import-resume")
    }

    return (
        <div className="home-container">
            <div className='home-container-bg'></div>
            <div className="create-resume-btn home-btn" onClick={navigateToChooseTemplate}>Create a new resume</div>
            <span>or</span>
            <div className="edit-existing-resume-btn home-btn" onClick={navigateToImportResume}>Edit existing resume</div>
        </div>
    )
}
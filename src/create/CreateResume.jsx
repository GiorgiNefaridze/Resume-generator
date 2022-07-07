import FormForTheme from '../components/FormForTheme'
import { useLocation } from 'react-router-dom'
import './CreateResume.scss'

export default function CreateResume() {

    const location = useLocation()

    //ThemeInformation
    const colorOfTheme = location.search.split("=")[2]
    const themeName = location.search.split("=")[1].split("&")[0]

    return (
        <div className="create-resume-container">
            <FormForTheme />
        </div>
    )
}
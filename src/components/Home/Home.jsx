import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'

import './Home.scss'

export default function Home() {
    const navigate = useNavigate()

    const navigateToChooseTemplate = ()=> {
        navigate("/choose-template")
    }

    const navigateToImportResume = () => {
        navigate("/import-resume")
    }

    let parsedJSON
    if(localStorage.getItem("resume")){
        parsedJSON = JSON.parse(localStorage.getItem("resume"))
    }

    return (
        <div className="home-container">
            <div>
                <div className="create-resume-btn home-btn" onClick={navigateToChooseTemplate}>Create a new resume</div>
                <span>or</span>
                <div className="edit-existing-resume-btn home-btn" onClick={navigateToImportResume}>Edit existing resume</div>
            </div>
            <div className='home-container-table'>
                {localStorage.getItem("resume") ? 
                <>
                <Table hover>
                <thead>
                  <tr>
                    <th>
                      სახელი
                    </th>
                    <th>
                      გვარი
                    </th>
                    <th>
                      თარიღი
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {parsedJSON.name.split(" ")[0]}
                    </td>
                    <td>
                    {parsedJSON.name.split(" ")[1]}
                    </td>
                    <td>
                      {parsedJSON.date.split(" ").slice(0,5)}
                    </td>
                  </tr>
                </tbody>
                </Table>
                <button onClick={() => navigate("/stored_resumes", {state: localStorage.getItem("resume")})}>See more</button> 
                </>: <h2 style={{textAlign:"center"}}>უახლესი რეზიუმე ვერ მოიძებნა</h2>}
            </div>
        </div>
    )
}
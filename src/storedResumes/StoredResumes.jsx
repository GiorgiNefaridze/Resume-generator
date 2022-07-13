import { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'
import ContextMenu from '../components/contextMenu/ContextMenu'
import './StoredResumes.scss'

export default function StoredResumes(){
    const location = useLocation()
    const navigate = useNavigate()
    
    var states
    if(location.state !== null) {
        states = JSON.parse(location.state)
    }

    const [showContentMenu, setShowContentMenu] = useState(false)
    const [arrayOfResumes, setArrayOfResumes] = useState([states])
    const [posX, setPosX] = useState()
    const [posY, setPosY] = useState()
    const [resumeId, setResumeId] = useState()

    const contextMenu = (e,id) => {
        setShowContentMenu(true)
        setPosX(e.pageX)
        setPosY(e.pageY)
        setResumeId(id)
    }

    return(
        <div className='stored-resume-container'>
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
                {arrayOfResumes.map((resume) => (
                    <tr key={resume.id} onContextMenu={(e)=> contextMenu(e,resume.id)}>
                    <td>
                        {resume.name.split(" ")[0]}
                    </td>
                    <td>
                        {resume.name.split(" ")[1]}
                    </td>
                    <td>
                        {resume.date.split(" ").slice(0,5).join(" ")}
                    </td>
                  </tr>
                    ))}
                </tbody>
              </Table>
            {showContentMenu && <ContextMenu arrayOfResumes={arrayOfResumes} setArrayOfResumes={setArrayOfResumes} resumeId={resumeId} setShowContentMenu={setShowContentMenu} posX={posX} posY={posY} />}
            <div className='go-home-container'>
              <button className='go-home' onClick={()=> navigate("/")}>Go home</button>
            </div>
        </div>
    )
}
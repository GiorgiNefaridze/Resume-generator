import { useRef,useEffect } from 'react'

import './ContextMenu.scss'

export default function ContextMenu({posX,posY,setShowContentMenu,resumeId,setArrayOfResumes,arrayOfResumes}){

    const contextMenuRef = useRef()

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const handleClickOutside = (e) => {
        if(!contextMenuRef.current.contains(e.target) || e.target === contextMenuRef.current){
            setShowContentMenu(false)
        }
    }

    const styles = {
        top:`${posY}px`,
        left:`${posX}px`,

    }

    const deleteResume = () => {
        const filteredArray = arrayOfResumes.filter((resume) => resume.id !== resumeId)
        setArrayOfResumes(filteredArray)
    }

    return(
        <div className="context-menu-container" onClick={deleteResume} ref={contextMenuRef} style={styles}>DELETE</div>
    )
}
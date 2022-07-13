import { useRef,useEffect } from 'react'

export default function ContextMenu({posX,posY,setShowContentMenu,resumeId,setArrayOfResumes,arrayOfResumes}){

    const contextMenuRef = useRef()

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })

    const handleClickOutside = (e) => {
        if(!contextMenuRef.current.contains(e.target) || e.target === contextMenuRef.current){
            setShowContentMenu(false)
        }
    }

    const styles = {
        backgroundColor:"red",
        position:"absolute",
        top:`${posY}px`,
        left:`${posX}px`,
        padding:"10px",
        borderRadius:"5px",
        color:"white",
        cursor:"pointer"
    }

    const deleteResume = () => {
        const filteredArray = arrayOfResumes.filter((resume) => resume.id !== resumeId)
        setArrayOfResumes(filteredArray)
    }

    return(
        <div onClick={deleteResume} ref={contextMenuRef} style={styles}>DELETE</div>
    )
}
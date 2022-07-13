import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ImportResume.scss'

export default function ImportResume(){
    const [files, setFiles] = useState("");
    const [disabled,setDisabled] = useState(true)

    const handleChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0]);
      fileReader.onload = (e) => {
        setFiles(e.target.result);
      };
      setDisabled(false)
    };

    const navigate = useNavigate()

    const navigateToCreatePath = () => {
        navigate("/create", {state: {files}})
    }

    return (
      <div className="resume-container">
        <h1>Upload Json file</h1>
        <input type="file" onChange={handleChange} />
        <button className={disabled ? "disabled" : ""} onClick={navigateToCreatePath} disabled={disabled}>Import</button>
      </div>
    );
}
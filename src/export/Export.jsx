import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PhoneImg from '../images/phone.webp'
import EmailImg from '../images/email.jpg'
import LocationImg from '../images/location.png'
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'
import './Export.scss'

export default function Export() {

    const location = useLocation();

    const themeColor = location.state.themeColor
    const themeName = location.state.themeName

    //Refs
    const themeRef = useRef()

    const exportPDF = () => {
        html2canvas(themeRef.current).then((canvas) => {
            const imgWidth = 210;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('resume.pdf');
        })
    }

    const exportIMG = () => {
        html2canvas(themeRef.current).then((canvas) => {
            const image = canvas.toDataURL('image/png')
            const aTag = document.createElement('a')
            aTag.setAttribute('href', image)
            aTag.setAttribute('download', 'resume.png')
            aTag.click()
            aTag.remove()
        });
    }

    const exportJSON = () => {
        const userDetails = {
            name:localStorage.getItem("name"),
            email:localStorage.getItem("email"),
            number:localStorage.getItem("number"),
            adress:localStorage.getItem("adress"),
            summary:localStorage.getItem("summary"),
            skills:localStorage.getItem("skills"),
            experience:localStorage.getItem("experience"),
        }

        var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userDetails));
        var aTag = document.createElement("a")
        aTag.setAttribute("href", data);
        aTag.setAttribute("download", "resume.json");
        aTag.click();
        aTag.remove();
    }

    return (
        <div className="export-container">
            {themeName === "Angora"
                ? <div ref={themeRef} className="angora-container">
                        <div className='angora-container-name'>
                            <h1
                                style={{
                                color: themeColor
                            }}>{localStorage.getItem("name")}</h1>
                            <p>{localStorage.getItem("number")}</p>
                            <p>{localStorage.getItem("email")}</p>
                            <p>{localStorage.getItem("adress")}</p>
                        </div>
                        <div className='angora-container-summary'>
                            <h2
                                style={{
                                color: themeColor
                            }}>Professional Summary</h2>
                            <p>{localStorage.getItem("summary")}</p>
                        </div>
                        <div className='angora-container-skills'>
                            <h2
                                style={{
                                color: themeColor
                            }}>Skills</h2>
                            <p>{localStorage.getItem("skills")}</p>
                        </div>
                        <div className='angora-container-experience'>
                            <h2
                                style={{
                                color: themeColor
                            }}>Experience</h2>
                            <p>{localStorage.getItem("experience")}</p>
                        </div>
                    </div>
                : <div ref={themeRef} className="blueprint-container">
                    <div className='blueprint-container-badge'></div>
                    <h1 style={{
                        color: themeColor
                    }}>{localStorage.getItem("name")}</h1>
                    <div className='blueprint-container-inner'>
                        <div className="blueprint-container-inner-left-side">
                            <div className="contact">
                                <span
                                    style={{
                                    color: themeColor
                                }}>CONTACT</span>
                                <div>
                                    <img src={PhoneImg} alt="PhoneImg"/>
                                    <p>{localStorage.getItem("number")}</p>
                                </div>
                                <div>
                                    <img src={EmailImg} alt="EmailImg"/>
                                    <p>{localStorage.getItem("email")}</p>
                                </div>
                                <div>
                                    <img src={LocationImg} alt="LocationImg"/>
                                    <p>{localStorage.getItem("adress")}</p>
                                </div>
                            </div>
                            <div className="summary">
                                <span
                                    style={{
                                    color: themeColor
                                }}>SUMMARY</span>
                                <p>{localStorage.getItem("summary")}</p>
                            </div>
                            <div className="skills">
                                <span
                                    style={{
                                    color: themeColor
                                }}>SKILLS</span>
                                <p>{localStorage.getItem("skills")}</p>
                            </div>
                        </div>
                        <div className="blueprint-container-inner-right-side">
                            <span
                                style={{
                                color: themeColor
                            }}>EXPERIENCE</span>
                            <p>{localStorage.getItem("experience")}</p>
                        </div>
                    </div>
                    <div className="arrow"></div>
                </div>
            }
            <div className='export-container-btns'>
                <button onClick={exportIMG}>Export Image</button>
                <button onClick={exportPDF}>Export PDF</button>
                <button onClick={exportJSON}>Export JSON</button>
            </div>
        </div>
    );
}
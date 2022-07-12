import PhoneImg from '../images/phone.webp'
import EmailImg from '../images/email.jpg'
import LocationImg from '../images/location.png'
import { Spinner } from 'reactstrap'
import './BlueprintTheme.scss'

export default function BlueprintTheme({themeColor, data, loading}) {
    return ( 
    <> 
        {
        loading
            ? <Spinner color="primary">
                    Loading...
                </Spinner>
            : <div className="blueprint-container">
                    <div className='blueprint-container-badge'></div>
                    <h1 style={{
                        color: themeColor
                    }}>{data.name}</h1>
                    <div className='blueprint-container-inner'>
                        <div className="blueprint-container-inner-left-side">
                            <div className="contact">
                                <span
                                    style={{
                                    color: themeColor
                                }}>CONTACT</span>
                                <div>
                                    <img src={PhoneImg} alt="PhoneImg"/>
                                    <p>{data.phone}</p>
                                </div>
                                <div>
                                    <img src={EmailImg} alt="EmailImg"/>
                                    <p>{data.email}</p>
                                </div>
                                <div>
                                    <img src={LocationImg} alt="LocationImg"/>
                                    <p>{data.address}</p>
                                </div>
                            </div>
                            <div className="summary">
                                <span
                                    style={{
                                    color: themeColor
                                }}>SUMMARY</span>
                                <p>{data.summary}</p>
                            </div>
                            <div className="skills">
                                <span
                                    style={{
                                    color: themeColor
                                }}>SKILLS</span>
                                <p>{data.skills}</p>
                            </div>
                        </div>
                        <div className="blueprint-container-inner-right-side">
                            <span
                                style={{
                                color: themeColor
                            }}>EXPERIENCE</span>
                            <p>{data.experience}</p>
                        </div>
                    </div>
            </div>
        } 
    </>
    )
}
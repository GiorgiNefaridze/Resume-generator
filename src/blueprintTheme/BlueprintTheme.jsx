import PhoneImg from '../images/phone.webp'
import EmailImg from '../images/email.jpg'
import LocationImg from '../images/location.png'
import './BlueprintTheme.scss'

export default function BlueprintTheme({themeColor}) {
    return (
        <div className="blueprint-container">
            <div className='blueprint-container-badge'></div>
            <h1 style={{color: themeColor}}>Lorel Ipsum</h1>
            <div className='blueprint-container-inner'>
                <div className="blueprint-container-inner-left-side">
                    <div className="contact">
                        <span style={{color: themeColor}}>CONTACT</span>
                        <div>
                            <img src={PhoneImg} alt="PhoneImg"/>
                            <p>543-219-876</p>
                        </div>
                        <div>
                            <img src={EmailImg} alt="EmailImg"/>
                            <p>myemail@gmail.com</p>
                        </div>
                        <div>
                            <img src={LocationImg} alt="LocationImg"/>
                            <p>123 Main street,Geo</p>
                        </div>
                    </div>
                    <div className="summary">
                        <span style={{color: themeColor}}>SUMMARY</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
                            architecto! Aliquam pariatur ullam alias quae?</p>
                    </div>
                    <div className="skills">
                        <span
                            style={{
                            color: themeColor
                        }}>SKILLS</span>
                        <ol>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ol>
                    </div>
                </div>
                <div className="blueprint-container-inner-right-side">
                    <span style={{color: themeColor}}>EXPERIENCE</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, est. Quos
                        nemo voluptate, aliquam sunt cum laborum quam totam, sequi iure expedita beatae
                        ducimus sint velit non consectetur quo officia debitis, voluptas assumenda
                        cumque aperiam. Magnam doloremque sapiente fuga laboriosam!</p>
                </div>
            </div>
        </div>
    )
}
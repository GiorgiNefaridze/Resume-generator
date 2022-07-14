import { Spinner } from 'reactstrap'

import './AngoraTheme.scss'

export default function AngoraTheme({themeColor, data, loading}) {

    if(loading) {
        return <Spinner id="spinner" color="primary">Loading...</Spinner>
    }

    return ( 
        <div className="angora-container">
                <div className='angora-container-name'>
                    <h1
                        style={{
                        color: themeColor
                    }}>{data.name}</h1>
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                    <p>{data.address}</p>
                </div>
                <div className='angora-container-summary'>
                    <h2
                        style={{
                        color: themeColor
                    }}>Professional Summary</h2>
                    <p>{data.summary}</p>
                </div>
                <div className='angora-container-skills'>
                    <h2
                        style={{
                        color: themeColor
                    }}>Skills</h2>
                    <p>{data.skills}</p>
                </div>
                <div className='angora-container-experience'>
                    <h2
                        style={{
                        color: themeColor
                    }}>Experience</h2>
                    <p>{data.experience}</p>
                </div>
        </div>
    )
}
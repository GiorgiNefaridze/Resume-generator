import './AngoraTheme.scss'

export default function AngoraTheme({themeColor}) {
    return (
        <div className="angora-container">
            <div className='angora-container-name'>
                <h1 style={{
                    color: themeColor
                }}>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='angora-container-summary'>
                <h2 style={{
                    color: themeColor
                }}>Professional Summary</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eaque error
                    autem unde tenetur soluta quos eligendi ab distinctio in!</p>
            </div>
            <div className='angora-container-skills'>
                <h2 style={{
                    color: themeColor
                }}>Skills</h2>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
            <div className='angora-container-experience'>
                <h2 style={{
                    color: themeColor
                }}>Experience</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                    necessitatibus aut! Debitis cupiditate molestias consequatur. Ducimus
                    exercitationem, assumenda et ab a velit quam, aperiam aliquam in nihil, vero
                    minus est.</p>
            </div>
        </div>
    )
}
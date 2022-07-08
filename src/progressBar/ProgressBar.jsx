import { Progress } from 'reactstrap'
import './ProgressBar.scss'

export default function ProgressBar({findOuFillInput}) {
    return (
        <div>
            <Progress className="progress-bar-container"  color="success" animated value={findOuFillInput/7*100}/>
        </div>
    )
}
import { useNavigate } from 'react-router-dom'
import NotFoundError from '../images/404-image.png'
import './PageNotFound.scss'

export default function PageNotFound() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }

  return (
    <div className='page-not-found-container'>
      <div className="page-not-found-container-image">
        <img src={NotFoundError} alt="Page Not Found" />
      </div>
      <div className="page-not-found-container-texts">
        <h1>404</h1>
        <button onClick={goBack} className="go-back-btn">Go Back</button>
      </div>
    </div>
  );
}
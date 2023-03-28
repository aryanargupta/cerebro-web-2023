import loadingLogo from '../../assets/images/Logo.png';
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-cont">
            <img src={loadingLogo} alt="cerebro-loading-logo" className="loading-spinner" />
        </div>
    )
}

export default LoadingSpinner;
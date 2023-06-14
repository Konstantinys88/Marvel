import error from "./error.gif";
import "./errorimg.scss";

const ErrorMessage = () => {
    return(
        <img className="errorimg" src={error} alt="error" />
    )
}

export default ErrorMessage;
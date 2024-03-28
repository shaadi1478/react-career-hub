import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
             <h1 className="text-7xl text-orange-400 font-serif font-bold text-center">Oops!!!</h1>
             <Link className="btn btn-warning" to="/">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
import { Link } from "react-router-dom"
import '../../App.css'

function Buttons(){
    return(
        <>
        <div className="d-flex flex justify-content-center align-items-center mt-5">
        <Link to ="/vendor/registration"><button type="button" className="btn btn-primary">Register Now</button></Link>
        </div>
        </>
    )
}
export default Buttons
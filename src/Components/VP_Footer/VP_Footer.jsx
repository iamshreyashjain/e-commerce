import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function VP_Footer(){
    return(
        <> 
        <div>
        <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-3 my-4 mt-6 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><FaFacebook></FaFacebook> </svg></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><FaWhatsapp></FaWhatsapp> </svg></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><FaXTwitter></FaXTwitter> </svg></a></li>
        </ul>
      </footer>
      </div>
        </>
    )
}

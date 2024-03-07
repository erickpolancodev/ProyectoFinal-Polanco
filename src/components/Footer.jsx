import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare, faXTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
    return(
        <footer className="w-100">
            <div className="footer-brand flex py-3 justify-between px-5">
                <div className="">
                    <h2>TechStore</h2>
                </div>
                <div className="redes space-x-4">
                    <FontAwesomeIcon icon={faXTwitter}/>
                    <FontAwesomeIcon icon={faInstagramSquare}/>
                    <FontAwesomeIcon icon={faFacebookSquare}/>
                </div>
            </div>
            <div className="copyright flex items-center justify-center text-white  py-3">
                <p>Todos los derechos reservados TechStore 2024</p>
            </div>
        </footer>
    )
}
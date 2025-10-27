import logo from '../../assets/newsify_logo.png'
import { IoChevronForwardSharp } from "react-icons/io5";
import './HomeDetails.sass'

export default function HomeDetails({category, children, ...props}) {

    return (
        <>
            <details {...props} className="home-page__home-details" name="news">
                <summary className="home-page__category-title">
                    <img src={logo} alt="newsify_logo" />
                    <h2>{category}</h2>
                    <IoChevronForwardSharp className="chevron-down" />
                </summary>
                {children}
            </details>
        </>
    );

}
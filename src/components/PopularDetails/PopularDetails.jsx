import logo from '../../assets/newsify_logo.png'
import { IoChevronForwardSharp } from "react-icons/io5";
import './PopularDetails.sass'


export default function PopularDetails({category, children, ...props}) {

    return (
        <>
            <details {...props} className="popular-page__popular-details" name="news">
                <summary className="popular-page__category-title">
                    <img src={logo} alt="newsify_logo" />
                    <h2>{category}</h2>
                    <IoChevronForwardSharp className="chevron-down" />
                </summary>
                {children}
            </details>
        </>
    );

}
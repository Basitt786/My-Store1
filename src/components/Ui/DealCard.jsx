import { NavLink } from "react-router-dom";

const DealCard = ({curent}) => {
    const {images, title, description, price, rating} = curent
    const discount = 20; 
    const discountedPrice = (price - (price * discount / 100)).toFixed(2);
    return(
        <li className="list">
            <div className="main-Container">
                <div className="poster">
                <NavLink to={`/deals/${curent.id}`}>
                    <img src={images} alt="Image" />
                </NavLink>    
                </div>

                <div className="Container">
                    <h2 className="Main-heading">{title}</h2>
                    <p className="disc">{description}</p>
                </div>

                <div className="contain">
                    <h4 className="prices">$ {discountedPrice}<span className="old-price">$ {price}</span> </h4>
                        <p className="paragraph">⭐ {4.2} ({440} reviews)</p>
                </div>
                
                    {/* <button className="add-btn">Add to Cart</button> */}
            </div>
        </li>
    )
}

export default DealCard;
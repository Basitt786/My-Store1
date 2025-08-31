import { NavLink } from "react-router-dom";


const WoCard = ({curenele}) => {
    const {images, title, description, discountPercentage, price, rating} = curenele
    const discount = 20; 
    const discountedPrice = (price - (price * discount / 100)).toFixed(2);
    return(
        <li className="list">
            <div className="main-Container">
                <div className="poster">
                <NavLink to={`/women/${curenele.id}`}>
                    <img src={images} alt="Image" />
                </NavLink>
            </div>

            <div className="Container">
                <h2 className="Main-heading">{title}</h2>
                <p className="disc">{description}</p>
            </div>    

            
            <div className="contain">
                <h4 className="prices">$ {discountedPrice}<span className="old-price">$ {price}</span> </h4>
                <p className="paragraph">⭐ {rating} ({rating?.count} reviews)</p>
            </div>
                 {/* <button className="add-btn">Add to Cart</button> */}
            </div>
        </li>
    )
}

export default WoCard;
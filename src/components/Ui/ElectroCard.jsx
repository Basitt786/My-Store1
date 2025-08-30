import { NavLink } from "react-router-dom";


export const ElectroCard = ({curent}) => {
    const {images, title, description, price, rating, } = curent
     const discount = 20; 
    const discountedPrice = (price - (price * discount / 100)).toFixed(2);
    return (
        <li className="list">
                <div className="main-Container">
                <div className="poster">
                    <NavLink to={`/electronics/${curent.id}`}>
                    <img src={images && images.length > 0 ? images[0] : "https://via.placeholder.com/150"} alt="Image" />
                    </NavLink>
            </div>

            <div className="Container">
                <h2 className="Main-heading">{title}</h2>
                <p className="disc">{description}</p>
            </div>    

            
            <div className="contain">
                <h4 className="prices">$ {discountedPrice} <span className="old-price"> $ {price}</span> </h4>
                <p className="paragraph">⭐ {rating} ({230} reviews)</p>
            </div>
                 {/* <button className="add-btn">Add to Cart</button> */}
            </div>
        </li>
    )
}
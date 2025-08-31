import { NavLink } from "react-router-dom";

 const Card = ({curn}) => {
    const {image, title, description, price, rating} = curn;
    const discount = 20; 
    const discountedPrice = (price - (price * discount / 100)).toFixed(2);
    return(
        <li className="list">
            <div className="main-Container">
                <div className="poster">
               <NavLink to={`/men/${curn.id}`}>     
                    <img src={image} alt="Image" />
               </NavLink>     
                </div>

                <div className="Container">
                    <h2 className="Main-heading">{title}</h2>
                    <p className="disc">{description}</p>
                </div>

                <div className="contain">
                 <h4 className="prices">$ {discountedPrice}<span className="old-price">$ {price}</span> </h4>
                    <p className="paragraph">⭐ {rating?.rate} ({rating?.count} reviews)</p>
                </div>
                
                    {/* <button className="add-btn">Add to Cart</button> */}
            </div>
        </li>
    )
}

export default Card;
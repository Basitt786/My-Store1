import { NavLink } from "react-router-dom";

export const HomeApplianc = ({curentelem}) => {
  
   
    if (!curentelem) return null;
    const {images, title,  description, price, rating } = curentelem
    // console.log(curentelem);
     const discount = 20; 
    const discountedPrice = (price - (price * discount / 100)).toFixed(2);

    return(
        <li className="list">
            <div className="main-Container">
                  <div className="poster">
            <NavLink to={`/homekitchen/${curentelem.id}`}>
                   <img src={images[0]} alt={title} />
            </NavLink>
                </div>

                <div className="Container">
                    <h2 className="Main-heading"> {title}</h2>
               
                    <p className="disc">{description}</p>
                </div>

                <div className="contain">
                 <h4 className="prices">$ {discountedPrice}<span className="old-price">$ {price}</span> </h4>
                    <p className="paragraph">⭐ {rating} ({200} reviews)</p>
                </div>
                
                    {/* <button className="add-btn">Add to Cart</button> */}

            </div>
        </li>
    )
}
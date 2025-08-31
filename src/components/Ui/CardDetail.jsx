import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { useCart } from "../../pages/Cart-Context"; // ✅ Hook import

export const CardDetail = () => {
    const detail = useLoaderData();
    const { addToCart } = useCart(); // ✅ Sahi usage - functions extract karein
    console.log(detail);

    const { image, title, description, price, rating } = detail;
    
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(prev => (prev < 100 ? prev + 1 : prev));
    };

    const dec = () => {
        setCount(prev => (prev > 1 ? prev - 1 : 0));
    };

    const handleAddToCart = () => {
        addToCart({ 
            ...detail, 
            quantity: count || 1 // ✅ Agar count 0 hai toh 1 add karega
        });
    };

    const discount = 20; 
    const discountedPrice = (price - (price * discount / 100)).toFixed(2);
  
    return(
        <li className="product-item">
            <div className="img-wrap">
                <img src={image} alt={title} />
                <span className="badge">-80%</span>
            </div>

            <div className="info">
                <h3 className="title">{title}</h3>

                <div className="price">
                    <span className="new">$ {price}</span>
                    <span className="old">$ {discountedPrice}</span>
                </div>

                <p className="shipping">{description}</p>
                <p className="viewers"> ⭐({rating?.rate} ({rating?.count} reviews)</p>
                <p className="stock">⏳ HURRY UP! ONLY 8 LEFT IN STOCK.</p>

                <div className="progress">
                    <div className="progress-bar"></div>
                </div>

                <div className="actions">
                    <button onClick={dec}>-</button>
                    <span className="qty">{count}</span>
                    <button onClick={inc}>+</button>
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        ADD TO CART
                    </button>
                    <button className="wishlist">♡</button>
                </div>

                <button className="buy-now">BUY IT NOW</button>
            </div>
        </li>
    );
};
import { useCart } from "../../pages/Cart-Context";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cart ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Your Cart
      </h2>

      {!cart || cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-lg border hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="w-full md:w-40 flex justify-center md:justify-end mb-4 md:mb-0">
                  <img
                    src={item.images || item.image}
                    alt={item.title || item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 md:ml-6 text-center md:text-left">
                  <h3 className="font-semibold text-xl text-gray-800 mb-1">
                    {item.title || item.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center md:justify-start space-x-2 mt-3">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="px-3 font-medium">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="mt-3 md:mt-0 text-red-500 hover:text-red-700 px-4 py-2 border border-red-300 rounded transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-10 bg-indigo-50 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between">
            <span className="text-xl font-semibold text-gray-800">
              Total: ${total.toFixed(2)}
            </span>
            <button className="mt-4 md:mt-0 w-full md:w-auto bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}


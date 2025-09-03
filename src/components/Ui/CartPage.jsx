import { useCart } from "../../pages/Cart-Context";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cart
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="w-full h-full flex flex-col">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-4">
        Your Cart
      </h2>

      {/* Empty Cart */}
      {!cart || cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg flex-1 flex items-center justify-center">
          Your cart is empty 🛒
        </p>
      ) : (
        <>
          {/* ✅ Cart Items (scrollable area) */}
          <div className="flex-1 space-y-4 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg border"
                  />
                </div>

                {/* Product Info + Quantity */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {item.title || item.name}
                  </h3>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} × {item.quantity} ={" "}
                    <span className="font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center md:justify-start space-x-2 mt-3">
                    <button
                      className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="px-3 font-medium">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="flex-shrink-0 mt-5 ml-3">
                  <button
                    className="text-red-500 hover:text-red-700 px-4 py-2 border border-red-300 rounded-lg transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Checkout Summary (ALWAYS outside map) */}
          <div className="sticky bottom-0 bg-indigo-50 p-4 rounded-t-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-lg md:text-xl font-semibold text-gray-800">
              Total:{" "}
              <span className="text-indigo-600">${total.toFixed(2)}</span>
            </span>
            <button className="w-full md:w-auto bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

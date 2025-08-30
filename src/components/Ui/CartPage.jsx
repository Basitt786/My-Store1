export default function CartPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        Your Cart
      </h2>

      <div className="space-y-4">
        {/* Cart Item */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold">Product Name</h3>
            <p className="text-gray-600">₹1,200</p>
            <div className="flex items-center space-x-2 mt-1">
              <button className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span>1</span>
              <button className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">Remove</button>
        </div>

        {/* Another Cart Item */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold">Another Product</h3>
            <p className="text-gray-600">₹800</p>
            <div className="flex items-center space-x-2 mt-1">
              <button className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span>2</span>
              <button className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">Remove</button>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>₹2,800</span>
        </div>
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}

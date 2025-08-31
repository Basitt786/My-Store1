import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginPage from '../Ui/LoginPage';
import CartPage from '../Ui/CartPage';

export function Header() {
  const [cart, setCart] = useState(false);
  const [login, setlogin] = useState(false);
  const [Cartbtn, setCartBtn] = useState(false);
  const [open, setopen] = useState(false);

  const toogleone = () => setCart(!cart);
  const toogletwo = () => setlogin(!login);
  const tooglethree = () => setCartBtn(!Cartbtn);

  return (
    <div>
      {/* 🔹 Top Navigation Bar */}
      <nav className="w-full bg-gradient-to-r from-slate-800 to-slate-700 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50 shadow-lg">
        <div className="flex justify-between items-center h-16 lg:h-20 px-4 sm:px-6 lg:px-8 relative">
          
          {/* 🔹 Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0 flex items-center">
            <h1 className="flex items-center text-2xl lg:text-3xl font-bold text-indigo-400 drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img src="/images/bags.png" className="w-[40px] h-auto mr-2" alt="Bag" />
              MyStore
            </h1>
          </div>

          {/* 🔹 Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className="text-white font-medium hover:text-indigo-300 transition">🏠 Home</NavLink>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-white font-medium flex items-center space-x-1 hover:text-indigo-300 transition">
                <span>🛍️ Products</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                <div className="py-2 divide-y divide-gray-100">
                  <NavLink to="/men" className="block px-5 py-3 hover:bg-indigo-500 hover:text-white transition rounded-t-2xl">👔 Men&apos;s</NavLink>
                  <NavLink to="/women" className="block px-5 py-3 hover:bg-indigo-500 hover:text-white transition">👗 Women</NavLink>
                  <NavLink to="/electronics" className="block px-5 py-3 hover:bg-indigo-500 hover:text-white transition">📱 Electronics</NavLink>
                  <NavLink to="/homekitchen" className="block px-5 py-3 hover:bg-indigo-500 hover:text-white transition rounded-b-2xl">🏠 Home & Kitchen</NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/deals" className="text-white font-medium hover:text-indigo-300 transition">🔥 Deals</NavLink>
            <NavLink to="/contactus" className="text-white font-medium hover:text-indigo-300 transition">📞 Contact Us</NavLink>
          </div>

          {/* 🔹 Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={tooglethree} className="relative bg-yellow-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition flex items-center space-x-2">
              <span>🛒</span>
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">3</span>
            </button>
            {Cartbtn && (
              <div className="absolute top-full right-10 h-[80vh] w-[22%] bg-white rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                <button onClick={tooglethree} className="mb-4 bg-red-600  text-white px-4 py-2 rounded-lg">✕</button>
                <CartPage />
              </div>
            )}

            {/* Login Button */}
            <button onClick={toogletwo} className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition">
              👤 Login
            </button>
            {login && (
              <>
                <div onClick={toogletwo} className="fixed inset-0  z-40"></div>
                <div className="absolute top-full right-3 h-[70vh] w-80 bg-white rounded-2xl shadow-2xl z-50 p-6 animate-slideIn">
                  <button onClick={toogletwo} className="mb-4 bg-red-600 text-white px-4 py-2 rounded-lg">✕</button>
                  <LoginPage />
                </div>
              </>
            )}
          </div>

          {/* 🔹 Mobile Menu Toggle */}
          <div className="absolute left-3.5 lg:hidden flex items-center">
            <button onClick={toogleone} className="text-white p-2 rounded-md hover:bg-white/10 transition">
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="bg-white block h-0.5 w-6 rounded-sm"></span>
                <span className="bg-white block h-0.5 w-6 rounded-sm"></span>
                <span className="bg-white block h-0.5 w-6 rounded-sm"></span>
              </div>
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        <nav className={`${cart ? "block" : "hidden"} lg:hidden`}>
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 space-y-6 shadow-2xl border border-white/10">
            
            <NavLink to="/" className="block text-white text-lg font-semibold hover:text-indigo-400 transition">🏠 Home</NavLink>

            {/* Products Dropdown */}
            <div className="space-y-2 relative">
              <button onClick={() => setopen(!open)} className="w-full flex justify-between items-center text-white text-lg font-semibold py-3 px-4 rounded-xl border border-white/10 bg-gradient-to-r from-gray-800/50 to-gray-700/30 hover:from-indigo-600/50 hover:to-indigo-500/30 hover:text-indigo-300 transition-all duration-300">
                🛍️ Products
                <span className={`transform transition-transform duration-300 ${open ? "rotate-180 text-indigo-400" : "rotate-0"}`}>▼</span>
              </button>

              {/* Dropdown */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                <div className="bg-white/95 rounded-xl shadow-xl border border-gray-200 backdrop-blur-md divide-y divide-gray-100">
                  <NavLink to="/men" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white rounded-t-xl transition">👔 Men&apos;s</NavLink>
                  <NavLink to="/women" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white transition">👗 Women</NavLink>
                  <NavLink to="/electronics" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white transition">📱 Electronics</NavLink>
                  <NavLink to="/homekitchen" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white rounded-b-xl transition">🏠 Home & Kitchen</NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/deals" className="block text-white text-lg font-semibold hover:text-indigo-400 transition">🔥 Deals</NavLink>
            <NavLink to="/contactus" className="block text-white text-lg font-semibold hover:text-indigo-400 transition">📞 Contact Us</NavLink>

            {/* Mobile Buttons */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <button onClick={tooglethree} className="relative bg-yellow-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition flex items-center space-x-2">
              <span>🛒</span>
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">3</span>
            </button>
            {Cartbtn && (
              <div className="absolute top-full right-10 h-[80vh] w-[22%] bg-white rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                <button onClick={tooglethree} className="mb-4 bg-red-600  text-white px-4 py-2 rounded-lg">✕</button>
                <CartPage />
              </div>
            )} */}

            
              <button onClick={tooglethree} className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition">
              🛒 Cart
            </button>
                {Cartbtn && (
              <>
                <div onClick={tooglethree} className="fixed inset-0  z-40"></div>
                <div className="absolute top-1 left-1 right-3 h-[95vh]  w-87 bg-white rounded-2xl shadow-2xl z-50 p-6 animate-slideIn">
                  <button onClick={tooglethree} className="mb-4 bg-red-600 text-white px-4 py-2 rounded-lg">✕</button>
                  <CartPage />
                </div>
              </>
            )}
            





              <button onClick={toogletwo} className="bg-gradient-to-r ml-5 from-teal-400 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition">
              👤 Login
            </button>
                {login && (
              <>
                <div onClick={toogletwo} className="fixed inset-0  z-40"></div>
                <div className="absolute top-1 left-1 right-3 h-[70vh] w-75 bg-white rounded-2xl shadow-2xl z-50 p-6 animate-slideIn">
                  <button onClick={toogletwo} className="mb-4 bg-red-600 text-white px-4 py-2 rounded-lg">✕</button>
                  <LoginPage />
                </div>
              </>
            )}
            </div>
          
        </nav>
      </nav>
    </div>
  );
}

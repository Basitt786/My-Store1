import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-700 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center justify-items-center">
          
          {/* About Section */}
          <div className="max-w-xs">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">ShopMate</h3>
            <p className="text-white">
              Your one-stop online store for the latest trends in fashion,
              electronics, and home essentials.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Categories</h3>
            <ul className="space-y-2 text-white">
              <li><NavLink to="/men" className="hover:text-indigo-600">Men</NavLink></li>
              <li><NavLink to="/women" className="hover:text-indigo-600">Women</NavLink></li>
              <li><NavLink to="/electronics" className="hover:text-indigo-600">Electronics</NavLink></li>
              <li><NavLink to="/homekitchen" className="hover:text-indigo-600">Home & Kitchen</NavLink></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Customer Service</h3>
            <ul className="space-y-2 text-white">
              <li><NavLink to="/contact" className="hover:text-indigo-600">Contact Us</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-indigo-600">FAQ</NavLink></li>
              <li><NavLink to="/shipping" className="hover:text-indigo-600">Shipping & Returns</NavLink></li>
              <li><NavLink to="/support" className="hover:text-indigo-600">Support</NavLink></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a href="#" className="text-white hover:text-indigo-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 
                  1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H19l-.5 3h-2v7A10 
                  10 0 0022 12z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-white hover:text-indigo-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 
                  8.52 8.52 0 01-2.71 1.03A4.27 4.27 0 0015.5 4c-2.36 0-4.27 
                  1.9-4.27 4.26 0 .33.04.66.11.97-3.55-.18-6.7-1.88-8.81-4.46a4.23 
                  4.23 0 00-.58 2.14c0 1.47.75 2.76 1.88 3.53a4.27 4.27 0 
                  01-1.93-.53v.05c0 2.06 1.46 3.78 3.39 4.17a4.28 4.28 0 
                  01-1.92.07c.54 1.68 2.1 2.9 3.95 2.94A8.57 8.57 0 
                  012 19.54a12.08 12.08 0 006.56 1.92c7.88 0 12.2-6.53 
                  12.2-12.2 0-.19 0-.37-.01-.56A8.73 8.73 0 0024 4.59a8.56 
                  8.56 0 01-2.54.7z"/>
                </svg>
              </a>
              {/* LinkedIn */}
             {/* Instagram */}
              <a href="#" className="text-white hover:text-pink-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t pt-4 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

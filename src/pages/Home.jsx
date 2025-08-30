import { useEffect, useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { MdUnfoldMoreDouble } from "react-icons/md";

export function Home() {
const images = [
  "/pictures/Image1.jpg",
  "/pictures/Image2.jpg",
  "/pictures/Image3.jpg",
  "/pictures/Image4.jpg",
  "/pictures/Image5.jpg",
  "/pictures/Image6.jpg",
  "/pictures/Image7.jpg"
  
]

    const [index, setIndex] = useState(0)


 useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval) // cleanup
  }, [images.length])

  
    const nextimage = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

   const previmage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
    
        <div className="w-full max-w-4xl mx-auto text-center p-2">
  <img
    src={images[index]}
    alt="slider"
    className="
      w-full 
      h-56              /* default mobile */
      sm:h-64           /* ≥640px (small tablet) */
      md:h-72           /* ≥768px (tablet) */
      lg:h-80           /* ≥1024px (laptop) */
      xl:h-96           /* ≥1280px (desktop) */
      object-cover 
      rounded-xl 
      shadow-lg"
  />

      
      <div className="flex justify-center relative bottom-8 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? 'bg-indigo-500' : 'bg-gray-300'
            }`}
          />
        ))}
        </div>

 <div className="flex justify-between px-4 relative
                -top-16      /* mobile */
                sm:-top-20   /* small screens */
                md:-top-20   /* medium screens */
                lg:-top-24   /* large screens */
                xl:-top-28   /* extra large screens */
">
  {/* Previous Button */}
  <button
    onClick={previmage}
    className=" py-1  rounded-lg text-indigo-500 hover:text-orange-300"
  >
    <FaAngleDoubleLeft
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        transition-transform duration-200
        hover:scale-110
      "
    />
  </button>

  {/* Next Button */}
  <button
    onClick={nextimage}
    className="px-4 py-2 rounded-lg text-indigo-500 hover:text-orange-300"
  >
    <FaAngleDoubleRight
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        transition-transform duration-200
        hover:scale-110
      "
    />
  </button>
</div>
</div>
<div className="w-full py-10 px-4 grid place-items-center -mt-[7rem] ">
  <h1
    className="
      text-3xl  sm:text-4xl md:text-5xl lg:text-6xl
      font-extrabold text-transparent
      bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      drop-shadow-2xl
      leading-tight
      text-center
      mt-5 sm:mt-7 md:mt-7
    "
  >
    Store Collection
  </h1>
</div>

    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-10 bg-gray-50">
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
  <img 
    src="/pics/JKimg1.jpg" 
    alt="store" 
    className="rounded-2xl shadow-lg w-full md:w-[28rem] object-cover 
               transform transition duration-500 hover:scale-105 hover:brightness-110"
  />
</div>


  {/* Text Section */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Deals that Dazzle
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Store's atmosphere, the types of products available, 
      the target customer demographic, and the customer service. 
      Or brainstorm ideas such as the preparation process for 
      opening a new shop, including location, layout, and inventory.
    </p>
  </div>

<div className="block md:hidden lg:hidden text-center">
  <MdUnfoldMoreDouble className="text-8xl mt-7 animate-bounce drop-shadow-lg fill-[url(#grad1)]" />

  {/* Hidden SVG gradient definition */}
  <svg width="0" height="0">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4" />   {/* cyan-400 */}
        <stop offset="100%" stopColor="#6366f1" /> {/* indigo-500 */}
      </linearGradient>
    </defs>
  </svg>
</div>
</div>




<div className="flex flex-col justify-end items-center min-h-screen p-4">
  <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <img 
      src="/pics/JKimg2.jpg" 
      alt="JK Image" 
      className="w-[50rem] h-auto object-cover rounded-2xl transform transition-transform duration-500 hover:scale-110"
    />
  </div>
</div>

  

















    
    </>
  )
}

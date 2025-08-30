import { Form } from "react-router-dom"

export const contactdata = async ({request}) => {
   try {
    const res = await request.formData()
    const data = Object.fromEntries(res)
   console.log(data);
   return null
   } catch (error) {
    console.log(message.error);
    
   }
   
}

// const handleSubmit = (event) => {
//   event.preventDefault()
//   console.log("Form Submitted");
  
// }


export default function ContactForm() {
  return (
    <>
 <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-50 to-blue-200 p-4">
      <div className="bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-blue-100 relative overflow-hidden">
        
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 rounded-t-3xl"></div>
        
        {/* Floating decoration shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-100/40 to-sky-200/20 rounded-full top-[10%] left-[80%]"></div>
          <div className="absolute w-10 h-10 bg-gradient-to-br from-cyan-100/40 to-blue-200/20 rounded-full top-[70%] left-[10%]"></div>
          <div className="absolute w-20 h-20 bg-gradient-to-br from-sky-100/30 to-blue-100/20 rounded-full top-[40%] left-[85%]"></div>
        </div>
        
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        
        <div className="space-y-6" >
          <Form method="post" action="/contactus" >
          {/* Username Field */}
          <div className="space-y-2">
            <label 
              htmlFor="contact-username" 
              className="block text-sm font-semibold text-blue-700 uppercase tracking-wide"
            >
              Username
            </label>
            <input
              type="contact-username"
              required
              autoComplete="off"
              id="contact-username"
              name="contact-username"
              placeholder="Enter username"
              className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl bg-white/80 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none placeholder-blue-300"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label 
              htmlFor="contact-email" 
              className="block text-sm font-semibold text-blue-700 uppercase tracking-wide"
            >
              Email
            </label>
            <input
              type="contact-email"
              id="contact-email"
              name="contact-email"
              required
              autoComplete="off"
              placeholder="Enter email"
              className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl bg-white/80 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none placeholder-blue-300"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2 mb-6">
            <label 
              htmlFor="contact-password" 
              className="block text-sm font-semibold text-blue-700 uppercase tracking-wide"
            >
              Password
            </label>
            <input
              type="contact-password"
              id="contact-password"
              name="contact-password"
              required
              autoComplete="off"
              placeholder="Enter password"
              className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl bg-white/80 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300 hover:-translate-y-0.5 placeholder-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // onClick={handleSubmit}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-xl text-lg uppercase tracking-wide shadow-lg"
          >
            Submit
          </button>
          </Form>
        </div>
      </div>
    </div>
    </>
  )
}

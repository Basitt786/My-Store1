// import { useState } from "react";
import { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";
 export const fulldata = async({request}) => {
        try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
        
        return null;
        } catch (error) {
          console.log(error);
          
          
        }
    }
    

export default function LoginPage() {
 const [open, setopen] = useState(false);


   const actiondata = useActionData()

   useEffect(() => {
      if (actiondata?.sucess) {
      setopen(false)
    }
   }, [actiondata])
  
  return (
<div className="w-full"> 
  <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">Login</h2>
  
  {open && (
  <Form method="post" action="/loginpage" className="space-y-4">
    
    {/* Email */}
    <div className="flex flex-col space-y-1">
      <label 
        htmlFor="login-email" 
        className="text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <input
        type="email"
        id="login-email"
        name="email"
        placeholder="Enter your email"
        autoComplete="off"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    {/* Password */}
    <div className="flex flex-col space-y-1">
      <label 
        htmlFor="login-password" 
        className="text-sm font-medium text-gray-700"
      >
        Password
      </label>
      <input
        type="password"
        id="login-password"
        name="password"
        placeholder="Enter your password"
        autoComplete="current-password"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      Login
    </button>
  </Form>
  )}

    {!open && (
        <button
          type="button"
          onClick={() => setopen(true)}
          className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Open Login
        </button>
      )}
</div>

  );
}

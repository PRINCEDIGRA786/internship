// SignUp.js

import { RiEyeCloseFill } from "react-icons/ri";
import React, { useContext, useState } from 'react';
import { BsFillEyeFill } from "react-icons/bs";
import Portcon from "../contextapi/Portfoliocontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Request for the login...
  const context=useContext(Portcon);
  const{login}=context;


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,

  });

  // for validation no field empty
  const isFormValid=()=>{
      const requiredFields = [ 'email', 'password'];
      for (const field of requiredFields) {
        if (!formData[field]) {
          // Field is not filled
          alert(`Please fill in the ${field} field.`,"danger");
          return false;
        }
      }
      return true;

  }

  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };


  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log(formData);
    if( isFormValid()){
      const result=await login(formData);
      if(result){
        navigate('/posts')
      }

    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <form className="w-full max-w-md bg-gradient-to-tr from-neutral-500 to-blue-400 px-8 py-4" onSubmit={handleSubmit}
       >
        {/* Username */}
        <h1 className=' text-xl font-extrabold text-center'>LOGIN</h1>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type={formData.showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {formData.showPassword ? (
                <BsFillEyeFill className="h-4 w-4"/>
              ) : (
               <RiEyeCloseFill className="h-4 w-4"/>
              )}
            </div>
          </div>
        </div>

   
        <div className="text-sm font-semibold my-2">
          Don't have account?<span className="text-blue-800 hover:text-blue-600 cursor-pointer" onClick={()=>navigate('/')}> Signup</span>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // onClick={isFormValid()}
            onClick={handleSubmit}
          >
            Login
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Login;

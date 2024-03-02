// SignUp.js

import { RiEyeCloseFill } from "react-icons/ri";
import React, { useContext, useState } from 'react';
import { BsFillEyeFill } from "react-icons/bs";
import Portcon from "../contextapi/Portfoliocontext";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  // Request for the signup...
  const context=useContext(Portcon);
  const{createuser}=context;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: '',
    showPassword: false,
    agreeTerms: false,
  });

  // for validation no field empty
  const isFormValid=()=>{
      const requiredFields = ['username', 'email', 'password', 'confirmPassword',"agreeTerms"];
      for (const field of requiredFields) {
        if (!formData[field]) {
          // Field is not filled
          alert(`Please fill in the ${field} field.`,"danger");
          return false;
        }
        else {
            if(formData['confirmPassword']!==formData['password']){
                alert("CONFIRM PASSWORD NOT EQUAL TO Password");
                return false;
            }
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

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      agreeTerms: !formData.agreeTerms,
    });
  };

  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log(formData);
    if( isFormValid()){
      const result=await createuser(formData);
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
        <h1 className=' text-xl font-extrabold text-center'>SIGNUP</h1>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

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

        {/* Confirm Password */}
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

       

        {/* Profile Picture (Optional) */}
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
            Profile Picture (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="URL of Profile Picture"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-gray-700 text-sm">
              I agree to the <span className="underline">Terms and Conditions</span>
            </span>
          </label>
        </div>
        <div className="text-sm font-semibold my-2">
          Already have an account?<span className="text-blue-800 hover:text-blue-600 cursor-pointer"
          onClick={()=>navigate('/login')}> Login</span>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // onClick={isFormValid()}
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default SignUp;

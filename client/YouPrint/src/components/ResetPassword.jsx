import React, { useState } from 'react'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    // Proceed with password reset logic
  }

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Réinitialiser votre mot de passe
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm mb-2 block">Nouveau mot de passe<span className='text-red-500'> *</span></label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    onChange={handleOnChange}
                    value={data.password}
                    type={showPassword ? "text" : "password"}
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen focus:ring-primaryGreen focus:border-primaryGreen"
                    placeholder="********"
                  />
                  {showPassword ? (
                    <FaRegEyeSlash onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                  ) : (
                    <FaRegEye onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Confirmer votre mot de passe<span className='text-red-500'> *</span></label>
                <div className="relative flex items-center">
                  <input
                    name="confirmPassword"
                    onChange={handleOnChange}
                    value={data.confirmPassword}
                    type={showPassword ? "text" : "password"}
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen focus:ring-primaryGreen focus:border-primaryGreen"
                    placeholder="********"
                  />
                  {showPassword ? (
                    <FaRegEyeSlash onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                  ) : (
                    <FaRegEye onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primaryGreen hover:opacity-90   focus:ring-primaryGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Réinitialiser le mot de passe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResetPassword;

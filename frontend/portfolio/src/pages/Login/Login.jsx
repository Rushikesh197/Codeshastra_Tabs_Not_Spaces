import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import investing from "../../assets/auth/investing.svg";
import predictiveAnalystics from "../../assets/auth/predictive_analytics.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, send the data to your authentication API
    console.log(formData); // Just logging the form data for now
    // After successful authentication, you can navigate to the dashboard using Link
  };

  return (
    <section id='login'>
      <main className='h-screen w-screen'>
        <h1 className='fixed text-center lg:text-left font-bold text-slate-100 text-2xl lg:pl-6 pt-6 container'>
          Portfolio Management
        </h1>
        <div className='flex justify-center items-center'>
          <div className='lg:w-1/2 w-full h-screen bg-violet-800'>
            <div className="lg:flex hidden justify-end flex-col h-full pl-16">
              <img src={predictiveAnalystics} alt="Predictive Analytics" width="350px" draggable={false} />
            </div>
          </div>
          <div className='lg:w-1/2 h-screen bg-white'>
            <div className="lg:flex justify-end pt-16 pr-16 hidden">
              <img src={investing} alt="Investing" width="350px" draggable={false} />
            </div>
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              {/* Use Link to navigate to the dashboard */}
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Go to Dashboard</Link>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Login;

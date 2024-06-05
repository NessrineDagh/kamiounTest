import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const newErrorMessage = event.target.value.length < 6 ? 'Error Message. ' : '';
    setErrorMessage(newErrorMessage); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (password.length < 6) {
      setErrorMessage('Error Message.');
      return; 
    }

    
    console.log('Form submitted successfully!', email, password);
    setEmail(''); 
    setPassword('');
    setErrorMessage(''); 
  };

  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-200 border-gray-200 shadow-2xl'>
      <h1 className='text-center text-xl font-semibold text-blue-500 mt-4 mb-4'>Create Account</h1>
      <p>Create your account in a second to receive our latest news!</p>
      <form onSubmit={handleSubmit}>
        <div className='mt-8'>
          <div>
            <label className='font-semibold'>Email</label>
            <input
              type='email'
              className={`form-input w-full border-2 rounded-xl mt-1 mb-4`}
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className='flex justify-between'>
              <label className='font-semibold'>Password</label>
              <label className='text-gray-400 font-thin'><i>At least 6 characters</i></label>
            </div>
            <input
              type='password'
              className={`form-input w-full border-2 rounded-xl mt-1 mb-4 ${
                errorMessage ? 'border-red-500' : 'border-2'
              }`}
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
            {errorMessage && (
              <p className='text-red-500 font-semibold text-sm mb-2 flex'>
                <svg class="h-5 w-5 mr-2 text-white fill-red-600" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                {errorMessage} <span class="underline font-thin">Learn More.</span>
              </p>)}
          </div>
          <div>
            <label className='font-semibold'>Year of experience</label>
            <select className='form-select w-full border-2 rounded-xl mt-1' name='experience' id="experience-select">
              <option value="">Please Select</option>
              <option value="0">0</option>
              <option value="1-3 years">1-3 years</option>
              <option value="4-6 years">4-6 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="above 10">above 10</option>
            </select>
          </div>
          <div className='mt-8'>
            <div>
              <input type="checkbox" className='form-checkbox border-2 rounded h-6 w-6 ' id='remember' />
              <label className='ml-2' for="remember">Remember Me</label>
            </div>
            <button className='w-full mt-6 font-medium text-white bg-blue-500 hover:bg-sky-700 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded p-1'>Create Account</button>
            
          </div>
        </div>
      </form>
    </div>

  );
}
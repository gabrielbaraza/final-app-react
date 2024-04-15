import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission, like sending the email address to a server
    console.log('Email submitted:', email);
  };

  return (
    <div className="bg-blue-100">
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
              
            />
          </div>
        </div>

       

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </form>

      
      <div className="mt-6">
        <a href="https://github.com/gabrielbaraza" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
    </div>
  );
};

export default Contact;

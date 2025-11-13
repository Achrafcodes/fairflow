import React from 'react';
import { Button } from '@material-tailwind/react';

export default function Login() {
  return (
    <div>
      <div className="flex mt-6 flex-col gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="●●●●●●●"
            name="password"
            required
            className="w-full px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>{' '}
        <div className="flex items-center text-sm">
          <input
            type="checkbox"
            id="terms"
            required
            className="w-4 h-4 mr-2 text-primary rounded focus:ring-0"
          />
          <label htmlFor="terms" className="text-gray-600">
            remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-black hover:bg-primary-dark cursor-pointer text-secondary font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
        >
          Register
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Donthave an account?
          <a
            href="/login"
            className="text-primary-dark  font-bold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

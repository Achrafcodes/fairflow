import React from 'react';
import { Button } from '@material-tailwind/react';

export default function Login() {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div>
          <label
            htmlFor="email"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="w-full px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>{' '}
      </div>
    </div>
  );
}

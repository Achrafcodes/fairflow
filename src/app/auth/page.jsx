'use client';
import { Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import Login from '../components/auth/Login';

export default function Page() {
  const [active, setActive] = useState('login');
  return (
    <main className="bg-primary h-screen flex flex-col justify-center items-center">
      <section className="flex flex-col items-center gap-4  w-fit justify-center ">
        <h1 className=" flex flex-row  gap-3  items-center">
          <Sparkles fontSize={16} />
          <span className="text-2xl">FairFlow</span>
        </h1>
        <h3 className="font-light text-primary-dark">
          Finance built for the way you live
        </h3>
      </section>
      <section className="w-[444px] p-6 bg-secondary rounded-2xl border-2 mt-8 border-solid   min-h-[200px]">
        <div>
          <h1 className="text-lg font-medium text-primary-dark"> Welcome</h1>
          <h4 className="font-thin text-secondary-dark">
            Sign in to your account or create a new one
          </h4>
        </div>
        <div className="flex flex-row justify-between bg-primary/30 rounded-full mt-6 items-center p-1">
          <button
            onClick={() => {
              setActive('login');
            }}
            className={`w-[177px] cursor-pointer  py-1 h-auto ${active == 'login' ? 'bg-secondary' : 'bg-transparent'}  rounded-full`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setActive('register');
            }}
            className={`w-[177px] cursor-pointer py-1  h-auto ${active == 'register' ? 'bg-secondary' : 'bg-transparent'}  rounded-full`}
          >
            Register
          </button>
        </div>
        <Login />
      </section>
    </main>
  );
}

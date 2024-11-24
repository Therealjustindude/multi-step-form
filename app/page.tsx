'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showGoBack, setShowGoBack] = useState(true);
  return (
    <div className="flex flex-col">
      {/* Mobile BG Image */}
      <div className="md:hidden absolute top-0 left-0 w-full h-[30%] bg-center z-[-20] bg-[url('/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover"/>
      <main className="flex-grow p-4">
        {/* Grid for desktop */}
        <div className="h-screen md:grid md:grid-cols-12 md:gap-4 md:h-[97vh]">
          {/* Desktop steps */}
          <nav className="md:block hidden bg-[url('/bg-sidebar-desktop.svg')] bg-cover bg-center p-4 md:col-span-4 md:h-[97vh] flex flex-col items-start justify-between rounded-xl">
            <ul className="font-bold">
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
            </ul>
          </nav>
          {/* Mobile steps */}
          <nav className="md:hidden mb-12 mt-4 p-1 flex justify-center">
            <ul className="flex gap-4">
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
            </ul>
          </nav>

          {/* Form Content */}
          <div className="md:col-span-8 p-6 bg-white rounded-xl shadow-md flex flex-col justify-between h-auto">
            <form>
              {/* Form fields go here */}
              <div className="space-y-4">
                <label>Step Content</label>
                <input type="text" placeholder="Enter something..." className="input-field" />
              </div>
            </form>

            {/* Desktop Next and Go Back buttons */}
            <div className="flex justify-between items-center mt-8 hidden md:flex">
              <button className="btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue" style={{ visibility: showGoBack ? 'visible': 'hidden' }}>Go Back</button>
              <button className="btn ml-auto">Next Step</button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Next and Go Back buttons */}
      <footer className="sticky bottom-0 w-full bg-white p-4 border-t shadow md:hidden flex items-center justify-between">
        <button className="btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue" style={{ visibility: showGoBack ? 'visible': 'hidden' }}>Go Back</button>
        <button className="ml-auto">Next Step</button>
      </footer>
    </div>
  );
}



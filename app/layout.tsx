// app/layout.tsx
"use client"
import "./globals.css"
import Link from "next/link"
import { useState } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <html lang="en">
      <body>
        {/* Header / Navbar */}
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur border-b shadow z-50">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <h1 className="font-extrabold text-xl text-blue-700">Navnath</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 font-medium text-gray-800">
              <a href="#home" className="hover:text-blue-600">Home</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col space-y-1 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
            </button>
          </nav>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-white border-t shadow-md">
              <div className="flex flex-col items-center space-y-4 py-6 font-medium text-gray-800">
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="">{children}</main>

        {/* Footer */}
        <footer className="border-t text-center py-4 text-gray-600">
          © {new Date().getFullYear()} Navnath Bhorde. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

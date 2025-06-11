import React, { useState } from 'react';
import { Menu, X, Home, User, Settings, Mail } from 'lucide-react';
import { useAuth } from '../store/auth';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isLogin,user} = useAuth()


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <Home size={18} />
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <User size={18} />
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <Settings size={18} />
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <Mail size={18} />
                Contact
              </a>  
               {isLogin ?
               <a href="/logut" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              
                Logout
              </a>:<>
               <a href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              
                Login
              </a> 
              <a href="/register" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              
                Register
              </a>
              
              
              </>}
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">MyWebsite</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Aapka digital sapno ka ghar. Hum modern technology aur creativity ke saath 
              aapke business ko naye heights tak le jaते hैं।
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hamare Features</h2>
            <p className="text-gray-600 text-lg">Jo cheezein hume special banati hain</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-gray-600">Latest trends ke saath responsive aur beautiful designs</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-gray-600">Lightning fast loading aur smooth user experience</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Hamesha available customer support aur assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">Aaj hi shuru karte hain aapka digital journey</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
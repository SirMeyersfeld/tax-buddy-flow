
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, MessageCircle } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-taxflow-blue">Tax<span className="text-taxflow-darkblue">Flow</span></span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-taxflow-blue font-medium">Home</Link>
          <Link to="/calculator" className="text-gray-600 hover:text-taxflow-blue font-medium flex items-center">
            <Calculator size={18} className="mr-1" /> Calculator
          </Link>
          <Link to="/assistant" className="text-gray-600 hover:text-taxflow-blue font-medium flex items-center">
            <MessageCircle size={18} className="mr-1" /> AI Assistant
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

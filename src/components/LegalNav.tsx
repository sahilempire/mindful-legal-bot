
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LegalNavProps {
  className?: string;
  showBackButton?: boolean;
}

const LegalNav: React.FC<LegalNavProps> = ({ className, showBackButton = false }) => {
  return (
    <nav className={cn('flex items-center justify-between py-4 px-6 w-full', className)}>
      <div className="flex items-center">
        {showBackButton && (
          <Link to="/" className="mr-4 text-gray-300 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
        <h1 className="text-xl font-serif font-bold">
          <span className="text-legal-teal">Mindful</span>
          <span className="text-white">Legal</span>
        </h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/#features" className="text-sm text-gray-300 hover:text-legal-teal transition duration-200">Features</Link>
        <Link to="/#services" className="text-sm text-gray-300 hover:text-legal-teal transition duration-200">Services</Link>
        <Link to="/#about" className="text-sm text-gray-300 hover:text-legal-teal transition duration-200">About</Link>
        <Link to="/app" className="text-sm text-gray-300 hover:text-legal-teal transition duration-200">App</Link>
      </div>
      
      <button className="hidden md:inline-flex items-center px-4 py-2 bg-legal-teal text-white rounded-md hover:bg-opacity-90 transition duration-200">
        Login
      </button>
    </nav>
  );
};

export default LegalNav;

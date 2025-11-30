import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function TeamFooter() {
  return (
    <div className="mt-16 text-center">
      <a 
        to="#" 
        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-md"
      >
        View All Team Members
        <ChevronRight className="ml-2 w-5 h-5" />
      </a>
    </div>
  );
}



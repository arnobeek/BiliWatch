// components/MobileComparison.jsx
import React from 'react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function MobileComparison({ comparisonData }) {
  return (
    <div className="md:hidden space-y-10">
      {/* Traditional Blood Testing Card */}
      <div className="glass-card p-6 rounded-xl border border-gray-100 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
            <XCircle className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-secondary">Traditional Blood Testing</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          {comparisonData.map((item, index) => (
            <li key={`traditional-${index}`} className="flex items-start">
              <span className="text-red-500 mr-3 mt-1 flex-shrink-0">✖</span>
              <span>{item.traditional}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Arrow between cards */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
          <ArrowRight className="w-6 h-6 text-secondary" />
        </div>
      </div>
      
      {/* BiliWatch Card */}
      <div className="glass-card p-6 rounded-xl border border-gray-100 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-secondary">BiliWatch</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          {comparisonData.map((item, index) => (
            <li key={`biliwatch-${index}`} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
              <span>{item.biliwatch}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

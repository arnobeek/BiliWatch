// components/DesktopComparison.jsx
import React from 'react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function DesktopComparison({ comparisonData }) {
  return (
    <div className="hidden md:block">
      <div className="glass-card overflow-hidden rounded-xl border border-gray-100 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="grid grid-cols-7">
          <div className="col-span-3 bg-gray-50 p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary">Traditional Blood Testing</h3>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
              <ArrowRight className="w-6 h-6 text-secondary" />
            </div>
          </div>
          <div className="col-span-3 bg-gradient-to-br from-secondary to-primary bg-opacity-5 p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white">BiliWatch</h3>
            </div>
          </div>
        </div>
        
        {comparisonData.map((item, index) => (
          <div key={index} className={`grid grid-cols-7 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="col-span-3 p-6 border-t border-gray-100">
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1 flex-shrink-0">✖</span>
                <div>
                  <p className="font-medium text-gray-900 mb-1">{item.label}</p>
                  <p className="text-gray-700">{item.traditional}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center border-t border-gray-100">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="col-span-3 p-6 border-t border-gray-100 bg-opacity-5">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <div>
                  <p className="font-medium text-gray-900 mb-1">{item.label}</p>
                  <p className="text-gray-700">{item.biliwatch}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

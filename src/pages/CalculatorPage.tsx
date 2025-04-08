
import React from 'react';
import NavBar from "@/components/NavBar";
import TaxCalculator from "@/components/TaxCalculator/Calculator";

const CalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Tax Calculator</h1>
            <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Estimate your tax liability based on your business income, expenses, and entity type. 
              This calculator provides a simplified estimate for planning purposes.
            </p>
            
            <TaxCalculator />
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Important Note</h3>
              <p className="text-sm text-blue-700">
                This calculator provides estimates only and should not be used as a substitute for professional tax advice. 
                Tax laws change frequently and vary by location. For accurate tax planning, please consult a certified tax professional.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} TaxFlow. For demonstration purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default CalculatorPage;

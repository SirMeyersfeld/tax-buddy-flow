
import React from 'react';
import NavBar from "@/components/NavBar";
import AssistantChat from "@/components/AIAssistant/AssistantChat";

const AssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">AI Tax Assistant</h1>
            <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Get instant answers to your tax questions. Our AI assistant can help with general 
              tax information for freelancers and small businesses.
            </p>
            
            <AssistantChat />
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">AI Assistant Capabilities</h3>
              <p className="text-sm text-blue-700 mb-2">
                Our AI assistant can provide general guidance on common tax topics including:
              </p>
              <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
                <li>Tax deductions for freelancers and small businesses</li>
                <li>Quarterly estimated tax payments</li>
                <li>Home office deductions</li>
                <li>Business expense tracking</li>
                <li>1099 vs W-2 income</li>
                <li>LLC and business structure considerations</li>
              </ul>
              <p className="text-sm text-blue-700 mt-3">
                For personalized tax advice specific to your situation, please consult a tax professional.
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

export default AssistantPage;

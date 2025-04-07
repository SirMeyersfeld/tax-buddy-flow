
import React from 'react';
import NavBar from "@/components/NavBar";
import FeatureCard from "@/components/Dashboard/FeatureCard";
import { Calculator, MessageCircle, Info } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-taxflow-blue to-taxflow-darkblue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Simplify Your Taxes with TaxFlow</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Smart tax assistance for freelancers and small businesses
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/calculator" 
                  className="bg-white text-taxflow-darkblue font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Try Tax Calculator
                </a>
                <a 
                  href="/assistant" 
                  className="bg-taxflow-orange text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Ask AI Assistant
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Simplify Your Tax Journey</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Tax Calculator" 
                description="Estimate your quarterly or annual tax liability based on your income, expenses, and business type."
                icon={<Calculator size={24} />}
                link="/calculator"
              />
              
              <FeatureCard 
                title="AI Tax Assistant" 
                description="Get instant answers to your tax questions with our AI-powered tax assistant."
                icon={<MessageCircle size={24} />}
                link="/assistant"
                gradient="from-taxflow-orange to-yellow-500"
              />
              
              <FeatureCard 
                title="Tax Knowledge Base" 
                description="Access our comprehensive library of tax resources specifically for freelancers and small businesses."
                icon={<Info size={24} />}
                link="/assistant"
                gradient="from-taxflow-green to-green-400"
              />
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose TaxFlow?</h2>
              <p className="text-gray-600 mb-12">
                TaxFlow helps you navigate tax season with confidence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Save Time", description: "Automate tax calculations and get instant answers" },
                { title: "Reduce Stress", description: "Take the anxiety out of tax preparation" },
                { title: "Maximize Deductions", description: "Ensure you're claiming all eligible business expenses" },
                { title: "Stay Compliant", description: "Keep up with tax deadlines and requirements" }
              ].map((benefit, index) => (
                <div key={index} className="taxflow-card text-center">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-bold mb-2">Tax<span className="text-taxflow-blue">Flow</span></p>
            <p className="text-sm opacity-70">© {new Date().getFullYear()} TaxFlow. All rights reserved.</p>
            <p className="text-xs mt-2 opacity-50">For demonstration purposes only. Not financial advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

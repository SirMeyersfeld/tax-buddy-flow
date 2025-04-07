
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator as CalcIcon } from "lucide-react";

const TaxCalculator: React.FC = () => {
  const [income, setIncome] = useState<string>("");
  const [expenses, setExpenses] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("selfEmployed");
  const [taxEstimate, setTaxEstimate] = useState<number | null>(null);

  const handleCalculate = () => {
    const incomeNum = parseFloat(income) || 0;
    const expensesNum = parseFloat(expenses) || 0;
    
    const taxableIncome = Math.max(0, incomeNum - expensesNum);
    
    // This is a simplified calculation just for demo purposes
    let estimatedTax = 0;
    
    if (businessType === "selfEmployed") {
      // Self-employment tax ~15.3% plus simplified income tax estimate
      const selfEmploymentTax = taxableIncome * 0.153;
      const incomeTax = taxableIncome * 0.15; // Simplified rate
      estimatedTax = selfEmploymentTax + incomeTax;
    } else if (businessType === "llc") {
      // Pass-through taxation, simplified
      estimatedTax = taxableIncome * 0.25;
    } else {
      // Corporation
      estimatedTax = taxableIncome * 0.21; // Corporate tax rate
    }
    
    setTaxEstimate(Math.round(estimatedTax * 100) / 100);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center mb-2">
          <div className="bg-gradient-to-r from-taxflow-blue to-taxflow-darkblue p-2 rounded-full mr-3">
            <CalcIcon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Tax Estimator</CardTitle>
        </div>
        <CardDescription>
          Estimate your tax liability based on your business income and expenses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="income">Annual Income ($)</Label>
            <Input
              id="income"
              placeholder="Enter your gross income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expenses">Business Expenses ($)</Label>
            <Input
              id="expenses"
              placeholder="Enter your deductible expenses"
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Business Type</Label>
            <RadioGroup 
              value={businessType} 
              onValueChange={setBusinessType}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="selfEmployed" id="selfEmployed" />
                <Label htmlFor="selfEmployed" className="cursor-pointer">Self Employed / Sole Proprietor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="llc" id="llc" />
                <Label htmlFor="llc" className="cursor-pointer">LLC / Partnership</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="corporation" id="corporation" />
                <Label htmlFor="corporation" className="cursor-pointer">Corporation</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button 
            className="w-full bg-taxflow-blue hover:bg-taxflow-darkblue" 
            onClick={handleCalculate}
          >
            Calculate Estimated Tax
          </Button>
          
          {taxEstimate !== null && (
            <div className="mt-6 p-4 bg-taxflow-lightgray rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-700">Estimated Tax Liability</h3>
              <p className="text-3xl font-bold text-taxflow-darkblue">
                ${taxEstimate.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                This is a simplified estimate. Consult a tax professional for personalized advice.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCalculator;

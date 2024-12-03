import { useState } from "react";
import { useForm } from "react-hook-form";
import SEO from "../components/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CalculatorForm {
  weight: number;
  length: number;
  width: number;
  height: number;
  source: string;
  destination: string;
}

const Logistics = () => {
  const [price, setPrice] = useState<number | null>(null);
  const { register, handleSubmit } = useForm<CalculatorForm>();

  const calculatePrice = (data: CalculatorForm) => {
    // Demo calculation - in real world this would call an API
    const volume = data.length * data.width * data.height;
    const baseRate = 10; // Base rate per kg
    const volumetricWeight = volume / 5000; // Industry standard volumetric divisor
    const actualWeight = Math.max(volumetricWeight, data.weight);
    
    // Distance factor (simplified for demo)
    const distanceFactor = Math.random() * (2 - 1.2) + 1.2;
    
    const estimatedPrice = actualWeight * baseRate * distanceFactor;
    setPrice(Math.round(estimatedPrice * 100) / 100);
    toast.success("Price calculated successfully!");
  };

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Logistics Calculator" 
        description="Calculate shipping costs instantly with SendVoy's logistics calculator."
        type="Service"
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Shipping Calculator</h1>
          
          <form onSubmit={handleSubmit(calculatePrice)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Weight (kg)</label>
                <Input type="number" step="0.1" {...register("weight", { required: true })} />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Length (cm)</label>
                <Input type="number" {...register("length", { required: true })} />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Width (cm)</label>
                <Input type="number" {...register("width", { required: true })} />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Height (cm)</label>
                <Input type="number" {...register("height", { required: true })} />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Source Location</label>
                <Input {...register("source", { required: true })} placeholder="Enter city or address" />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Destination</label>
                <Input {...register("destination", { required: true })} placeholder="Enter city or address" />
              </div>
            </div>
            
            <Button type="submit" className="w-full">Calculate Price</Button>
          </form>
          
          {price !== null && (
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <h3 className="text-xl font-semibold">Estimated Price</h3>
              <p className="text-3xl font-bold text-primary">${price}</p>
              <p className="text-sm text-gray-600 mt-2">
                *This is an estimated price. Final price may vary based on additional factors.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logistics;
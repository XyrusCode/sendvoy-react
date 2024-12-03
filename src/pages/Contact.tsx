import { useState } from "react";
import { useForm } from "react-hook-form";
import SEO from "../components/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent successfully!");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with SendVoy for all your logistics needs and inquiries."
        type="ContactPage"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8 space-y-6">
            <h1 className="text-4xl font-bold gradient-text">Get in Touch</h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Name</label>
                <Input {...register("name", { required: true })} />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Email</label>
                <Input type="email" {...register("email", { required: true })} />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Subject</label>
                <Input {...register("subject", { required: true })} />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Message</label>
                <Textarea {...register("message", { required: true })} rows={4} />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="glass-card p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Address:</span>
                  <span>123 Logistics Way, Shipping City, SC 12345</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:contact@sendvoy.com" className="text-primary hover:underline">
                    contact@sendvoy.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    (123) 456-7890
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
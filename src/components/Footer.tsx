import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-background/80 backdrop-blur-sm border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About SendVoy</h3>
            <p className="text-sm text-muted-foreground">
              Revolutionizing logistics through innovation and reliability. We connect businesses worldwide with seamless shipping solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/logistics" className="text-sm text-muted-foreground hover:text-primary">Logistics</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Global Shipping</li>
              <li className="text-sm text-muted-foreground">Express Delivery</li>
              <li className="text-sm text-muted-foreground">Cargo Services</li>
              <li className="text-sm text-muted-foreground">Tracking System</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">contact@sendvoy.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">123 Logistics Ave, CA 90210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 SendVoy. All rights reserved.</p>
          <p className="mt-2">
            Built by <a href="https://xyruscode.com.ng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">XyrusCode</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
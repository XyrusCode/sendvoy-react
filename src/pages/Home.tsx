import { ArrowRight, Package, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                Fast & Reliable
                <span className="block text-primary">Logistics Solutions</span>
              </h1>
              <p className="text-lg text-gray-600">
                Experience seamless shipping and logistics services with SendVoy.
                We deliver your packages safely and on time, every time.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/logistics"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg"
                alt="Logistics Illustration"
                className="w-full animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              Comprehensive logistics solutions for all your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="w-12 h-12 text-primary" />,
                title: "Package Delivery",
                description:
                  "Safe and secure delivery of your packages to any destination",
              },
              {
                icon: <Truck className="w-12 h-12 text-primary" />,
                title: "Freight Services",
                description:
                  "Efficient transportation of large cargo and freight shipments",
              },
              {
                icon: <Clock className="w-12 h-12 text-primary" />,
                title: "Express Shipping",
                description:
                  "Fast delivery options for time-sensitive packages",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
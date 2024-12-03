import SEO from "../components/SEO";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="About Us" 
        description="Learn about SendVoy's mission to revolutionize logistics through innovation and reliability."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 space-y-8">
          <h1 className="text-4xl font-bold gradient-text">About SendVoy</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2020, SendVoy emerged from a simple vision: to make logistics seamless, 
                transparent, and efficient for businesses and individuals alike. What started as a 
                local delivery service has grown into a global logistics powerhouse.
              </p>
              
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-gray-700">
                We strive to revolutionize the logistics industry through innovative technology 
                and unwavering commitment to customer satisfaction. Our goal is to connect the 
                world through reliable, sustainable, and cost-effective delivery solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Values</h2>
              <ul className="space-y-4">
                {[
                  "Innovation in Every Step",
                  "Customer-First Approach",
                  "Reliability & Trust",
                  "Environmental Responsibility",
                  "Global Connectivity"
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
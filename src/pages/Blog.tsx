import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Logistics: AI and Automation",
    excerpt: "Discover how artificial intelligence and automation are revolutionizing the logistics industry...",
    date: "2024-02-15",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "Sustainable Shipping: A Green Revolution",
    excerpt: "Learn about the latest innovations in eco-friendly shipping and how they're changing the industry...",
    date: "2024-02-10",
    readTime: "4 min read",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Global Supply Chain Trends 2024",
    excerpt: "Stay ahead of the curve with our analysis of the latest trends shaping global supply chains...",
    date: "2024-02-05",
    readTime: "6 min read",
    category: "Industry Insights"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Blog" 
        description="Stay updated with the latest news and insights from the logistics industry."
        type="Blog"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Latest Updates</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-600">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`} className="text-primary hover:underline">
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
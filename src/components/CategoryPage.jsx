import React, { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';

const CategoryPage = ({ category = "Technology" }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Sample category data
  const categoryData = {
    Technology: {
      title: "Technology",
      description: "The latest in tech innovation, digital trends, and industry developments",
      color: "bg-purple-600",
      articles: [
        {
          id: 201,
          title: "Tech Giant Unveils Revolutionary AI Assistant",
          excerpt: "The new AI system can understand and generate human-like text, code, and creative content.",
          image: "/api/placeholder/600/400",
          date: "April 14, 2025",
          author: "Alex Morgan",
          readTime: "4 min read"
        },
        {
          id: 202,
          title: "Breakthrough in Quantum Computing Announced",
          excerpt: "Scientists have achieved quantum supremacy with a processor that can solve problems conventional computers cannot.",
          image: "/api/placeholder/600/400",
          date: "April 13, 2025",
          author: "Riva Patel",
          readTime: "6 min read"
        },
        {
          id: 203,
          title: "New Wearable Tech Monitors Health Biomarkers in Real-Time",
          excerpt: "The innovative device can track various health metrics without invasive procedures.",
          image: "/api/placeholder/600/400",
          date: "April 12, 2025",
          author: "David Chen",
          readTime: "5 min read"
        },
        {
          id: 204,
          title: "Major Security Vulnerability Discovered in Popular Apps",
          excerpt: "Cybersecurity experts warn users to update their software immediately.",
          image: "/api/placeholder/600/400",
          date: "April 11, 2025",
          author: "Jasmine Wu",
          readTime: "3 min read"
        },
        {
          id: 205,
          title: "Electric Vehicle Battery Technology Makes Leap Forward",
          excerpt: "New battery design promises 500-mile range and 15-minute charging time.",
          image: "/api/placeholder/600/400",
          date: "April 10, 2025",
          author: "Marcus Johnson",
          readTime: "7 min read"
        },
        {
          id: 206,
          title: "Tech Industry Faces New Regulatory Challenges",
          excerpt: "Lawmakers propose comprehensive framework for AI and data privacy.",
          image: "/api/placeholder/600/400",
          date: "April 9, 2025",
          author: "Elena Rodriguez",
          readTime: "5 min read"
        }
      ]
    }
  };
  
  const currentCategory = categoryData[category];
  
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-10">
        <div className="mb-4">
          <span className={`inline-block ${currentCategory.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {currentCategory.title}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {currentCategory.title} News
        </h1>
        
        <p className="text-xl text-gray-600 mb-6 max-w-3xl">
          {currentCategory.description}
        </p>
        
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <div className="flex items-center">
            <button 
              onClick={toggleFilter}
              className="flex items-center text-gray-600 hover:text-blue-600 mr-6"
            >
              <Filter className="h-5 w-5 mr-2" />
              <span>Filter</span>
            </button>
            
            <div className="flex items-center border rounded-md overflow-hidden">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="text-gray-500">
            {currentCategory.articles.length} articles
          </div>
        </div>
      </div>
      
      {/* Filters panel (conditionally shown) */}
      {filterOpen && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Trending</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                <option>Any Time</option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Category</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                <option>All Topics</option>
                <option>AI & Machine Learning</option>
                <option>Cybersecurity</option>
                <option>Consumer Electronics</option>
                <option>Software Development</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Apply Filters
            </button>
          </div>
        </div>
      )}
      
      {/* Articles Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.articles.map(article => (
            <a 
              key={article.id}
              href={`/article/${article.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover" 
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {currentCategory.articles.map(article => (
            <a 
              key={article.id}
              href={`/article/${article.id}`}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover" 
                  />
                </div>
                <div className="p-4 md:p-6 md:w-3/4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-4">{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
      
      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="flex items-center space-x-2">
          <a href="#" className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
            Previous
          </a>
          <a href="#" className="px-3 py-1 rounded-md bg-blue-600 text-white">1</a>
          <a href="#" className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">2</a>
          <a href="#" className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">3</a>
          <span className="px-3 py-1">...</span>
          <a href="#" className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">8</a>
          <a href="#" className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
            Next
          </a>
        </nav>
      </div>
    </div>
  );
};

export default CategoryPage;
import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';

const TrendingSidebar = () => {
  const trendingTopics = [
    { id: 1, tag: "Climate Crisis", count: 245 },
    { id: 2, tag: "Tech Innovation", count: 187 },
    { id: 3, tag: "Global Economy", count: 156 },
    { id: 4, tag: "Healthcare Reform", count: 134 },
    { id: 5, tag: "Space Exploration", count: 112 },
    { id: 6, tag: "Digital Privacy", count: 96 },
    { id: 7, tag: "Renewable Energy", count: 85 },
    { id: 8, tag: "Sports Updates", count: 79 }
  ];
  
  const trendingArticles = [
    {
      id: 101,
      title: "New Study Reveals Breakthrough in Renewable Energy Storage",
      views: "32K"
    },
    {
      id: 102,
      title: "Major Political Shift as Reform Bill Passes Senate Vote",
      views: "28K"
    },
    {
      id: 103,
      title: "Space Agency Announces Plans for Mars Mission",
      views: "25K"
    }
  ];

  return (
    <aside className="bg-gray-50 rounded-lg shadow-md p-5 lg:p-6">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-5 w-5 text-red-500 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Trending Now</h2>
      </div>
      
      {/* Trending Topics/Tags */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map(topic => (
            <a
              key={topic.id}
              href={`/topic/${topic.tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm hover:bg-blue-50 hover:border-blue-200 transition duration-300"
            >
              {topic.tag}
              <span className="ml-1 text-xs text-gray-500">({topic.count})</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Most Read Articles */}
      <div>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Most Read</h3>
        <div className="space-y-4">
          {trendingArticles.map(article => (
            <a 
              key={article.id}
              href={`/article/${article.id}`}
              className="block bg-white border border-gray-100 rounded-lg p-3 hover:shadow-md transition duration-300 "
            >
              <h4 className="font-medium text-gray-900 line-clamp-2 mb-2">{article.title}</h4>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Read Full Story
                </span>
                <span>{article.views} views</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Newsletter Signup Teaser */}
      <div className="mt-8 bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4 rounded-lg">
        <h3 className="font-bold mb-2">Stay Updated</h3>
        <p className="text-sm text-blue-100 mb-3">Get the latest news delivered to your inbox daily</p>
        <a 
          href="/newsletter" 
          className="inline-block bg-white text-blue-800   text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-200 transition duration-300"
        >
          Subscribe Now
        </a>
      </div>
    </aside>
  );
};

export default TrendingSidebar;
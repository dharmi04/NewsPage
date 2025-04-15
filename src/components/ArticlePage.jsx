import React, { useEffect } from 'react';
import { Calendar, Clock, User, Share2, ThumbsUp, MessageSquare, Bookmark } from 'lucide-react';

const ArticlePage = () => {
  // Sample article data - would come from an API in a real application
  const article = {
    id: 1,
    title: "Global Climate Conference Reaches Historic Agreement",
    excerpt: "World leaders have agreed to unprecedented measures to combat climate change in a landmark decision at the annual climate summit.",
    content: `
      <p>In a dramatic conclusion to two weeks of intense negotiations, nearly 200 countries reached a historic agreement to accelerate the global transition to clean energy and significantly reduce greenhouse gas emissions by 2030.</p>
      
      <p>The agreement, which has been hailed as a turning point in international climate cooperation, includes binding commitments from both developed and developing nations to phase out coal power generation and end fossil fuel subsidies within the next decade.</p>
      
      <p>"This is a pivotal moment for our planet," said UN Secretary-General in his closing remarks. "For the first time, we have a truly global commitment that matches the scale of the challenge we face."</p>
      
      <h2>Key Points of the Agreement</h2>
      
      <p>The landmark deal includes several breakthrough provisions:</p>
      
      <ul>
        <li>A commitment to limit global warming to 1.5 degrees Celsius above pre-industrial levels</li>
        <li>A global carbon pricing framework to be implemented by 2027</li>
        <li>A $100 billion annual fund to help developing nations adapt to climate impacts</li>
        <li>Legally binding emissions reduction targets for all signatory countries</li>
      </ul>
      
      <p>Experts suggest that if fully implemented, the measures could reduce projected global emissions in 2030 by nearly 45% compared to current trajectories.</p>
      
      <p>However, some environmental activists have criticized the agreement for not going far enough, pointing to loopholes in enforcement mechanisms and timeline exceptions granted to certain nations.</p>
    `,
    author: "Samantha Chen",
    authorRole: "Environmental Correspondent",
    publishDate: "April 14, 2025",
    readTime: "6 min read",
    category: "World",
    tags: ["Climate Crisis", "Global Policy", "Environment"],
    featuredImage: "/api/placeholder/1200/600",
    views: 34528,
    likes: 1842,
    comments: 327
  };
  
  const relatedArticles = [
    {
      id: 10,
      title: "Climate Activists Stage Global Protests Following Conference",
      image: "/api/placeholder/400/200",
      category: "World"
    },
    {
      id: 11,
      title: "Analysis: Economic Impact of the New Climate Agreement",
      image: "/api/placeholder/400/200",
      category: "Business"
    },
    {
      id: 12,
      title: "Tech Companies Pledge Carbon Neutrality by 2027",
      image: "/api/placeholder/400/200",
      category: "Technology"
    }
  ];

  useEffect(() => {
    // For animations, could add GSAP or Framer Motion effects here
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center text-gray-500 text-sm gap-y-2">
            <div className="flex items-center mr-6">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center mr-6">
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime}</span>
            </div>
            
            <div className="flex ml-auto">
              <button className="p-1 hover:text-blue-600 transition-colors duration-300">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-1 ml-2 hover:text-blue-600 transition-colors duration-300">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={article.featuredImage} 
            alt={article.title}
            className="w-full h-auto"
          />
        </div>
        
        {/* Article Content */}
        <div 
          className="prose lg:prose-lg max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Related Topics:</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <a 
                key={index}
                href={`/topic/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition-colors duration-300"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
        
        {/* Engagement Stats */}
        <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-10">
          <div className="flex space-x-6">
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <ThumbsUp className="h-5 w-5 mr-2" />
              <span>{article.likes.toLocaleString()}</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>{article.comments.toLocaleString()}</span>
            </button>
          </div>
          <div className="text-gray-500 text-sm">
            {article.views.toLocaleString()} views
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-start mb-10">
          <img 
            src="/api/placeholder/80/80" 
            alt={article.author}
            className="w-16 h-16 rounded-full object-cover mr-4" 
          />
          <div>
            <h3 className="font-bold text-lg">{article.author}</h3>
            <p className="text-gray-600 text-sm mb-2">{article.authorRole}</p>
            <p className="text-gray-700">
              Environmental journalist covering climate policy, international agreements, and ecological developments. Previously reported for The Global Times and EcoWatch.
            </p>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map(article => (
            <a 
              key={article.id}
              href={`/article/${article.id}`}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <span className="text-xs font-medium text-blue-600 mb-2 block">
                  {article.category}
                </span>
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
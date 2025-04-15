import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import climatechange from '../assets/climatechange.jpg'
import stock from '../assets/stockmarket.jpg'
import ai from '../assets/ai.jpeg'
import vk from '../assets/vk.jpg'
import fi from '../assets/fi.jpg'
const HeroSection = () => {
  const featuredStory = {
    id: 1,
    title: "Global Climate Conference Reaches Historic Agreement",
    excerpt: "World leaders have agreed to unprecedented measures to combat climate change in a landmark decision at the annual climate summit.",
    image: climatechange,
    category: "World",
    date: "April 14, 2025"
  };
  
  const topStories = [
    {
      id: 2,
      title: "Tech Giant Unveils Revolutionary AI Assistant",
      image: ai,
      category: "Technology"
    },
    {
      id: 3,
      title: "Major Sports League Announces Expansion Teams",
      image: vk,
      category: "Sports"
    },
    {
      id: 4,
      title: "Film Industry Celebrates Record-Breaking Box Office Year",
      image: fi,
      category: "Entertainment"
    },
    {
      id: 5,
      title: "Stock Markets Rally Amid Positive Economic Forecasts",
      image: stock,
      category: "Business"
    }
  ];

  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-8" ref={heroRef}>
     <div className="transition-all duration-700 transform opacity-100 translate-y-10">
        {/* Featured Story */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="md:flex">
            <div className="md:w-2/3 relative">
              <img 
                src={featuredStory.image} 
                alt="Featured story" 
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredStory.category}
                </span>
              </div>
            </div>
            
            <div className="md:w-1/3 p-6 flex flex-col justify-center">
              <div className="text-sm text-gray-500 mb-2">{featuredStory.date}</div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredStory.title}
              </h1>
              <p className="text-gray-700 mb-6">
                {featuredStory.excerpt}
              </p>
              <a 
                href={`/article/${featuredStory.id}`} 
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Top Stories Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topStories.map(story => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{story.title}</h3>
                <a 
                  href={`/article/${story.id}`}
                  className="inline-flex items-center text-blue-600 text-sm font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
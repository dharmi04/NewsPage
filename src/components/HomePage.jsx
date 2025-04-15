import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TrendingSidebar from './TrendingSidebar';
import ArticleCard from './ArticleCard';
import Footer from './Footer';

// Import GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const articles = [
    {
      id: 1,
      title: "How Artificial Intelligence is Reshaping Modern Healthcare Systems",
      excerpt: "New AI developments are transforming diagnosis, treatment, and patient care across hospitals worldwide.",
      image: "/api/placeholder/400/300", // Article thumbnail image
      category: "Technology",
      date: "April 15, 2025",
      author: {
        name: "Sarah Johnson",
        avatar: "/api/placeholder/50/50", // Author avatar (square)
      },
      readTime: 5,
      comments: 24,
    },
    {
      id: 2,
      title: "Global Markets React to New Trade Agreement Between US and Europe",
      excerpt: "Stock markets surge as details of the landmark trade deal emerge, promising economic boost.",
      image: "/api/placeholder/400/300", // Article thumbnail image
      category: "Business",
      date: "April 14, 2025",
      author: {
        name: "Michael Chen",
        avatar: "/api/placeholder/50/50", // Author avatar (square)
      },
      readTime: 4,
      comments: 18,
    },
    {
      id: 3,
      title: "Major Breakthrough in Renewable Energy Storage Announced",
      excerpt: "Scientists develop new battery technology that could solve intermittency issues in solar and wind power.",
      image: "/api/placeholder/400/300", // Article thumbnail image
      category: "Science",
      date: "April 14, 2025",
      author: {
        name: "Emily Roberts",
        avatar: "/api/placeholder/50/50", // Author avatar (square)
      },
      readTime: 6,
      comments: 32,
    },
    {
      id: 4,
      title: "Olympic Committee Reveals Host City for 2036 Summer Games",
      excerpt: "After intense competition between five cities, the final decision has been announced.",
      image: "/api/placeholder/400/300", // Article thumbnail image
      category: "Sports",
      date: "April 13, 2025",
      author: {
        name: "James Wilson",
        avatar: "/api/placeholder/50/50", // Author avatar (square)
      },
      readTime: 3,
      comments: 41,
    },
    {
      id: 5,
      title: "Entertainment Industry Embraces Virtual Production Technologies",
      excerpt: "How LED walls and real-time rendering are transforming film and television production.",
      image: "/api/placeholder/400/300", // Article thumbnail image
      category: "Entertainment",
      date: "April 12, 2025",
      author: {
        name: "Lisa Rodriguez",
        avatar: "/api/placeholder/50/50", // Author avatar (square)
      },
      readTime: 7,
      comments: 15,
    },
    {
      id: 6,
      title: "New Constitutional Amendment Proposed to Address Digital Privacy",
      excerpt: "Lawmakers introduce legislation aimed at establishing fundamental rights in the digital age.",
      image: "/api/placeholder/400/300", // Article thumbnail image
      category: "Politics",
      date: "April 11, 2025",
      author: {
        name: "David Wright",
        avatar: "/api/placeholder/50/50", // Author avatar (square)
      },
      readTime: 8,
      comments: 63,
    },
  ];

  const categories = [
    "Politics", "Technology", "Sports", "Entertainment", "Business", "World"
  ];

  // GSAP animations
  useEffect(() => {
    // Animate article cards on scroll
    gsap.fromTo(
      ".article-section .article-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".article-section",
          start: "top 80%",
        },
      }
    );

    // Animate categories on scroll
    gsap.fromTo(
      ".categories-section .category-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".categories-section",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Pills */}
        <div className="categories-section mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Browse Categories</h2>
            <a href="/categories" className="text-blue-600 hover:underline text-sm font-medium">
              View All
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/category/${category.toLowerCase()}`}
                className="category-item bg-white border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Articles Grid */}
          <div className="article-section flex-grow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <div key={article.id} className="article-card">
                  <ArticleCard article={article} featured={index === 0} />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <TrendingSidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState([]);
  
  const availableCategories = [
    { id: 'politics', name: 'Politics' },
    { id: 'technology', name: 'Technology' },
    { id: 'sports', name: 'Sports' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'business', name: 'Business' },
    { id: 'world', name: 'World News' }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log({ email, categories });
    setSubmitted(true);
  };
  
  const toggleCategory = (categoryId) => {
    if (categories.includes(categoryId)) {
      setCategories(categories.filter(id => id !== categoryId));
    } else {
      setCategories([...categories, categoryId]);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg shadow-xl p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Stay Informed with NewsHub</h2>
              <p className="text-blue-100 text-lg">
                Get the latest headlines and breaking news delivered directly to your inbox.
                Customize your newsletter preferences to receive only what matters to you.
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-blue-100 mb-2 font-medium">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-blue-800 bg-opacity-50 border border-blue-600 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-blue-100 mb-3 font-medium">Select Your Interests (Optional)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableCategories.map(category => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className={`flex items-center justify-center px-4 py-2 rounded-lg border transition-colors duration-300 ${
                        categories.includes(category.id)
                          ? 'bg-blue-500 border-blue-400 text-white'
                          : 'bg-transparent border-blue-500 text-blue-100 hover:bg-blue-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe Now
                </button>
                <p className="text-sm text-blue-200">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thanks for Subscribing!</h2>
            <p className="text-blue-100">
              We've sent a confirmation email to <span className="font-semibold">{email}</span>.
              Please check your inbox to complete the subscription process.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
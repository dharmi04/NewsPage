import { motion } from 'framer-motion';
import { Clock, MessageCircle } from 'lucide-react';

const ArticleCard = ({ article, featured = false }) => {
  return (
    <motion.article 
      className={`overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all ${
        featured ? 'col-span-2 md:col-span-2' : 'col-span-1'
      }`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a href={`/article/${article.id}`}>
        <div className="relative">
          <img 
            src={article.image} 
            alt={article.title} 
            className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`} 
          />
          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
            {article.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-bold text-gray-800 mb-2 line-clamp-2`}>
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-6 h-6 rounded-full mr-2" 
              />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{article.readTime} min</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={14} className="mr-1" />
                <span>{article.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default ArticleCard;
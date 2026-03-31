import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const router = useRouter();

  // 从localStorage加载最近搜索
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSearches = localStorage.getItem('recentSearches');
      if (savedSearches) {
        setRecentSearches(JSON.parse(savedSearches));
      }
    }
  }, []);

  // 生成搜索建议
  useEffect(() => {
    if (query.trim()) {
      // 热门搜索词
      const hotSearches = [
        '人工智能',
        '机器学习',
        '深度学习',
        '自然语言处理',
        '计算机视觉',
        '大数据',
        '云计算',
        '区块链',
        '人工智能发展趋势',
        '机器学习算法',
        '深度学习框架',
        '自然语言处理技术',
        '计算机视觉应用',
        '大数据分析',
        '云计算服务'
      ];
      
      // 过滤出包含查询词的建议
      const suggestions = hotSearches
        .filter(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
      
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // 保存到最近搜索
      const newSearches = [query, ...recentSearches.filter(item => item !== query)].slice(0, 5);
      setRecentSearches(newSearches);
      if (typeof window !== 'undefined') {
        localStorage.setItem('recentSearches', JSON.stringify(newSearches));
      }
      
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleHotSearch = (keyword: string) => {
    // 保存到最近搜索
    const newSearches = [keyword, ...recentSearches.filter(item => item !== keyword)].slice(0, 5);
    setRecentSearches(newSearches);
    if (typeof window !== 'undefined') {
      localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    }
    
    router.push(`/search?q=${encodeURIComponent(keyword)}`);
  };

  const handleRecentSearch = (keyword: string) => {
    setQuery(keyword);
    router.push(`/search?q=${encodeURIComponent(keyword)}`);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    // 保存到最近搜索
    const newSearches = [suggestion, ...recentSearches.filter(item => item !== suggestion)].slice(0, 5);
    setRecentSearches(newSearches);
    if (typeof window !== 'undefined') {
      localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    }
    
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('recentSearches');
    }
  };

  // 热门搜索词
  const hotSearches = [
    '人工智能',
    '机器学习',
    '深度学习',
    '自然语言处理',
    '计算机视觉',
    '大数据',
    '云计算',
    '区块链'
  ];

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative transition-all duration-300">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="输入关键词搜索..."
          className="w-full px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-lg"
        />
        
        {/* 搜索建议 */}
        {isFocused && searchSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              {searchSuggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  whileHover={{ backgroundColor: 'rgba(127, 127, 127, 0.1)' }}
                  className="w-full text-left px-6 py-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>{suggestion}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      
      {/* 最近搜索 */}
      {recentSearches.length > 0 && (!isFocused || searchSuggestions.length === 0) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              最近搜索
            </h3>
            <button 
              type="button" 
              onClick={clearRecentSearches}
              className="text-gray-500 text-xs hover:text-gray-300 transition-colors"
            >
              清除
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {recentSearches.map((keyword, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => handleRecentSearch(keyword)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 rounded-full text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
              >
                {keyword}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
      
      {/* 热门搜索 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        <h3 className="text-gray-400 text-sm mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          热门搜索
        </h3>
        <div className="flex flex-wrap gap-2">
          {hotSearches.map((keyword, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => handleHotSearch(keyword)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 rounded-full text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
            >
              {keyword}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.form>
  );
};

export default SearchBar;
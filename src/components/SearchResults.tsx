import React from 'react';
import { motion } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  url: string;
  description: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

const SearchResults = ({ results, query }: SearchResultsProps) => {
  if (results.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 hover-lift"
          style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </motion.div>
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-semibold text-white mb-4"
        >
          未找到相关结果
        </motion.h3>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-lg"
        >
          未找到与 "{query}" 相关的结果
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {results.map((result, index) => (
        <motion.div 
          key={result.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="card hover-lift"
        >
          <a href={result.url} target="_blank" rel="noopener noreferrer" className="block group no-underline">
            <h3 className="text-xl font-semibold text-green-500 mb-2 group-hover:text-purple-500 transition-colors">{result.title}</h3>
            <p className="text-gray-400 text-sm mb-3 break-all">{result.url}</p>
            <p className="text-white leading-relaxed">{result.description}</p>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SearchResults;
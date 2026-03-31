import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const Blog = () => {
  // 模拟博客数据
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '人工智能的未来发展趋势',
      excerpt: '探讨人工智能技术的最新进展和未来发展方向，包括机器学习、深度学习、自然语言处理等领域的突破。',
      date: '2024-03-25',
      author: '布莱恩·格里芬',
      category: '人工智能',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20future%20technology%20abstract%20background&image_size=landscape_16_9'
    },
    {
      id: '2',
      title: '搜索引擎优化的新策略',
      excerpt: '随着搜索引擎算法的不断更新，如何优化网站以提高搜索排名成为了网站所有者的重要任务。本文将介绍最新的SEO策略。',
      date: '2024-03-20',
      author: 'Alex Johnson',
      category: '搜索技术',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=search%20engine%20optimization%20strategy%20digital%20marketing&image_size=landscape_16_9'
    },
    {
      id: '3',
      title: '自然语言处理技术的应用与挑战',
      excerpt: '自然语言处理技术在智能助手、机器翻译、情感分析等领域有着广泛的应用，但也面临着诸多挑战。本文将深入探讨这些应用和挑战。',
      date: '2024-03-15',
      author: 'Sarah Miller',
      category: '自然语言处理',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=natural%20language%20processing%20chatbot%20AI%20technology&image_size=landscape_16_9'
    },
    {
      id: '4',
      title: '大数据分析在企业决策中的应用',
      excerpt: '大数据分析已经成为企业决策的重要工具，如何利用大数据分析来提高企业竞争力成为了企业管理者的关注焦点。',
      date: '2024-03-10',
      author: '埃隆·马斯克',
      category: '大数据',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=big%20data%20analysis%20business%20decision%20making&image_size=landscape_16_9'
    },
    {
      id: '5',
      title: '云计算技术的发展与创新',
      excerpt: '云计算技术的快速发展为企业和个人用户带来了诸多便利，本文将介绍云计算技术的最新发展和创新。',
      date: '2024-03-05',
      author: '比尔·盖茨',
      category: '云计算',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20computing%20technology%20data%20center&image_size=landscape_16_9'
    }
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>博客 - 布莱恩检索中心</title>
        <meta name="description" content="布莱恩检索中心博客，分享人工智能、搜索技术等领域的最新资讯和技术文章" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* 页面标题 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">博客资讯</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">分享人工智能、搜索技术等领域的最新资讯和技术文章</p>
          </motion.div>
          
          {/* 博客列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300"
              >
                {/* 文章图片 */}
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                
                {/* 文章内容 */}
                <div className="p-6">
                  {/* 分类标签 */}
                  <div className="mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400">{post.category}</span>
                  </div>
                  
                  {/* 标题 */}
                  <h2 className="text-xl font-semibold text-white mb-3 hover:text-green-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* 摘要 */}
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  {/* 作者和日期 */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 分页 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                上一页
              </button>
              <button className="px-4 py-2 rounded-lg bg-green-500 text-black hover:bg-green-400 transition-colors">
                1
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                3
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                下一页
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
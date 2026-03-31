import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import FeedbackForm from '../components/FeedbackForm';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const Help = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 模拟常见问题数据
  const faqs: FAQ[] = [
    {
      id: '1',
      question: '如何使用布莱恩检索中心进行搜索？',
      answer: '使用布莱恩检索中心进行搜索非常简单。在首页或搜索页面的搜索框中输入您想要搜索的关键词，然后按下回车键或点击搜索按钮即可。您也可以使用热门搜索词快速开始搜索。',
      category: '搜索功能'
    },
    {
      id: '2',
      question: '布莱恩检索中心支持哪些类型的搜索？',
      answer: '布莱恩检索中心支持多种类型的搜索，包括网页搜索、图片搜索、新闻搜索等。我们的搜索算法会根据您的查询词自动调整搜索策略，为您提供最相关的结果。',
      category: '搜索功能'
    },
    {
      id: '3',
      question: '如何注册布莱恩检索中心账号？',
      answer: '要注册布莱恩检索中心账号，您可以点击导航栏中的"注册"按钮，然后填写必要的个人信息，包括姓名、邮箱和密码。注册成功后，您将收到一封确认邮件。',
      category: '账户管理'
    },
    {
      id: '4',
      question: '忘记密码怎么办？',
      answer: '如果您忘记了密码，可以在登录页面点击"忘记密码"链接，然后按照提示输入您的邮箱地址，我们会发送重置密码的链接到您的邮箱。',
      category: '账户管理'
    },
    {
      id: '5',
      question: '如何查看我的搜索历史？',
      answer: '要查看您的搜索历史，您需要先登录账号，然后进入个人中心页面，点击"搜索历史"标签页，即可查看您的搜索历史记录。',
      category: '个人中心'
    },
    {
      id: '6',
      question: '如何收藏搜索结果？',
      answer: '在搜索结果页面，每个搜索结果下方都有一个收藏按钮，点击该按钮即可将结果添加到您的收藏列表中。您可以在个人中心的"我的收藏"标签页中查看和管理您的收藏内容。',
      category: '个人中心'
    },
    {
      id: '7',
      question: '布莱恩检索中心的搜索结果是如何排序的？',
      answer: '布莱恩检索中心的搜索结果排序基于多个因素，包括相关性、时效性、权威性等。我们的算法会综合考虑这些因素，为您提供最相关、最有用的搜索结果。',
      category: '搜索功能'
    },
    {
      id: '8',
      question: '如何联系布莱恩检索中心的客服？',
      answer: '您可以通过以下方式联系我们的客服：1. 发送邮件至 support@briansearch.com；2. 在网站底部的"联系我们"页面填写联系表单；3. 拨打客服热线：+1 (650) 123-4567。',
      category: '客服支持'
    },
    {
      id: '9',
      question: '布莱恩检索中心的服务是否收费？',
      answer: '布莱恩检索中心的基本搜索服务是免费的。我们也提供高级会员服务，包括无广告搜索、高级搜索功能、更多存储空间等，这些服务需要付费订阅。',
      category: '服务费用'
    },
    {
      id: '10',
      question: '如何举报不良内容？',
      answer: '如果您在搜索结果中发现不良内容，可以点击搜索结果下方的"举报"按钮，然后选择举报原因，我们的审核团队会尽快处理您的举报。',
      category: '内容管理'
    }
  ];

  // 获取所有分类
  const categories = ['all', ...new Set(faqs.map(faq => faq.category))];

  // 过滤FAQ
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Head>
        <title>帮助中心 - 布莱恩检索中心</title>
        <meta name="description" content="布莱恩检索中心帮助中心，解答用户常见问题" />
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
            <h1 className="text-4xl font-bold text-white mb-4">帮助中心</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">解答您在使用布莱恩检索中心过程中遇到的常见问题</p>
          </motion.div>
          
          {/* 搜索框 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索常见问题..."
                className="w-full px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-lg"
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
          
          {/* 分类标签 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${activeCategory === category ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                {category === 'all' ? '全部' : category}
              </motion.button>
            ))}
          </motion.div>
          
          {/* FAQ列表 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div 
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <details className="group">
                    <summary className="px-6 py-4 cursor-pointer list-none flex justify-between items-center">
                      <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 py-4 border-t border-gray-700">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p className="text-gray-400">未找到相关问题</p>
              </div>
            )}
          </motion.div>
          
          {/* 联系客服 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">仍然有问题？</h3>
            <p className="text-gray-400 mb-6">如果您的问题没有在常见问题中找到答案，请联系我们的客服团队</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary hover-lift"
            >
              联系客服
            </motion.button>
          </motion.div>
          
          {/* 用户反馈 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl mx-auto mt-16"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">提交反馈</h3>
            <FeedbackForm />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Help;
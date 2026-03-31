import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  // 模拟用户数据
  const userData = {
    name: '布莱恩·格里芬',
    email: 'brian@example.com',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Brian%20Griffin%20Family%20Guy%20white%20dog%20cartoon%20character%20headshot&image_size=square',
    memberSince: '2024-01-15',
    searchCount: 128,
    favoriteCount: 24,
    lastLogin: '2024-03-26 14:30'
  };

  // 模拟搜索历史
  const searchHistory = [
    { id: 1, query: '人工智能发展趋势', date: '2024-03-27', time: '10:23' },
    { id: 2, query: '机器学习算法', date: '2024-03-26', time: '15:45' },
    { id: 3, query: '自然语言处理技术', date: '2024-03-25', time: '09:12' },
    { id: 4, query: '深度学习框架', date: '2024-03-24', time: '16:30' },
    { id: 5, query: '计算机视觉应用', date: '2024-03-23', time: '11:05' }
  ];

  // 模拟收藏内容
  const favorites = [
    { id: 1, title: '人工智能是什么？', url: 'https://example.com/ai-definition', date: '2024-03-20' },
    { id: 2, title: '机器学习入门指南', url: 'https://example.com/ml-guide', date: '2024-03-18' },
    { id: 3, title: '深度学习最佳实践', url: 'https://example.com/dl-best-practices', date: '2024-03-15' },
    { id: 4, title: '自然语言处理最新进展', url: 'https://example.com/nlp-progress', date: '2024-03-10' }
  ];

  // 模拟个性化推荐
  const recommendations = [
    { id: 1, title: '人工智能伦理问题', url: 'https://example.com/ai-ethics' },
    { id: 2, title: '机器学习模型部署', url: 'https://example.com/ml-deployment' },
    { id: 3, title: '深度学习优化技巧', url: 'https://example.com/dl-optimization' },
    { id: 4, title: '自然语言处理应用案例', url: 'https://example.com/nlp-applications' }
  ];

  const handleLogout = () => {
    // 模拟登出
    alert('已登出');
    router.push('/');
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>个人中心 - 布莱恩检索中心</title>
        <meta name="description" content="布莱恩检索中心个人中心" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* 侧边栏 */}
              <div className="lg:col-span-1">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 sticky top-24"
                >
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-500/50">
                      <img src={userData.avatar} alt={userData.name} className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{userData.name}</h2>
                    <p className="text-gray-400 text-sm">{userData.email}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">账户信息</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between items-center">
                          <span className="text-gray-300">注册日期</span>
                          <span className="text-gray-400 text-sm">{userData.memberSince}</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-gray-300">搜索次数</span>
                          <span className="text-gray-400 text-sm">{userData.searchCount}</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-gray-300">收藏数量</span>
                          <span className="text-gray-400 text-sm">{userData.favoriteCount}</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-gray-300">最后登录</span>
                          <span className="text-gray-400 text-sm">{userData.lastLogin}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLogout}
                      className="w-full btn-secondary hover-lift"
                    >
                      登出
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              {/* 主内容区 */}
              <div className="lg:col-span-3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 p-6"
                >
                  {/* 标签页 */}
                  <div className="border-b border-gray-700 mb-6">
                    <ul className="flex space-x-8 list-none">
                      {[
                        { id: 'overview', label: '概览' },
                        { id: 'history', label: '搜索历史' },
                        { id: 'favorites', label: '我的收藏' },
                        { id: 'settings', label: '设置' }
                      ].map(tab => (
                        <li key={tab.id} className="list-none">
                          <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-4 px-1 font-medium transition-all duration-300 relative ${activeTab === tab.id ? 'text-green-500' : 'text-gray-400'} bg-transparent border-none outline-none`}
                          >
                            {tab.label}
                            {activeTab === tab.id && (
                              <motion.div 
                                layoutId="tabIndicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* 概览 */}
                  {activeTab === 'overview' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-green-400 mb-6">个人概览</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">搜索次数</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <div className="text-3xl font-bold text-white">{userData.searchCount}</div>
                          <div className="text-sm text-green-500 mt-1">+12% 较上月</div>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">收藏数量</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div className="text-3xl font-bold text-white">{userData.favoriteCount}</div>
                          <div className="text-sm text-green-500 mt-1">+8% 较上月</div>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">活跃天数</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="text-3xl font-bold text-white">28</div>
                          <div className="text-sm text-green-500 mt-1">本月</div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-4">推荐内容</h4>
                      <div className="space-y-4">
                        {recommendations.map(item => (
                          <motion.div 
                            key={item.id}
                            whileHover={{ x: 10 }}
                            className="bg-gray-700/30 rounded-lg p-4 border border-gray-600 hover:border-green-500/50 transition-all duration-300"
                          >
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="block group no-underline">
                              <h5 className="text-white font-medium group-hover:text-green-400 transition-colors">{item.title}</h5>
                              <p className="text-gray-400 text-sm mt-1 truncate">{item.url}</p>
                            </a>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* 搜索历史 */}
                  {activeTab === 'history' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-green-400">搜索历史</h3>
                        <motion.button 
                          className="text-sm text-gray-400 hover:text-red-400 border-none bg-transparent transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            // 清空历史
                            alert('历史记录已清空');
                          }}
                        >
                          清空历史
                        </motion.button>
                      </div>
                      
                      {searchHistory.length > 0 ? (
                        <div className="space-y-4">
                          {searchHistory.map(item => (
                            <motion.div 
                              key={item.id}
                              whileHover={{ x: 10, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-green-500/50 transition-all duration-300 flex justify-between items-center"
                            >
                              <div>
                                <h5 className="text-white font-medium">{item.query}</h5>
                                <p className="text-gray-400 text-sm">{item.date} {item.time}</p>
                              </div>
                              <motion.button 
                                className="text-gray-400 hover:text-red-400 border-none bg-transparent transition-colors p-1"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                  // 删除单个历史记录
                                  alert('历史记录已删除');
                                }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </motion.button>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <p className="text-gray-400">暂无搜索历史</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  {/* 我的收藏 */}
                  {activeTab === 'favorites' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-green-400 mb-6">我的收藏</h3>
                      
                      {favorites.length > 0 ? (
                        <div className="space-y-4">
                          {favorites.map(item => (
                            <motion.div 
                              key={item.id}
                              whileHover={{ y: -5 }}
                              className="bg-gray-700/30 rounded-lg p-4 border border-gray-600 hover:border-green-500/50 transition-all duration-300"
                            >
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block group no-underline">
                                <h5 className="text-white font-medium group-hover:text-green-400 transition-colors">{item.title}</h5>
                                <div className="flex justify-between items-center mt-2">
                                  <p className="text-gray-400 text-sm truncate">{item.url}</p>
                                  <span className="text-gray-500 text-xs">{item.date}</span>
                                </div>
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <p className="text-gray-400">暂无收藏内容</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  {/* 设置 */}
                  {activeTab === 'settings' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-green-400 mb-6">账户设置</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-green-400 mb-4">个人信息</h4>
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">姓名</label>
                              <input
                                type="text"
                                id="name"
                                defaultValue={userData.name}
                                className="max-w-md w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">邮箱</label>
                              <input
                                type="email"
                                id="email"
                                defaultValue={userData.email}
                                className="max-w-md w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-green-400 mb-4">密码设置</h4>
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="current-password" className="block text-gray-300 text-sm font-medium mb-2">当前密码</label>
                              <input
                                type="password"
                                id="current-password"
                                placeholder="请输入当前密码"
                                className="max-w-md w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                              />
                            </div>
                            <div>
                              <label htmlFor="new-password" className="block text-gray-300 text-sm font-medium mb-2">新密码</label>
                              <input
                                type="password"
                                id="new-password"
                                placeholder="请输入新密码"
                                className="max-w-md w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                              />
                            </div>
                            <div>
                              <label htmlFor="confirm-password" className="block text-gray-300 text-sm font-medium mb-2">确认新密码</label>
                              <input
                                type="password"
                                id="confirm-password"
                                placeholder="请再次输入新密码"
                                className="max-w-md w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-green-400 mb-4">偏好设置</h4>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">深色模式</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                              </label>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">保存搜索历史</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                              </label>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">接收推荐</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-primary hover-lift flex items-center justify-center"
                          onClick={() => {
                            // 保存设置
                            alert('设置已保存');
                          }}
                        >
                          保存设置
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
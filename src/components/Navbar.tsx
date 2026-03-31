import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import NotificationCenter from './NotificationCenter';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  // 初始化主题：在客户端从本地存储加载
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDarkMode');
      if (savedTheme) {
        setIsDarkMode(JSON.parse(savedTheme));
      }
    }
  }, []);

  // 切换主题模式
  const toggleTheme = () => {
    console.log('Before toggle:', isDarkMode);
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    // 保存主题状态到本地存储（仅在客户端）
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDarkMode', JSON.stringify(newTheme));
    }
  };

  // 初始化主题和监听主题变化
  useEffect(() => {
    console.log('Theme changed:', isDarkMode);
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.body.classList.add('dark');
        console.log('Added dark class to body');
      } else {
        document.body.classList.remove('dark');
        console.log('Removed dark class from body');
      }
    }
  }, [isDarkMode]);

  // 监听滚动事件，添加滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭菜单当路由变化时
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-lg transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg shadow-black/20' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* 左侧：logo和导航链接 */}
        <div className="flex items-center space-x-8 flex-1">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 hover-lift no-underline">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 relative overflow-hidden" style={{ background: '#22c55e' }}>
                <span className="text-black font-bold text-xl relative z-10">B</span>
                <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)', transform: 'translateX(-100%)', transition: 'transform 0.6s ease' }}></div>
              </div>
              <span className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-green-500">布莱恩检索中心</span>
            </Link>
          </motion.div>
          
          {/* 桌面导航链接 */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Link 
              href="/" 
              className={`hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-2.5 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline flex items-center justify-center ${router.pathname === '/' ? 'bg-green-500/10 border-green-500/50' : ''}`}
            >
              首页
            </Link>
            <Link 
              href="/search" 
              className={`hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-2.5 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline flex items-center justify-center ${router.pathname === '/search' ? 'bg-green-500/10 border-green-500/50' : ''}`}
            >
              搜索
            </Link>
            <Link 
              href="/blog" 
              className={`hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-2.5 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline flex items-center justify-center ${router.pathname === '/blog' ? 'bg-green-500/10 border-green-500/50' : ''}`}
            >
              博客
            </Link>
            <Link 
              href="/help" 
              className={`hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-2.5 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline flex items-center justify-center ${router.pathname === '/help' ? 'bg-green-500/10 border-green-500/50' : ''}`}
            >
              帮助
            </Link>
          </motion.div>
        </div>
        
        {/* 右侧：通知中心、主题切换、创研中心、个人中心、登录/注册 */}
        <div className="flex items-center space-x-4">
          <NotificationCenter />
          <motion.button
            className="p-2 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            aria-label={isDarkMode ? '切换到亮色模式' : '切换到暗色模式'}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.button>
          <Link 
            href="/research" 
            className="hidden md:block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-2.5 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline flex items-center justify-center"
          >
            布莱恩创研中心
          </Link>
          <Link 
            href="/profile" 
            className="hidden md:block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-2.5 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline flex items-center justify-center"
          >
            个人中心
          </Link>
          <motion.button 
            className="btn-primary hover-lift hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => router.push('/login')}
          >
            登录
          </motion.button>
          <motion.button 
            className="btn-secondary hover-lift hidden md:block ml-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => router.push('/register')}
          >
            注册
          </motion.button>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-gray-700"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <motion.button
              className="w-full flex items-center justify-center space-x-2 hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-3 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              <span>{isDarkMode ? '切换到亮色模式' : '切换到暗色模式'}</span>
            </motion.button>
            <Link 
              href="/" 
              className={`block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-3 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline ${router.pathname === '/' ? 'bg-green-500/10 border-green-500/50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/search" 
              className={`block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-3 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline ${router.pathname === '/search' ? 'bg-green-500/10 border-green-500/50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              搜索
            </Link>
            <Link 
              href="/blog" 
              className={`block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-3 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline ${router.pathname === '/blog' ? 'bg-green-500/10 border-green-500/50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              博客
            </Link>
            <Link 
              href="/help" 
              className={`block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-3 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline ${router.pathname === '/help' ? 'bg-green-500/10 border-green-500/50' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              帮助
            </Link>
            <Link 
              href="/research" 
              className="block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-3 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              布莱恩创研中心
            </Link>
            <Link 
              href="/profile" 
              className="block hover:text-green-400 transition-all duration-300 font-medium text-base px-5 py-3 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              个人中心
            </Link>
            <div className="flex space-x-3">
              <motion.button 
                className="flex-1 btn-primary hover-lift"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  router.push('/login');
                  setIsMenuOpen(false);
                }}
              >
                登录
              </motion.button>
              <motion.button 
                className="flex-1 btn-secondary hover-lift"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  router.push('/register');
                  setIsMenuOpen(false);
                }}
              >
                注册
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // 模拟登录请求
    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 简单的验证
      if (email && password) {
        // 登录成功，跳转到首页
        router.push('/');
      } else {
        setError('请填写所有字段');
      }
    } catch (err) {
      setError('登录失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>登录 - 布莱恩检索中心</title>
        <meta name="description" content="登录到布莱恩检索中心" />
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
            className="max-w-md mx-auto bg-gray-800/50 rounded-xl border border-gray-700 p-8 hover:border-green-500/50 transition-all duration-300"
          >
            <div className="text-center mb-8">
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20 relative overflow-hidden" 
                style={{ background: '#22c55e' }}
              >
                <span className="text-black font-bold text-3xl relative z-10">B</span>
                <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)', transform: 'translateX(-100%)', transition: 'transform 0.6s ease' }}></div>
              </motion.div>
              <h1 className="text-2xl font-bold text-white mb-2">登录</h1>
              <p className="text-gray-400">登录到您的布莱恩检索中心账号</p>
            </div>
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6"
              >
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">邮箱</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                  placeholder="请输入邮箱"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">密码</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                  placeholder="请输入密码"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-600 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    记住我
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="font-medium text-green-500 hover:text-green-400 transition-colors">
                    忘记密码?
                  </a>
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary hover-lift flex justify-center items-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    登录中...
                  </>
                ) : (
                  '登录'
                )}
              </motion.button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                还没有账号? {' '}
                <Link href="/register" className="font-medium text-green-500 hover:text-green-400 transition-colors no-underline">
                  注册
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Login;
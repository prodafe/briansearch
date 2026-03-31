import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // 确保元素初始状态可见
    gsap.set(['.hero-title', '.hero-subtitle', '.hero-buttons', '.service-card', '.advantage-card', '.stat-card', '.testimonial-card', '.partner-card', '.company-info'], {
      opacity: 1
    });
    
    // 英雄区域动画 - 更高级的效果
    gsap.timeline()
      .from('.hero-title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'expo.out'
      })
      .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'expo.out'
      }, '-=0.5')
      .from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'expo.out'
      }, '-=0.5');
    
    // 服务卡片动画 - 添加3D效果
    gsap.from('.service-card', {
      opacity: 0,
      y: 80,
      rotationX: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      ease: 'back.out(1.2)'
    });
    
    // 技术优势动画 - 添加交错效果
    gsap.from('.advantage-card', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: {
        amount: 0.5,
        from: 'center'
      },
      scrollTrigger: {
        trigger: '.advantages-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      ease: 'power3.out'
    });
    
    // 数据统计动画 - 添加弹性效果
    gsap.from('.stat-card', {
      opacity: 0,
      scale: 0.5,
      y: 50,
      duration: 1,
      stagger: {
        amount: 0.6,
        from: 'random'
      },
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      ease: 'elastic.out(1, 0.5)'
    });
    
    // 名人感言动画 - 添加淡入效果
    gsap.from('.testimonial-card', {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      ease: 'power3.out'
    });
    
    // 合作方动画 - 添加缩放和旋转效果
    gsap.from('.partner-card', {
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 0.8,
      stagger: {
        amount: 0.8,
        from: 'edges'
      },
      scrollTrigger: {
        trigger: '.partners-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      ease: 'back.out(1.1)'
    });
    
    // 公司介绍动画 - 添加视差效果
    gsap.from('.company-info', {
      opacity: 0,
      x: -50,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.company-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      ease: 'power3.out'
    });
    
    // 添加滚动视差效果
    gsap.to('.hero-section .absolute', {
      y: (i) => i * 50,
      scrollTrigger: {
        trigger: '.hero-section',
        scrub: true,
        start: 'top top',
        end: 'bottom top'
      }
    });
  }, []);
  
  return (
    <div className="min-h-screen">
      <Head>
        <title>布莱恩检索中心 - 上帝的脑子</title>
        <meta name="description" content="布莱恩检索中心 - 快速、准确地找到你需要的信息" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* 英雄区域 */}
        <section className="hero-section relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
            {/* 动态背景效果 */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-green-500/20"
                  style={{
                    width: Math.random() * 300 + 50,
                    height: Math.random() * 300 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* 内容 */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="flex justify-center mb-8">
                <motion.div 
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: 1 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-40 h-40 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 relative overflow-hidden" style={{ background: '#22c55e' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-black font-bold text-6xl relative z-10">B</span>
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full" 
                    style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)' }}
                    animate={{ transform: ['translateX(-100%)', 'translateX(100%)'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-title text-6xl md:text-7xl font-bold mb-6 text-shadow-lg"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-400 to-green-500">布莱恩检索中心</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              "这里是上帝的脑子，去获得你想要的一切吧"
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="/search"
                className="btn-primary hover-lift text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                开始搜索
              </motion.a>
              <motion.a 
                href="/research"
                className="btn-secondary hover-lift text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                了解更多
              </motion.a>
            </motion.div>
            
            {/* 滚动提示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0.5, 1, 0.5],
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 2
              }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </section>
        
        {/* 服务介绍 */}
        <section className="services-section mt-32 w-full relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-500 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          </div>
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16"
          >
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-white"
              >
                核心服务
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                我们提供全方位的搜索技术解决方案，满足企业和个人的各种信息检索需求
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "智能搜索",
                  description: "基于深度学习的搜索算法，能够理解用户意图，提供精准的搜索结果，支持多语言和复杂查询。",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  title: "数据分析",
                  description: "深度分析搜索数据，提供趋势洞察和商业智能，帮助企业做出数据驱动的决策。",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "API服务",
                  description: "提供稳定可靠的搜索API，支持企业级应用集成，助力开发者快速构建智能搜索功能。",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="service-card bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 relative overflow-hidden group"
                >
                  {/* 渐变背景 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* 图标 */}
                  <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white/10 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  
                  {/* 内容 */}
                  <h3 className="text-xl font-semibold mb-4 text-white relative z-10">{service.title}</h3>
                  <p className="text-gray-300 relative z-10">{service.description}</p>
                  
                  {/* 悬停效果 */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
        
        {/* 技术优势 */}
        <section className="advantages-section mt-32 w-full bg-gray-900/50 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-green-500 blur-3xl"></div>
          </div>
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16"
          >
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-white"
              >
                技术优势
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                我们拥有业界领先的搜索技术，为用户提供卓越的信息检索体验
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "毫秒级响应",
                  description: "优化的搜索算法和分布式架构，确保搜索结果毫秒级返回，提供流畅的用户体验。",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  number: "02",
                  title: "智能理解",
                  description: "先进的自然语言处理技术，能够理解用户的搜索意图，提供更准确的搜索结果。",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                },
                {
                  number: "03",
                  title: "知识图谱",
                  description: "构建大规模知识图谱，实现智能关联和推理，提升搜索深度和准确性。",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  number: "04",
                  title: "实时索引",
                  description: "实时更新索引，确保搜索结果的时效性，让用户获取最新信息。",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  number: "05",
                  title: "多语言支持",
                  description: "支持多种语言的搜索和处理，满足全球用户的需求。",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  number: "06",
                  title: "安全可靠",
                  description: "严格的数据安全措施，保护用户隐私，确保搜索服务的可靠性和稳定性。",
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                }
              ].map((advantage, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="advantage-card bg-gray-800/30 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 relative group"
                >
                  {/* 序号 */}
                  <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-4xl">{advantage.number}</span>
                  </div>
                  
                  {/* 图标 */}
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} />
                    </svg>
                  </div>
                  
                  {/* 内容 */}
                  <h3 className="text-xl font-semibold mb-3 text-white">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
        
        {/* 数据统计 */}
        <section className="stats-section mt-32 w-full relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500 blur-3xl"></div>
          </div>
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16"
          >
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-white"
              >
                平台数据
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                我们的平台每天处理海量数据，为用户提供稳定可靠的搜索服务
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: "100M+",
                  label: "搜索请求/天",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  value: "10B+",
                  label: "索引文档",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  value: "99.99%",
                  label: "服务可用性",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  value: "50+",
                  label: "合作企业",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  color: "from-yellow-500 to-orange-600"
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="stat-card bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 relative overflow-hidden group"
                >
                  {/* 渐变背景 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* 图标 */}
                  <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white/10 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  
                  {/* 数据 */}
                  <div className="text-4xl font-bold mb-2 text-white relative z-10 group-hover:text-white transition-colors duration-300">{stat.value}</div>
                  <div className="text-gray-400 relative z-10">{stat.label}</div>
                  
                  {/* 悬停效果 */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
        
        {/* 名人使用感言 */}
        <section className="testimonials-section mt-32 w-full bg-gray-900/50 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-green-500 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
          </div>
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16"
          >
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-white"
              >
                名人使用感言
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                来自各领域知名人士对布莱恩检索中心的评价
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: 1,
                  name: "Alex Johnson",
                  title: "前谷歌技术专家",
                  quote: "布莱恩检索中心的搜索算法令人印象深刻，它能够快速准确地找到我需要的信息，是一个非常有潜力的搜索工具。",
                  avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20tech%20expert%20headshot%20business%20attire&image_size=square"
                },
                {
                  id: 2,
                  name: "Sarah Miller",
                  title: "全球营销顾问",
                  quote: "在信息爆炸的时代，布莱恩检索中心为我们提供了一种更高效的信息获取方式，值得推荐给每一位需要搜索信息的人。",
                  avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20businesswoman%20headshot%20confident&image_size=square"
                },
                {
                  id: 3,
                  name: "埃隆·马斯克",
                  title: "特斯拉CEO",
                  quote: "作为一个经常需要查找技术资料的人，布莱恩检索中心的精准搜索结果帮助我节省了大量时间，非常实用。",
                  avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Elon%20Musk%20Tesla%20CEO%20headshot%20professional%20photo&image_size=square"
                },
                {
                  id: 4,
                  name: "比尔·盖茨",
                  title: "微软创始人",
                  quote: "布莱恩检索中心的用户体验设计非常出色，搜索速度快，结果准确，是我日常工作中不可或缺的工具。",
                  avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bill%20Gates%20Microsoft%20founder%20headshot%20professional%20photo&image_size=square"
                }
              ].map((person, index) => (
                <motion.div 
                  key={person.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="testimonial-card bg-gray-800/30 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 relative group"
                >
                  {/* 引用图标 */}
                  <div className="absolute top-6 left-6 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* 内容 */}
                  <p className="text-gray-300 mb-6 italic relative z-10">"{person.quote}"</p>
                  
                  {/* 作者信息 */}
                  <div className="flex items-center relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-green-500/50 group-hover:border-green-500 transition-colors duration-300">
                      <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{person.name}</h4>
                      <p className="text-gray-400 text-sm">{person.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
        
        {/* 合作方 */}
        <section className="partners-section mt-32 w-full relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500 blur-3xl"></div>
          </div>
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16"
          >
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-white"
              >
                合作方
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                我们与全球知名企业建立了长期稳定的合作关系
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: '谷歌', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Google%20logo%20blue%20red%20yellow%20green%20simple%20clean&image_size=square' },
                { name: '百度', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baidu%20logo%20blue%20simple%20clean&image_size=square' },
                { name: '腾讯', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tencent%20logo%20green%20simple%20clean&image_size=square' },
                { name: '网易', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NetEase%20logo%20red%20simple%20clean&image_size=square' },
                { name: '小米', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiaomi%20logo%20orange%20simple%20clean&image_size=square' },
                { name: '华为', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huawei%20logo%20red%20simple%20clean&image_size=square' },
                { name: '硅谷科技', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Silicon%20Valley%20tech%20logo%20blue%20simple%20clean&image_size=square' },
                { name: 'GitHub', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GitHub%20logo%20black%20simple%20clean&image_size=square' },
                { name: '特斯拉', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tesla%20logo%20red%20simple%20clean&image_size=square' },
                { name: '苹果', logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Apple%20logo%20simple%20clean&image_size=square' }
              ].map((partner, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.1,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="partner-card bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 flex flex-col items-center justify-center group"
                >
                  <div className="w-20 h-20 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                  </div>
                  <span className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
        
        {/* 公司介绍 */}
        <section className="company-section mt-32 w-full bg-gray-900/50 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-green-500 blur-3xl"></div>
          </div>
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16"
          >
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-white"
              >
                布莱恩科技创研中心
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                专注于人工智能和信息检索技术研发的高科技企业
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 左侧内容 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="company-info space-y-6"
              >
                <p className="text-gray-300 leading-relaxed">
                  布莱恩科技创研中心是一家专注于人工智能和信息检索技术研发的高科技企业，成立于2023年，总部位于美国硅谷。我们的使命是通过技术创新，为全球用户提供更高效、更精准的信息获取方式。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  我们拥有一支由来自全球顶尖高校和科技公司的专家组成的研发团队，致力于推动搜索技术的边界。通过不断探索和创新，我们开发出了一系列具有自主知识产权的核心技术，包括智能搜索算法、自然语言处理、知识图谱等。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  布莱恩科技创研中心秉承"科技向善"的理念，注重技术的社会责任，致力于通过技术创新为社会创造价值。我们相信，通过我们的努力，能够让信息获取变得更加简单、高效，为人类的知识探索和创新发展做出贡献。
                </p>
                <motion.a 
                  href="/research"
                  className="btn-primary hover-lift inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  了解更多
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
              
              {/* 右侧信息 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* 联系我们 */}
                <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    联系我们
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">美国加利福尼亚州硅谷帕洛阿尔托市</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-300">contact@briansearch.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-300">+1 (650) 123-4567</span>
                    </li>
                  </ul>
                </div>
                
                {/* 核心价值观 */}
                <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    核心价值观
                  </h3>
                  <ul className="space-y-3">
                    {['创新驱动', '用户至上', '技术卓越', '开放合作', '社会责任'].map((value, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                        <span className="text-gray-300">{value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </section>
      </main>
    </div>
  );
};

export default Home;
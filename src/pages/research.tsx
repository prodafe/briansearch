import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const ResearchCenter = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>布莱恩创研中心 - 百度百科风格</title>
        <meta name="description" content="布莱恩创研中心官方介绍，仿照百度百科风格" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* 百科风格顶部信息卡 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <div className="card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* 左侧信息 */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-6">布莱恩创研中心</h1>
                <p className="text-gray-300 mb-6 text-lg">Brian Research Center</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">成立时间</span>
                    <span className="text-white">2023年3月</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">总部</span>
                    <span className="text-white">美国加利福尼亚州硅谷帕洛阿尔托市</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">创始人</span>
                    <span className="text-white">布莱恩·格里芬</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">核心业务</span>
                    <span className="text-white">人工智能、信息检索技术研发</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">员工人数</span>
                    <span className="text-white">200+</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">官网</span>
                    <a href="/" className="text-green-400 hover:underline">briansearch.com</a>
                  </div>
                </div>
              </div>
              
              {/* 右侧图片 */}
              <div className="w-64 h-80 bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20tech%20research%20center%20building%20silicon%20valley%20professional%20photo&image_size=portrait_4_3" 
                    alt="布莱恩创研中心" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 百科正文内容 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">百科名片</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              布莱恩创研中心（Brian Research Center）是一家专注于人工智能和信息检索技术研发的高科技企业，成立于2023年，总部位于美国硅谷。
              公司由布莱恩·格里芬创立，致力于通过技术创新，为全球用户提供更高效、更精准的信息获取方式。
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              作为一家创新型科技企业，布莱恩创研中心拥有一支由来自全球顶尖高校和科技公司的专家组成的研发团队，
              致力于推动搜索技术的边界，开发出一系列具有自主知识产权的核心技术。
            </p>
          </div>
        </motion.section>
        
        {/* 发展历程 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">发展历程</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 font-medium w-32">2023年3月</span>
                <span className="text-gray-300">布莱恩科技创研中心成立，开始研发新一代搜索引擎技术</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 font-medium w-32">2023年8月</span>
                <span className="text-gray-300">完成核心搜索算法的研发，开始内部测试</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 font-medium w-32">2024年2月</span>
                <span className="text-gray-300">布莱恩检索中心正式上线，向公众开放服务</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 font-medium w-32">2024年6月</span>
                <span className="text-gray-300">推出智能推荐系统，提升搜索结果的个性化程度</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 font-medium w-32">2024年11月</span>
                <span className="text-gray-300">与多家知名科技公司达成合作，拓展数据源</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 font-medium w-32">2025年3月</span>
                <span className="text-gray-300">发布移动应用，实现多平台搜索体验</span>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 核心技术 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">核心技术</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">智能搜索算法</h3>
                <p className="text-gray-300">基于深度学习的搜索算法，能够理解用户意图，提供更精准的搜索结果。</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">自然语言处理</h3>
                <p className="text-gray-300">先进的NLP技术，支持多语言搜索，理解复杂查询语句。</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">知识图谱</h3>
                <p className="text-gray-300">构建大规模知识图谱，实现智能关联和推理，提升搜索深度。</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">实时索引</h3>
                <p className="text-gray-300">毫秒级索引更新，确保搜索结果的时效性和准确性。</p>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 组织架构 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">组织架构</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-800/50 rounded-lg">
                <div className="w-24 text-white font-medium">创始人</div>
                <div className="flex-1 text-gray-300">布莱恩·格里芬</div>
              </div>
              <div className="flex items-center p-4 bg-gray-800/50 rounded-lg">
                <div className="w-24 text-white font-medium">技术总监</div>
                <div className="flex-1 text-gray-300">Alex Johnson</div>
              </div>
              <div className="flex items-center p-4 bg-gray-800/50 rounded-lg">
                <div className="w-24 text-white font-medium">产品总监</div>
                <div className="flex-1 text-gray-300">David Wilson</div>
              </div>
              <div className="flex items-center p-4 bg-gray-800/50 rounded-lg">
                <div className="w-24 text-white font-medium">市场总监</div>
                <div className="flex-1 text-gray-300">Sarah Miller</div>
              </div>
              <div className="flex items-center p-4 bg-gray-800/50 rounded-lg">
                <div className="w-24 text-white font-medium">研发团队</div>
                <div className="flex-1 text-gray-300">150+ 工程师和研究人员</div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 企业文化 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">企业文化</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">核心价值观</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 创新驱动：不断探索前沿技术，推动行业发展</li>
                  <li>• 用户至上：以用户需求为中心，提供优质服务</li>
                  <li>• 技术卓越：追求技术极致，打造一流产品</li>
                  <li>• 开放合作：与合作伙伴共赢，构建生态系统</li>
                  <li>• 社会责任：科技向善，为社会创造价值</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">企业使命</h3>
                <p className="text-gray-300">通过技术创新，为全球用户提供更高效、更精准的信息获取方式，让知识触手可及。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">企业愿景</h3>
                <p className="text-gray-300">成为全球领先的人工智能和信息检索技术提供商，引领行业发展，改变人类获取信息的方式。</p>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 联系方式 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">联系方式</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gray-400 w-24">地址</span>
                <span className="text-white">美国加利福尼亚州硅谷帕洛阿尔托市</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-400 w-24">邮箱</span>
                <span className="text-white">contact@brianresearch.com</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-400 w-24">电话</span>
                <span className="text-white">+1 (650) 123-4567</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-400 w-24">官网</span>
                <a href="/" className="text-green-400 hover:underline">brianresearch.com</a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ResearchCenter;
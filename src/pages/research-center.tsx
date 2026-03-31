import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const ResearchCenter = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>布莱恩创研中心 - 百度百科</title>
        <meta name="description" content="布莱恩创研中心 - 百度百科式介绍" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* 百科式布局 */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左侧内容 */}
            <div className="lg:w-3/4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl font-bold mb-6 text-white border-b border-gray-700 pb-4">布莱恩创研中心</h1>
                
                <div className="space-y-6 mb-10">
                  <p className="text-gray-300 leading-relaxed">
                    布莱恩创研中心（Brian Research Center）是一家专注于人工智能和信息检索技术研发的高科技企业，成立于2023年，总部位于美国硅谷。
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-white mt-8">历史沿革</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-green-500 font-medium">2023年3月</span> - 布莱恩科技创研中心成立，开始研发新一代搜索引擎技术
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-green-500 font-medium">2023年8月</span> - 完成核心搜索算法的研发，开始内部测试
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-green-500 font-medium">2024年2月</span> - 布莱恩检索中心正式上线，向公众开放服务
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-green-500 font-medium">2024年6月</span> - 推出智能推荐系统，提升搜索结果的个性化程度
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-green-500 font-medium">2024年11月</span> - 与多家知名科技公司达成合作，拓展数据源
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-green-500 font-medium">2025年3月</span> - 发布移动应用，实现多平台搜索体验
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-white mt-8">组织架构</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      布莱恩创研中心采用扁平化管理架构，设有以下部门：
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>研发部 - 负责核心技术研发</li>
                      <li>产品部 - 负责产品设计和用户体验</li>
                      <li>运营部 - 负责平台运营和用户增长</li>
                      <li>市场部 - 负责品牌推广和商务合作</li>
                      <li>技术支持部 - 负责用户技术支持</li>
                    </ul>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-white mt-8">核心技术</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      布莱恩创研中心拥有多项自主知识产权的核心技术：
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>智能搜索算法 - 基于深度学习的搜索排序技术</li>
                      <li>自然语言处理 - 理解用户搜索意图的语义分析技术</li>
                      <li>知识图谱 - 构建结构化知识体系的技术</li>
                      <li>个性化推荐 - 基于用户行为的智能推荐系统</li>
                      <li>实时索引 - 快速处理和索引海量信息的技术</li>
                    </ul>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-white mt-8">企业文化</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      布莱恩创研中心秉承"科技向善"的理念，注重技术的社会责任，致力于通过技术创新为社会创造价值。
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      核心价值观：
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>创新驱动 - 不断探索前沿技术</li>
                      <li>用户至上 - 以用户需求为中心</li>
                      <li>技术卓越 - 追求技术的极致</li>
                      <li>开放合作 - 与合作伙伴共赢</li>
                      <li>社会责任 - 用技术回馈社会</li>
                    </ul>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-white mt-8">未来展望</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      布莱恩创研中心计划在未来五年内：
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>拓展全球市场，服务更多国家和地区的用户</li>
                      <li>深化与高校和研究机构的合作，推动技术创新</li>
                      <li>开发更多垂直领域的专业搜索服务</li>
                      <li>探索人工智能在搜索领域的新应用</li>
                      <li>成为全球领先的智能搜索技术提供商</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* 右侧信息栏 */}
            <div className="lg:w-1/4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="card p-6 sticky top-24"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">基本信息</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">公司名称</span>
                    <span className="text-gray-300 flex-1">布莱恩创研中心</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">英文名称</span>
                    <span className="text-gray-300 flex-1">Brian Research Center</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">成立时间</span>
                    <span className="text-gray-300 flex-1">2023年3月</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-24">总部地点</span>
                    <span className="text-gray-300 flex-1">美国加利福尼亚州</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
);
};

export default ResearchCenter;
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const MiroFish = () => {
  const [query, setQuery] = useState('');
  const [predictionType, setPredictionType] = useState('macro');
  const [purpose, setPurpose] = useState('');
  const [isPredicting, setIsPredicting] = useState(false);
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [agents, setAgents] = useState([
    { id: 1, name: '经济分析师', status: '就绪' },
    { id: 2, name: '行业专家', status: '就绪' },
    { id: 3, name: '趋势预测师', status: '就绪' },
    { id: 4, name: '数据分析师', status: '就绪' },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPredicting(true);

    // 模拟多智能体系统启动
    for (let i = 0; i < agents.length; i++) {
      setTimeout(() => {
        setAgents(prev => prev.map(agent => 
          agent.id === i + 1 ? { ...agent, status: '运行中' } : agent
        ));
      }, i * 500);
    }

    // 模拟预测过程
    setTimeout(() => {
      setPredictionResult({
        title: `${query} ${predictionType === 'macro' ? '宏观趋势' : '行业趋势'}预测`,
        summary: `基于多智能体系统分析，${query}在未来6个月内预计将呈现${Math.random() > 0.5 ? '上升' : '下降'}趋势。`,
        data: {
          labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
          values: [65, 59, 80, 81, 56, 55].map(val => val + Math.random() * 20),
        },
        insights: [
          '趋势分析显示未来3个月内将出现显著波动',
          '行业专家预测该领域将迎来新一轮投资热潮',
          '数据表明消费者行为正在发生变化',
          '建议关注相关政策变化对市场的影响',
        ],
      });
      setAgents(prev => prev.map(agent => ({ ...agent, status: '完成' })));
      setIsPredicting(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>MiroFish - AI预测引擎</title>
        <meta name="description" content="MiroFish - 基于多智能体系统的AI预测引擎" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* 页面标题 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">MiroFish</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">基于多智能体系统的AI预测引擎，通过构建高保真平行数字世界实现宏观与行业趋势推演</p>
          </motion.div>

          {/* 预测输入表单 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">趋势预测</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="query" className="block text-gray-300 text-sm font-medium mb-2">关键词</label>
                  <input
                    type="text"
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="输入预测关键词，例如：人工智能、经济趋势等"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="predictionType" className="block text-gray-300 text-sm font-medium mb-2">预测类型</label>
                  <select
                    id="predictionType"
                    value={predictionType}
                    onChange={(e) => setPredictionType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                  >
                    <option value="macro">宏观趋势</option>
                    <option value="industry">行业趋势</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="purpose" className="block text-gray-300 text-sm font-medium mb-2">预测用途</label>
                  <textarea
                    id="purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    placeholder="请描述预测的用途，例如：投资决策、市场分析等"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isPredicting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary hover-lift flex justify-center items-center"
                >
                  {isPredicting ? (
                    <>预测中...</>
                  ) : (
                    '开始预测'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* 多智能体状态 */}
          {isPredicting && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">多智能体系统</h2>
                <div className="space-y-4">
                  {agents.map((agent) => (
                    <motion.div 
                      key={agent.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
                    >
                      <span className="text-white">{agent.name}</span>
                      <span className={`text-sm font-medium ${agent.status === '运行中' ? 'text-yellow-400' : agent.status === '完成' ? 'text-green-400' : 'text-gray-400'}`}>
                        {agent.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 预测结果 */}
          {predictionResult && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{predictionResult.title}</h2>
                <p className="text-gray-300 mb-6">{predictionResult.summary}</p>
                
                {/* 数据可视化 */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">趋势图表</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 h-80 flex items-center justify-center">
                    <div className="w-full h-full">
                      {/* 简单的图表模拟 */}
                      <div className="flex items-end justify-around h-full">
                        {predictionResult.data.labels.map((label: string, index: number) => (
                          <div key={label} className="flex flex-col items-center">
                            <div 
                              className="w-8 bg-green-500 rounded-t-md transition-all duration-1000 ease-out"
                              style={{ height: `${(predictionResult.data.values[index] / Math.max(...predictionResult.data.values)) * 100}%` }}
                            ></div>
                            <span className="text-xs text-gray-400 mt-2">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 洞察分析 */}
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">洞察分析</h3>
                  <ul className="space-y-3">
                    {predictionResult.insights.map((insight: string, index: number) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-green-400 text-sm font-medium">{index + 1}</span>
                        </div>
                        <span className="text-gray-300">{insight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* 技术架构 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">技术架构</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600 hover:border-green-500/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">时序GraphRAG</h3>
                  <p className="text-gray-300 text-sm">融合时序数据和知识图谱，构建动态知识网络，实现精准的趋势预测</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600 hover:border-green-500/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">多智能体系统</h3>
                  <p className="text-gray-300 text-sm">多个专业智能体协同工作，模拟不同领域专家的分析过程，提高预测准确性</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600 hover:border-green-500/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">OASIS仿真引擎</h3>
                  <p className="text-gray-300 text-sm">构建高保真平行数字世界，模拟各种场景下的趋势演变，提供多维度预测结果</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default MiroFish;
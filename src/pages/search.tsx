import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

// 只在客户端导入Chart.js
let Chart: any = null;
if (typeof window !== 'undefined') {
  const chartModule = require('chart.js');
  Chart = chartModule.Chart;
  const { registerables } = chartModule;
  Chart.register(...registerables);
}
import SearchResults from '../components/SearchResults';
import { motion } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  url: string;
  description: string;
}

const Search = () => {
  const router = useRouter();
  const query = router.query.q as string || '';
  const [showTrends, setShowTrends] = useState(false);
  const [trendData, setTrendData] = useState<any>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const trendChartRef = useRef<HTMLCanvasElement>(null);
  const trendChart = useRef<any | null>(null);

  // 从本地存储加载搜索历史
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('searchHistory');
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory));
      }
    }
  }, []);

  // 保存搜索历史到本地存储
  const saveSearchHistory = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    const updatedHistory = [searchQuery, ...searchHistory.filter(item => item !== searchQuery)].slice(0, 10);
    setSearchHistory(updatedHistory);
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }
  };

  // 清除搜索历史
  const clearSearchHistory = () => {
    setSearchHistory([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('searchHistory');
    }
  };

  // 删除单个搜索历史
  const removeSearchHistory = (item: string) => {
    const updatedHistory = searchHistory.filter(i => i !== item);
    setSearchHistory(updatedHistory);
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }
  };

  // 从搜索历史中选择搜索
  const handleHistorySearch = (item: string) => {
    router.push(`/search?q=${encodeURIComponent(item)}`);
  };

  // 当查询参数变化时保存搜索历史
  useEffect(() => {
    if (query) {
      saveSearchHistory(query);
    }
  }, [query]);

  // 模拟搜索结果
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: '人工智能是什么？',
      url: 'https://example.com/ai-definition',
      description: '人工智能（AI）是计算机科学的一个分支，旨在创建能够执行通常需要人类智能的任务的系统。人工智能包括机器学习、深度学习、自然语言处理等多个领域，已经在医疗、金融、交通等行业得到广泛应用。'
    },
    {
      id: '2',
      title: '人工智能的历史与发展',
      url: 'https://example.com/ai-history',
      description: '从早期的计算理论到现代的深度学习，人工智能的发展经历了漫长的历程。1956年达特茅斯会议标志着人工智能的正式诞生，随后经历了几次发展浪潮，如今已成为推动科技进步的重要力量。'
    },
    {
      id: '3',
      title: '人工智能的应用领域',
      url: 'https://example.com/ai-applications',
      description: '人工智能在医疗、金融、交通、教育等领域都有广泛的应用。在医疗领域，AI可以辅助诊断疾病；在金融领域，AI可以进行风险评估和 fraud detection；在交通领域，AI可以支持自动驾驶技术的发展。'
    },
    {
      id: '4',
      title: '人工智能的未来展望',
      url: 'https://example.com/ai-future',
      description: '随着技术的不断进步，人工智能将在更多领域发挥重要作用。未来，AI可能会在太空探索、环境保护、个性化教育等领域带来革命性的变化，同时也需要我们关注其伦理和社会影响。'
    },
    {
      id: '5',
      title: '人工智能的伦理问题',
      url: 'https://example.com/ai-ethics',
      description: '人工智能的发展也带来了一系列伦理问题，需要我们认真思考。这些问题包括隐私保护、算法偏见、就业影响、AI安全等，需要政府、企业和社会各界共同努力，制定相关规范和标准。'
    }
  ];

  // 根据查询词过滤结果
  const results = query ? mockResults : [];

  // 模拟趋势预测数据
  const generateTrendData = () => {
    if (!query) return null;
    
    // 生成过去12个月的月度数据
    const monthlyData = [];
    const baseValue = 50;
    let currentValue = baseValue;
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthName = date.toLocaleString('zh-CN', { month: 'short' });
      
      // 添加一些随机波动，整体呈上升趋势
      const change = Math.random() * 8 - 2 + (i / 12) * 2; // 随时间增加增长趋势
      currentValue += change;
      
      monthlyData.push({
        month: monthName,
        value: Math.max(0, Math.round(currentValue)),
        change: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`
      });
    }
    
    // 生成未来6个月的预测数据
    const futureData = [];
    for (let i = 1; i <= 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() + i);
      const monthName = date.toLocaleString('zh-CN', { month: 'short' });
      
      // 预测未来趋势，保持增长但增速放缓
      const change = Math.random() * 5 - 1;
      currentValue += change;
      
      futureData.push({
        month: monthName,
        value: Math.max(0, Math.round(currentValue)),
        change: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`,
        isPrediction: true
      });
    }
    
    // 生成热点分析数据
    const hotTopics = [
      `${query}技术应用`,
      `${query}发展趋势`,
      `${query}创新突破`,
      `${query}行业应用`,
      `${query}未来展望`
    ];
    
    const hotTopicData = hotTopics.map(topic => ({
      topic,
      heat: Math.round(Math.random() * 50 + 50), // 热度值 50-100
      change: Math.round(Math.random() * 20 - 5) // 变化值 -5 到 15
    }));
    
    // 生成区域分布数据
    const regions = ['北京', '上海', '广州', '深圳', '杭州'];
    const regionData = regions.map(region => ({
      region,
      value: Math.round(Math.random() * 40 + 10) // 10-50
    }));
    
    return {
      keyword: query,
      monthlyData,
      futureData,
      hotTopicData,
      regionData,
      insights: [
        `${query}在过去一年呈现持续增长趋势，增长率达到25%`,
        `该领域在未来6个月预计将继续保持增长，但增速可能放缓`,
        `建议关注相关技术的创新突破和行业应用`,
        `竞争格局正在发生变化，新进入者增加，市场竞争加剧`,
        `技术创新是推动该领域发展的主要动力`,
        `热点话题集中在应用场景和未来发展方向`,
        `一线城市对${query}的关注度较高`
      ],
      summary: `根据过去12个月的数据分析，${query}的搜索热度呈现持续上升趋势，从${monthlyData[0].value}增长到${monthlyData[11].value}，增长率约为${((monthlyData[11].value - monthlyData[0].value) / monthlyData[0].value * 100).toFixed(1)}%。未来6个月预计将继续保持增长，但增速可能放缓。热点话题主要集中在技术应用、发展趋势和创新突破等方面。`
    };
  };

  // 处理趋势预测按钮点击
  const handleTrendsClick = () => {
    console.log('Trends button clicked');
    console.log('Current showTrends:', showTrends);
    if (!showTrends) {
      const data = generateTrendData();
      console.log('Generated trend data:', data);
      setTrendData(data);
    }
    setShowTrends(!showTrends);
    console.log('New showTrends:', !showTrends);
  };

  // 初始化和更新趋势图表
  useEffect(() => {
    if (showTrends && trendData && trendChartRef.current && Chart) {
      console.log('Creating chart...');
      // 销毁现有图表
      if (trendChart.current) {
        trendChart.current.destroy();
      }

      // 准备图表数据
      const labels = [...trendData.monthlyData.map((d: any) => d.month), ...trendData.futureData.map((d: any) => d.month)];
      const values = [...trendData.monthlyData.map((d: any) => d.value), ...trendData.futureData.map((d: any) => d.value)];
      const backgroundColor = trendData.monthlyData.map(() => 'rgba(34, 197, 94, 0.6)').concat(
        trendData.futureData.map(() => 'rgba(59, 130, 246, 0.6)')
      );
      const borderColor = trendData.monthlyData.map(() => 'rgba(34, 197, 94, 1)').concat(
        trendData.futureData.map(() => 'rgba(59, 130, 246, 1)')
      );

      try {
        // 创建图表
        trendChart.current = new Chart(trendChartRef.current, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: '搜索热度',
              data: values,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 2,
              tension: 0.3,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: '#fff'
                }
              },
              tooltip: {
                mode: 'index',
                intersect: false
              }
            },
            scales: {
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: '#fff'
                }
              },
              y: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: '#fff'
                }
              }
            }
          }
        });
        console.log('Chart created successfully');
      } catch (error) {
        console.error('Error creating chart:', error);
      }
    }

    // 清理函数
    return () => {
      if (trendChart.current) {
        trendChart.current.destroy();
      }
    };
  }, [showTrends, trendData]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>{query ? `${query} - 布莱恩检索中心` : '搜索 - 布莱恩检索中心'}</title>
        <meta name="description" content={`搜索结果: ${query}`} />
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
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">布莱恩检索中心</h1>
              <p className="text-gray-400">快速、准确地找到你需要的信息</p>
            </div>
            <SearchBar />
          </motion.div>
          
          {query && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-10 pb-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-lg">
                    找到 <span className="text-green-500 font-semibold">{results.length}</span> 个与 "<span className="text-green-500 font-semibold">{query}</span>" 相关的结果
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleTrendsClick}
                    className="px-4 py-2 rounded-lg bg-green-500 text-black hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 font-medium"
                  >
                    {showTrends ? '隐藏趋势预测' : '查看趋势预测'}
                  </motion.button>
                </div>
              </div>
              <SearchResults results={results} query={query} />
              
              {/* 趋势预测部分 */}
              {showTrends && trendData && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-12 p-8 bg-gray-800/50 rounded-xl border border-gray-700"
                >
                  <h2 className="text-2xl font-semibold mb-6">趋势预测分析</h2>
                  
                  {/* 数据整合报告 */}
                  <div className="mb-8 p-6 bg-gray-700/50 rounded-lg">
                    <h3 className="text-xl font-medium mb-4">数据整合报告</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {trendData.summary}
                    </p>
                  </div>
                  
                  {/* 趋势图表 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">搜索热度趋势</h3>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="h-80">
                        <canvas ref={trendChartRef}></canvas>
                      </div>
                      <div className="flex justify-center mt-4 space-x-6">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 mr-2"></div>
                          <span className="text-sm text-gray-300">历史数据</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                          <span className="text-sm text-gray-300">预测数据</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 热点话题分析 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">热点话题分析</h3>
                    <div className="space-y-4">
                      {trendData.hotTopicData.map((topic: any, index: number) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
                          <span className="font-medium">{topic.topic}</span>
                          <div className="flex items-center space-x-4">
                            <div className="w-40 bg-gray-600 rounded-full h-2.5">
                              <div 
                                className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                                style={{ width: `${topic.heat}%` }}
                              ></div>
                            </div>
                            <span className={`font-medium ${topic.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {topic.change >= 0 ? '+' : ''}{topic.change}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 区域分布分析 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">区域分布分析</h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {trendData.regionData.map((region: any, index: number) => (
                        <div key={index} className="p-4 bg-gray-700/50 rounded-lg text-center">
                          <div className="text-lg font-medium mb-2">{region.region}</div>
                          <div className="h-32 flex items-end justify-center">
                            <div 
                              className="bg-blue-500 rounded-t-lg transition-all duration-1000 ease-out" 
                              style={{ 
                                width: '80%', 
                                height: `${region.value * 2}%` 
                              }}
                            ></div>
                          </div>
                          <div className="mt-2 text-sm text-gray-400">{region.value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 洞察和建议 */}
                  <div>
                    <h3 className="text-xl font-medium mb-4">洞察和建议</h3>
                    <ul className="space-y-3">
                      {trendData.insights.map((insight: string, index: number) => (
                        <li key={index} className="flex items-start p-3 bg-gray-700/30 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-300">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
          
          {!query && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto py-16"
            >
              {searchHistory.length > 0 ? (
                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">最近搜索</h2>
                    <button 
                      onClick={clearSearchHistory}
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      清除历史
                    </button>
                  </div>
                  <div className="space-y-3">
                    {searchHistory.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/80 transition-colors">
                        <button 
                          onClick={() => handleHistorySearch(item)}
                          className="flex-1 text-left text-gray-300 hover:text-green-400 transition-colors"
                        >
                          {item}
                        </button>
                        <button 
                          onClick={() => removeSearchHistory(item)}
                          className="ml-4 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-24">
                  <div className="mx-auto w-32 h-32 rounded-full flex items-center justify-center mb-8 hover-lift" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">暂无搜索历史</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
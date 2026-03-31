'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell
} from 'recharts';

interface JobData {
  jobTitle: string;
  statistics: {
    demand: number;
    salary: number;
    growth: number;
    satisfaction: number;
    futureOutlook: number;
    skillDemand: number;
  };
  trends: {
    shortTerm: string;
    mediumTerm: string;
    longTerm: string;
    factors: string[];
  };
  news: Array<{
    title: string;
    source: string;
    date: string;
    url: string;
  }>;
  reports: Array<{
    title: string;
    source: string;
    date: string;
    url: string;
  }>;
  conferences: Array<{
    title: string;
    date: string;
    location: string;
    url: string;
  }>;
  marketAnalysis: {
    talentSupply: number;
    jobOpenings: number;
    averageSalary: number;
    growthRate: number;
    regionalDistribution: Array<{
      region: string;
      percentage: number;
    }>;
    skillGap: Array<{
      skill: string;
      demand: number;
    }>;
  };
  salaryData: {
    entryLevel: number;
    midLevel: number;
    seniorLevel: number;
    industryAverage: number;
  };
  jobTypes: {
    fullTime: number;
    partTime: number;
    freelance: number;
    remote: number;
  };
  companySize: {
    startup: number;
    small: number;
    medium: number;
    large: number;
  };
}

const mockJobTitles = [
  '前端开发',
  '后端开发',
  '产品经理',
  'UI设计',
  '人工智能工程师',
  'DevOps工程师',
  '移动开发',
  '网络安全',
  '数据分析师',
  '云计算',
  '区块链开发',
  '游戏开发',
  '嵌入式开发',
  '测试工程师',
  '运维工程师'
];

const mockJobData: JobData = {
  jobTitle: '前端开发',
  statistics: {
    demand: 85,
    salary: 75,
    growth: 90,
    satisfaction: 70,
    futureOutlook: 95,
    skillDemand: 80
  },
  trends: {
    shortTerm: '前端开发将继续保持高需求，特别是对React、Vue等框架的熟练掌握者。',
    mediumTerm: '随着WebAssembly和AI技术的融合，前端开发将向更复杂的应用场景扩展。',
    longTerm: '前端开发将与后端、移动端开发进一步融合，全栈开发能力将成为标配。',
    factors: ['技术创新', '用户体验需求', '移动互联网普及', 'AI技术融入']
  },
  news: [
    {
      title: '2024年前端开发趋势报告：React仍然主导市场',
      source: '前端技术周刊',
      date: '2024-03-15',
      url: '#'
    },
    {
      title: 'WebAssembly在前端性能优化中的应用',
      source: '技术前沿',
      date: '2024-03-10',
      url: '#'
    },
    {
      title: 'AI辅助前端开发工具兴起，开发效率提升30%',
      source: '开发者日报',
      date: '2024-03-05',
      url: '#'
    }
  ],
  reports: [
    {
      title: '2024年前端开发生态系统报告',
      source: '行业研究中心',
      date: '2024-02-28',
      url: '#'
    },
    {
      title: '前端开发者薪资调查报告',
      source: '招聘平台',
      date: '2024-02-15',
      url: '#'
    }
  ],
  conferences: [
    {
      title: '2024年前端技术大会',
      date: '2024-04-10',
      location: '上海',
      url: '#'
    },
    {
      title: 'React全球开发者大会',
      date: '2024-05-15',
      location: '北京',
      url: '#'
    }
  ],
  marketAnalysis: {
    talentSupply: 65,
    jobOpenings: 85,
    averageSalary: 25000,
    growthRate: 15,
    regionalDistribution: [
      { region: '北京', percentage: 30 },
      { region: '上海', percentage: 25 },
      { region: '深圳', percentage: 20 },
      { region: '杭州', percentage: 15 },
      { region: '其他', percentage: 10 }
    ],
    skillGap: [
      { skill: 'TypeScript', demand: 90 },
      { skill: 'React', demand: 85 },
      { skill: 'Vue', demand: 75 },
      { skill: 'Webpack', demand: 70 },
      { skill: 'Node.js', demand: 65 }
    ]
  },
  salaryData: {
    entryLevel: 15000,
    midLevel: 25000,
    seniorLevel: 35000,
    industryAverage: 22000
  },
  jobTypes: {
    fullTime: 80,
    partTime: 5,
    freelance: 10,
    remote: 5
  },
  companySize: {
    startup: 20,
    small: 30,
    medium: 35,
    large: 15
  }
};

const JobExplorer: React.FC = () => {
  const [jobTitles, setJobTitles] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [jobData, setJobData] = useState<JobData>(mockJobData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setJobTitles(mockJobTitles);
  }, []);

  const handleJobSelect = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsLoading(true);
    
    setTimeout(() => {
      setJobData(mockJobData);
      setIsLoading(false);
    }, 800);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length > 2) {
      setIsSearching(true);
      setTimeout(() => {
        const results = mockJobTitles.filter(title => 
          title.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
    }
  };

  const handleAddIndustry = () => {
    if (searchTerm.trim() && !jobTitles.includes(searchTerm.trim())) {
      setShowAddForm(true);
    }
  };

  const confirmAddIndustry = () => {
    if (searchTerm.trim() && !jobTitles.includes(searchTerm.trim())) {
      const newJobTitle = searchTerm.trim();
      setJobTitles([...jobTitles, newJobTitle]);
      setSelectedJob(newJobTitle);
      setShowAddForm(false);
      setSearchTerm('');
      setSearchResults([]);
      
      setIsLoading(true);
      setTimeout(() => {
        setJobData({
          ...mockJobData,
          jobTitle: newJobTitle
        });
        setIsLoading(false);
      }, 800);
    }
  };

  const renderProgressBar = (value: number, label: string) => (
    <div>
      <div className="flex items-center mb-1">
        <span className="text-sm text-gray-700">{label}</span>
        <span className="ml-auto text-sm font-medium text-primary-600">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">职业数据探索</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            探索各个职业的发展趋势、薪资水平和市场需求，获取最新的行业动态和分析报告
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧职业列表 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-6">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="搜索行业..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {isSearching && (
                  <div className="absolute right-3 top-2.5">
                    <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              
              {searchResults.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">搜索结果</h4>
                  <ul className="space-y-1">
                    {searchResults.map((result, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => handleJobSelect(result)}
                          className={`w-full text-left px-3 py-2 rounded-md ${selectedJob === result ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
                        >
                          {result}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              
              {searchTerm.length > 2 && searchResults.length === 0 && (
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 mb-2">未找到相关行业</p>
                  <button
                    onClick={handleAddIndustry}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    添加 "{searchTerm}" 行业
                  </button>
                </div>
              )}
              
              {showAddForm && (
                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800 mb-2">确定要添加 "{searchTerm}" 行业吗？</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={confirmAddIndustry}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors"
                    >
                      确定
                    </button>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </div>
              )}
              
              <h4 className="text-sm font-medium text-gray-700 mb-2">热门行业</h4>
              <ul className="space-y-1 max-h-96 overflow-y-auto pr-1">
                {jobTitles.map((jobTitle, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleJobSelect(jobTitle)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedJob === jobTitle ? 'bg-primary-100 text-primary-700 font-medium' : 'hover:bg-gray-100'}`}
                    >
                      {jobTitle}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 右侧数据展示 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">加载中...</p>
                </div>
              </div>
            ) : selectedJob ? (
              <div className="space-y-8">
                {/* 职业概览 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-2">{jobData.jobTitle}</h3>
                  <p className="text-primary-100 mb-4">职业发展趋势分析</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-sm text-primary-100 mb-1">市场需求</p>
                      <p className="text-2xl font-bold">{jobData.statistics.demand}%</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-sm text-primary-100 mb-1">薪资水平</p>
                      <p className="text-2xl font-bold">{jobData.statistics.salary}%</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-sm text-primary-100 mb-1">增长趋势</p>
                      <p className="text-2xl font-bold">{jobData.statistics.growth}%</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-sm text-primary-100 mb-1">未来展望</p>
                      <p className="text-2xl font-bold">{jobData.statistics.futureOutlook}%</p>
                    </div>
                  </div>
                </motion.div>

                {/* 行业统计 */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">行业统计</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                    >
                      <h4 className="font-medium text-gray-800 mb-4">综合指标</h4>
                      <div className="h-80">
                        {isClient && (
                          <ResponsiveContainer width="100%" height={300}>
                            <RadarChart outerRadius={90} data={[
                              { subject: '市场需求', A: jobData.statistics.demand, fullMark: 100 },
                              { subject: '薪资水平', A: jobData.statistics.salary, fullMark: 100 },
                              { subject: '增长趋势', A: jobData.statistics.growth, fullMark: 100 },
                              { subject: '职业满意度', A: jobData.statistics.satisfaction, fullMark: 100 },
                              { subject: '未来展望', A: jobData.statistics.futureOutlook, fullMark: 100 },
                              { subject: '技能需求', A: jobData.statistics.skillDemand, fullMark: 100 },
                            ]}>
                              <PolarGrid stroke="#e5e7eb" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12 }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
                              <Radar
                                name={jobData.jobTitle}
                                dataKey="A"
                                stroke="#0ea5e9"
                                fill="#0ea5e9"
                                fillOpacity={0.3}
                              />
                              <Legend />
                            </RadarChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                      className="space-y-4"
                    >
                      {renderProgressBar(jobData.statistics.demand, '市场需求')}
                      {renderProgressBar(jobData.statistics.salary, '薪资水平')}
                      {renderProgressBar(jobData.statistics.growth, '增长趋势')}
                      {renderProgressBar(jobData.statistics.satisfaction, '职业满意度')}
                      {renderProgressBar(jobData.statistics.futureOutlook, '未来展望')}
                      {renderProgressBar(jobData.statistics.skillDemand, '技能需求')}
                    </motion.div>
                  </div>
                </div>

                {/* 薪资水平 */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">薪资与就业</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                    >
                      <h4 className="font-medium text-gray-600 mb-4">薪资水平</h4>
                      <div className="h-64">
                        {isClient && (
                          <ResponsiveContainer width="100%" height={256}>
                            <BarChart
                              data={[
                                { name: '入门级', value: jobData.salaryData.entryLevel },
                                { name: '中级', value: jobData.salaryData.midLevel },
                                { name: '高级', value: jobData.salaryData.seniorLevel },
                                { name: '行业平均', value: jobData.salaryData.industryAverage },
                              ]}
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                              <XAxis dataKey="name" tick={{ fill: '#4b5563', fontSize: 12 }} />
                              <YAxis tick={{ fill: '#9ca3af' }} />
                              <Tooltip 
                                formatter={(value) => [`¥${value?.toLocaleString() || '0'}`, '月薪']} 
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                              />
                              <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-700">入门级</span>
                          <span className="text-sm font-medium text-primary-600">¥{jobData.salaryData.entryLevel.toLocaleString()}/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-700">中级</span>
                          <span className="text-sm font-medium text-primary-600">¥{jobData.salaryData.midLevel.toLocaleString()}/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-700">高级</span>
                          <span className="text-sm font-medium text-primary-600">¥{jobData.salaryData.seniorLevel.toLocaleString()}/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-700">行业平均</span>
                          <span className="text-sm font-medium text-primary-600">¥{jobData.salaryData.industryAverage.toLocaleString()}/月</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                      className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                    >
                      <h4 className="font-medium text-gray-600 mb-4">工作类型分布</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-64">
                          {isClient && (
                            <ResponsiveContainer width="100%" height={256}>
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: '全职', value: jobData.jobTypes.fullTime },
                                    { name: '兼职', value: jobData.jobTypes.partTime },
                                    { name: '自由职业', value: jobData.jobTypes.freelance },
                                    { name: '远程工作', value: jobData.jobTypes.remote },
                                  ]}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={60}
                                  outerRadius={80}
                                  paddingAngle={2}
                                  dataKey="value"
                                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                  labelLine={false}
                                >
                                  <Cell key="fullTime" fill="#0ea5e9" />
                                  <Cell key="partTime" fill="#22c55e" />
                                  <Cell key="freelance" fill="#ef4444" />
                                  <Cell key="remote" fill="#8b5cf6" />
                                </Pie>
                                <Tooltip 
                                  formatter={(value) => [`${value}%`, '占比']} 
                                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                                />
                              </PieChart>
                            </ResponsiveContainer>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">全职</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.jobTypes.fullTime}%</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">兼职</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.jobTypes.partTime}%</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">自由职业</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.jobTypes.freelance}%</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">远程工作</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.jobTypes.remote}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* 市场分析 */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">市场分析</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                    >
                      <h4 className="font-medium text-gray-800 mb-4">市场概览</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">人才供给</span>
                          <span className="text-xl font-semibold text-primary-600">{jobData.marketAnalysis.talentSupply}%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">职位空缺</span>
                          <span className="text-xl font-semibold text-primary-600">{jobData.marketAnalysis.jobOpenings}%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">平均薪资</span>
                          <span className="text-xl font-semibold text-primary-600">¥{jobData.marketAnalysis.averageSalary.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">增长率</span>
                          <span className="text-xl font-semibold text-primary-600">{jobData.marketAnalysis.growthRate}%</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="p-4 bg-white border border-gray-200 rounded-xl"
                    >
                      <h4 className="font-medium text-gray-800 mb-4">区域分布</h4>
                      <div className="h-64">
                        {isClient && (
                          <ResponsiveContainer width="100%" height={256}>
                            <BarChart
                              layout="vertical"
                              data={jobData.marketAnalysis.regionalDistribution}
                              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                              <XAxis type="number" domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
                              <YAxis dataKey="region" type="category" tick={{ fill: '#4b5563', fontSize: 12 }} width={80} />
                              <Tooltip 
                                formatter={(value) => [`${value}%`, '占比']} 
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                              />
                              <Bar dataKey="percentage" fill="#0ea5e9" radius={[0, 4, 4, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">公司规模分布</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-64 w-full">
                          {isClient && (
                            <ResponsiveContainer width="100%" height={256}>
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: '初创公司', value: jobData.companySize.startup },
                                    { name: '小型公司', value: jobData.companySize.small },
                                    { name: '中型公司', value: jobData.companySize.medium },
                                    { name: '大型公司', value: jobData.companySize.large },
                                  ]}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={60}
                                  outerRadius={80}
                                  paddingAngle={2}
                                  dataKey="value"
                                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                  labelLine={false}
                                >
                                  <Cell key="startup" fill="#3b82f6" />
                                  <Cell key="small" fill="#10b981" />
                                  <Cell key="medium" fill="#8b5cf6" />
                                  <Cell key="large" fill="#ef4444" />
                                </Pie>
                                <Tooltip 
                                  formatter={(value) => [`${value}%`, '占比']} 
                                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                                />
                              </PieChart>
                            </ResponsiveContainer>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">初创公司</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.companySize.startup}%</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">小型公司</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.companySize.small}%</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">中型公司</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.companySize.medium}%</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-700">大型公司</span>
                              <span className="ml-auto text-sm font-medium text-primary-600">{jobData.companySize.large}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                      className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">技能缺口</h3>
                      <div className="space-y-4">
                        {jobData.marketAnalysis.skillGap.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-700 font-medium">{skill.skill}</span>
                              <span className="text-sm font-medium text-primary-600">{skill.demand}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <motion.div 
                                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.demand}%` }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* 趋势分析 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">趋势分析</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">短期趋势</h4>
                      <p className="text-gray-600">{jobData.trends.shortTerm}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">中期趋势</h4>
                      <p className="text-gray-600">{jobData.trends.mediumTerm}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">长期趋势</h4>
                      <p className="text-gray-600">{jobData.trends.longTerm}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">影响因素</h4>
                      <div className="flex flex-wrap gap-2">
                        {jobData.trends.factors.map((factor, index) => (
                          <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                            {factor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 新闻和报告 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">最新新闻</h3>
                    <div className="space-y-4">
                      {jobData.news.map((news, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="p-3 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
                        >
                          <h4 className="font-medium text-gray-800 mb-1">{news.title}</h4>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{news.source}</span>
                            <span>{news.date}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">行业报告</h3>
                    <div className="space-y-4">
                      {jobData.reports.map((report, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="p-3 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
                        >
                          <h4 className="font-medium text-gray-800 mb-1">{report.title}</h4>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{report.source}</span>
                            <span>{report.date}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* 技术会议 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">技术会议</h3>
                  <div className="space-y-4">
                    {jobData.conferences.map((conference, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
                      >
                        <h4 className="font-medium text-gray-800 mb-2">{conference.title}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {conference.date}
                          </div>
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {conference.location}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center h-64 text-center p-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">选择一个行业</h3>
                <p className="text-gray-600">从左侧列表中选择一个行业或使用搜索功能添加新行业</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobExplorer;
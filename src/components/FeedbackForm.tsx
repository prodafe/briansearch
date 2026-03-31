import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    type: 'suggestion',
    subject: '',
    message: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      // 重置表单
      setFormData({
        type: 'suggestion',
        subject: '',
        message: '',
        email: ''
      });
      // 3秒后重置成功状态
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('提交失败:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
      <h2 className="text-2xl font-semibold text-white mb-6">用户反馈</h2>
      
      {submitSuccess ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-semibold text-green-400 mb-2">反馈提交成功</h3>
          <p className="text-gray-300">感谢您的反馈，我们会认真考虑您的建议</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="type" className="block text-gray-300 text-sm font-medium mb-2">反馈类型</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
              required
            >
              <option value="suggestion">功能建议</option>
              <option value="bug">Bug 报告</option>
              <option value="question">问题咨询</option>
              <option value="other">其他</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">主题</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
              placeholder="请输入反馈主题"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">反馈内容</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
              placeholder="请详细描述您的反馈内容"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">联系邮箱（选填）</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white"
              placeholder="请输入您的邮箱地址，以便我们回复"
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary hover-lift flex justify-center items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                提交中...
              </>
            ) : (
              '提交反馈'
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
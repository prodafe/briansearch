import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 通知类型定义
type Notification = {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  time: string;
  read: boolean;
};

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: '账号安全提醒',
      message: '您的账号于2024年12月15日在新设备上登录',
      type: 'warning',
      time: '10分钟前',
      read: false
    },
    {
      id: '2',
      title: '搜索结果更新',
      message: '您关注的关键词"人工智能"有新的搜索结果',
      type: 'info',
      time: '1小时前',
      read: false
    },
    {
      id: '3',
      title: '注册成功',
      message: '您的账号已成功注册，欢迎使用布莱恩检索中心',
      type: 'success',
      time: '2小时前',
      read: true
    },
    {
      id: '4',
      title: '系统维护通知',
      message: '系统将于今晚23:00-次日01:00进行维护，期间可能短暂无法访问',
      type: 'info',
      time: '昨天',
      read: true
    }
  ]);

  // 获取未读通知数量
  const unreadCount = notifications.filter(n => !n.read).length;

  // 标记所有通知为已读
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // 标记单个通知为已读
  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  // 删除通知
  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // 获取通知类型对应的图标和颜色
  const getNotificationInfo = (type: string) => {
    switch (type) {
      case 'success':
        return { icon: '✅', color: 'text-green-500', bgColor: 'bg-green-500/10' };
      case 'info':
        return { icon: 'ℹ️', color: 'text-blue-500', bgColor: 'bg-blue-500/10' };
      case 'warning':
        return { icon: '⚠️', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' };
      case 'error':
        return { icon: '❌', color: 'text-red-500', bgColor: 'bg-red-500/10' };
      default:
        return { icon: 'ℹ️', color: 'text-blue-500', bgColor: 'bg-blue-500/10' };
    }
  };

  return (
    <div className="relative">
      {/* 通知按钮 */}
      <motion.button
        className="relative p-2 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 transition-all duration-300 shadow-none"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(127, 127, 127, 0.2)' }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="通知中心"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {/* 未读通知数量 */}
        {unreadCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {unreadCount}
          </motion.div>
        )}
      </motion.button>

      {/* 通知中心面板 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-lg border border-gray-700 rounded-xl shadow-none z-50"
          >
            {/* 通知中心头部 */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold">通知中心</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-green-400 hover:text-green-300 transition-colors px-2 py-1 rounded bg-gray-800/50 hover:bg-gray-700/50"
                >
                  全部标为已读
                </button>
              )}
            </div>

            {/* 通知列表 */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <p className="text-gray-400">暂无通知</p>
                </div>
              ) : (
                notifications.map((notification) => {
                  const { icon, color, bgColor } = getNotificationInfo(notification.type);
                  return (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`p-4 border-b border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer ${!notification.read ? 'bg-green-500/5' : ''} shadow-none`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start">
                        {/* 通知图标 */}
                        <div className={`${bgColor} ${color} p-2 rounded-lg mr-3 flex-shrink-0`}>
                          {icon}
                        </div>
                        
                        {/* 通知内容 */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className={`font-medium ${!notification.read ? '' : ''}`}>
                              {notification.title}
                            </h4>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                              className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded bg-gray-800/50 hover:bg-gray-700/50"
                              aria-label="删除通知"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* 通知中心底部 */}
            <div className="p-4 border-t border-gray-700">
              <button
                className="w-full text-center text-sm text-green-400 hover:text-green-300 transition-colors py-2 rounded bg-gray-800/50 hover:bg-gray-700/50"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                关闭
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationCenter;
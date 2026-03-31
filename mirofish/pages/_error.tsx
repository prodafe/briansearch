import React from 'react';
import NextErrorComponent from 'next/error';

const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {statusCode === 404 ? '页面未找到' : '发生错误'}
        </h1>
        <p className="text-gray-400 mb-8">
          {statusCode === 404 
            ? '您访问的页面不存在或已被移除' 
            : '服务器遇到了一个错误，请稍后再试'}
        </p>
        <a 
          href="/" 
          className="bg-green-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          返回首页
        </a>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
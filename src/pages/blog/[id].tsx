import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  relatedPosts: {
    id: string;
    title: string;
    date: string;
  }[];
}

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  // 模拟博客详情数据
  const blogPost: BlogPost = {
    id: id as string,
    title: '人工智能的未来发展趋势',
    content: `
      <p className="mb-6">人工智能（AI）是当前科技领域最热门的话题之一，它正在改变我们的生活和工作方式。本文将探讨人工智能技术的最新进展和未来发展方向。</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">机器学习的突破</h2>
      <p className="mb-6">机器学习是人工智能的核心技术之一，近年来取得了显著的突破。深度学习算法的不断改进，使得机器能够从海量数据中学习并做出准确的预测。</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">自然语言处理的进展</h2>
      <p className="mb-6">自然语言处理（NLP）技术的发展使得机器能够理解和生成人类语言。从早期的简单文本分析到现在的复杂对话系统，NLP技术已经取得了巨大的进步。</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">计算机视觉的应用</h2>
      <p className="mb-6">计算机视觉技术使得机器能够理解和分析图像和视频。从人脸识别到自动驾驶，计算机视觉技术已经在多个领域得到了广泛的应用。</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">人工智能的伦理挑战</h2>
      <p className="mb-6">随着人工智能技术的不断发展，伦理问题也日益凸显。如何确保人工智能的安全、公平和透明，成为了我们需要面对的重要挑战。</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">未来发展方向</h2>
      <p className="mb-6">未来，人工智能技术将继续向着更加智能化、个性化和普及化的方向发展。我们可以期待看到更多创新的应用场景，以及更加完善的人工智能生态系统。</p>
      
      <p className="mb-6">总之，人工智能技术的发展前景广阔，它将为我们的生活和社会带来深远的影响。我们需要积极拥抱这一技术变革，同时也要关注其可能带来的挑战，确保人工智能的发展能够造福人类。</p>
    `,
    date: '2024-03-25',
    author: '布莱恩·格里芬',
    category: '人工智能',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20future%20technology%20abstract%20background&image_size=landscape_16_9',
    relatedPosts: [
      {
        id: '2',
        title: '搜索引擎优化的新策略',
        date: '2024-03-20'
      },
      {
        id: '3',
        title: '自然语言处理技术的应用与挑战',
        date: '2024-03-15'
      },
      {
        id: '4',
        title: '大数据分析在企业决策中的应用',
        date: '2024-03-10'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>{blogPost.title} - 布莱恩检索中心</title>
        <meta name="description" content={`${blogPost.title} - ${blogPost.content.substring(0, 100)}...`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* 文章标题和图片 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* 分类标签 */}
            <div className="mb-4">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400">{blogPost.category}</span>
            </div>
            
            {/* 标题 */}
            <h1 className="text-4xl font-bold text-white mb-6">{blogPost.title}</h1>
            
            {/* 作者和日期 */}
            <div className="flex items-center mb-8 text-gray-400">
              <span className="mr-6">作者：{blogPost.author}</span>
              <span>发布日期：{blogPost.date}</span>
            </div>
            
            {/* 文章图片 */}
            <div className="mb-12">
              <img src={blogPost.image} alt={blogPost.title} className="w-full h-96 object-cover rounded-xl" />
            </div>
            
            {/* 文章内容 */}
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
            
            {/* 相关文章 */}
            <div className="mt-16 border-t border-gray-700 pt-12">
              <h3 className="text-2xl font-semibold text-white mb-6">相关文章</h3>
              <div className="space-y-4">
                {blogPost.relatedPosts.map((post) => (
                  <motion.div 
                    key={post.id}
                    whileHover={{ x: 10 }}
                    className="p-4 border border-gray-700 rounded-lg hover:border-green-500/50 transition-all duration-300"
                  >
                    <h4 className="text-white font-medium hover:text-green-400 transition-colors">{post.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{post.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
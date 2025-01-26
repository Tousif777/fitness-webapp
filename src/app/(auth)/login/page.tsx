'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const features = [
  { 
    title: 'Smart Workouts', 
    desc: 'AI-powered personalized training',
    icon: '💪',
    color: 'from-blue-400 to-blue-600'
  },
  { 
    title: 'Real-time Progress', 
    desc: 'Track your fitness evolution',
    icon: '📈',
    color: 'from-purple-400 to-purple-600'
  },
  { 
    title: 'Global Community', 
    desc: 'Connect with fitness enthusiasts',
    icon: '🤝',
    color: 'from-pink-400 to-pink-600'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex bg-gray-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-shift" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(17,24,39,0.8)_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Left side - Login form */}
      <motion.div 
        className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="max-w-md w-full space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="relative inline-block">
              <h1 className="text-6xl font-bold text-white mb-2">
                FitTrack
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Pro</span>
              </h1>
              <motion.div
                className="absolute -top-6 -right-6 text-3xl"
                animate={{
                  rotate: [0, 14, -8, 14, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                💪
              </motion.div>
            </div>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
              Transform Your Fitness Journey
            </h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Experience the future of fitness with AI-powered workouts, real-time tracking, and a global community of fitness enthusiasts.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-10">
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium rounded-2xl text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <svg className="h-6 w-6 relative transition-transform group-hover:scale-110 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
              <span className="relative z-10 transition-transform group-hover:scale-105">Sign in with Google</span>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or try it first</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => router.push('/dashboard')}
                className="w-full group relative flex items-center justify-center px-8 py-4 text-lg font-medium rounded-2xl text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 transition-transform group-hover:scale-105">
                  Explore Demo
                </span>
                <motion.span
                  className="ml-2"
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.span>
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 text-center text-sm">
            <p className="text-gray-400">
              By continuing, you agree to our{' '}
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right side - Image */}
      <motion.div 
        className="hidden lg:block w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1920&auto=format&fit=crop"
            alt="Fitness motivation"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent" />
        </div>
        
        {/* Floating features */}
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <motion.div 
            className="grid grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className={`backdrop-blur-md rounded-2xl p-6 border border-white/20 bg-white/10 transform transition-all duration-300 ${
                  hoveredFeature === index ? 'bg-white/20' : ''
                }`}
              >
                <motion.div
                  animate={hoveredFeature === index ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-3xl mb-4 block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-200">{feature.desc}</p>
                <div className={`h-1 w-20 mt-4 rounded-full bg-gradient-to-r ${feature.color} transform origin-left transition-all duration-300 ${
                  hoveredFeature === index ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 
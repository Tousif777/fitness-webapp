'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: 'Smart Workouts',
    description: 'AI-powered personalized training plans that adapt to your progress',
    icon: '💪',
    color: 'from-blue-400 to-blue-500',
  },
  {
    title: 'Progress Tracking',
    description: 'Visual analytics and insights to monitor your fitness journey',
    icon: '📈',
    color: 'from-purple-400 to-purple-500',
  },
  {
    title: 'Nutrition Plans',
    description: 'Customized meal plans and macro tracking for optimal results',
    icon: '🥗',
    color: 'from-green-400 to-green-500',
  },
  {
    title: 'Community Support',
    description: 'Connect with fitness enthusiasts and share your achievements',
    icon: '🤝',
    color: 'from-pink-400 to-pink-500',
  },
];

const workoutTypes = [
  {
    name: 'Strength Training',
    description: 'Build muscle and increase strength with our comprehensive weight training programs',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60',
    metrics: ['45+ Exercises', '12-Week Programs', 'Video Guidance']
  },
  {
    name: 'HIIT Cardio',
    description: 'Burn fat and improve endurance with high-intensity interval training workouts',
    image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&auto=format&fit=crop&q=60',
    metrics: ['30-Min Sessions', 'Equipment-Free', 'Custom Intervals']
  },
  {
    name: 'Yoga & Flexibility',
    description: 'Enhance mobility and reduce stress with guided yoga and stretching routines',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60',
    metrics: ['20+ Styles', 'Beginner Friendly', 'Meditation']
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60',
    quote: 'FitTrack Pro transformed my approach to fitness. The AI-powered workouts keep me challenged and motivated every day.',
  },
  {
    name: 'Michael Chen',
    role: 'Marathon Runner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60',
    quote: 'The progress tracking features are incredible. I can see my improvements in real-time and adjust my training accordingly.',
  },
  {
    name: 'Emma Davis',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60',
    quote: 'As a fitness professional, I appreciate the attention to form and technique in every workout. The community support is amazing!',
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-40 -right-40 bg-blue-500/20 rounded-full blur-3xl animate-blob mix-blend-soft-light" />
        <div className="absolute w-[600px] h-[600px] -bottom-40 -left-40 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-soft-light" />
        <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-soft-light" />
        
        {/* Added floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-4000" />
      </div>

      {/* Enhanced grid overlay with more dynamic pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.8)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-30" />

      {/* Hero Section with mobile optimizations */}
      <div className="relative">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-12 sm:pb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative inline-block mb-6 sm:mb-8"
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 sm:-top-12 -left-8 sm:-left-12 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse animation-delay-2000" />
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient relative z-10">
              FitTrack Pro
            </h1>
            
            {/* Enhanced floating emoji with trail effect */}
            <motion.div
              className="absolute -top-8 -right-8 flex items-center justify-center"
              animate={{
                rotate: [0, 14, -8, 14, 0],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="text-5xl relative z-20">💪</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg animate-pulse" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Transform your fitness journey with{' '}
            <span className="text-blue-400">AI-powered workouts</span>,{' '}
            <span className="text-purple-400">real-time tracking</span>, and a{' '}
            <span className="text-pink-400">supportive community</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link 
              href="/login"
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-medium rounded-xl sm:rounded-2xl text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Free
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" />
            </Link>
            <Link 
              href="/dashboard"
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-medium rounded-xl sm:rounded-2xl text-white bg-gray-800/80 hover:bg-gray-700/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm"
            >
              Try Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid - Mobile optimized */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.5, duration: 0.5 }}
                className="relative"
              >
                <div className="h-full p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] bg-[#1A1E2C] border border-gray-800/50">
                  <div className="flex flex-col h-full">
                    <div className="mb-3 sm:mb-4">
                      <span className="text-3xl sm:text-4xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section - Mobile optimized */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '500+', label: 'Workouts' },
              { value: '95%', label: 'Success Rate' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.7, duration: 0.5 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workout Types Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Diverse Workout Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workoutTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.9, duration: 0.5 }}
                className="relative group rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60" />
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-3">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.metrics.map((metric) => (
                      <span key={metric} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 1.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform transition-transform group-hover:scale-105 group-hover:rotate-1" />
                <div className="relative p-8 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">{testimonial.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=800&auto=format&fit=crop&q=60"
                alt="Fitness motivation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/80" />
            </div>
            <div className="relative py-20 px-8 md:px-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Fitness Journey Today
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of members who have transformed their lives with FitTrack Pro&apos;s personalized fitness experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/login"
                  className="group relative px-8 py-4 text-lg font-medium rounded-2xl text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started Free
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" />
                </Link>
                <Link 
                  href="#features"
                  className="px-8 py-4 text-lg font-medium rounded-2xl text-white bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

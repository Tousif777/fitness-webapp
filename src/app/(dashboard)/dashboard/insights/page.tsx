'use client';

import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Zap, ChevronRight, BarChart3 } from 'lucide-react';

const insights = [
  {
    title: 'Workout Optimization',
    description: 'Based on your recent performance, increasing your rest periods by 30 seconds could improve strength gains.',
    type: 'suggestion',
    icon: Zap,
    date: 'Updated today',
  },
  {
    title: 'Nutrition Analysis',
    description: 'Your protein intake is below target. Consider adding a post-workout protein shake to meet your goals.',
    type: 'alert',
    icon: Target,
    date: 'Updated 2 hours ago',
  },
  {
    title: 'Progress Prediction',
    description: 'At your current rate, you\'re on track to reach your weight goal in 6 weeks.',
    type: 'prediction',
    icon: TrendingUp,
    date: 'Updated today',
  },
];

const weeklyAnalysis = [
  { metric: 'Workout Consistency', score: 85, trend: 'up', change: '+5%' },
  { metric: 'Nutrition Adherence', score: 78, trend: 'up', change: '+3%' },
  { metric: 'Recovery Quality', score: 92, trend: 'down', change: '-2%' },
  { metric: 'Training Intensity', score: 88, trend: 'up', change: '+4%' },
];

const recommendations = [
  {
    title: 'Try HIIT Workout',
    description: 'Based on your goals and schedule, a high-intensity interval training session could be beneficial.',
    confidence: 89,
  },
  {
    title: 'Increase Carb Intake',
    description: 'Your performance data suggests adding more carbs on training days could improve energy levels.',
    confidence: 92,
  },
  {
    title: 'Rest Day Recommended',
    description: 'Your recovery metrics indicate taking a rest day would be optimal for performance.',
    confidence: 95,
  },
];

export default function InsightsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">AI Insights</h1>
        <p className="text-gray-400">Personalized recommendations and analytics</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {weeklyAnalysis.map((item) => (
          <div key={item.metric} className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-2">{item.metric}</h3>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">{item.score}%</span>
              <span className={`text-sm ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Latest Insights</h2>
        <div className="space-y-4">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.title} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-500/10 rounded-lg mr-4">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-medium">{insight.title}</h3>
                      <span className="text-sm text-gray-400">{insight.date}</span>
                    </div>
                    <p className="text-gray-300">{insight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Personalized Recommendations</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recommendations.map((rec) => (
            <div key={rec.title} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Brain className="h-6 w-6 text-blue-500" />
                <span className="text-sm text-blue-400">{rec.confidence}% confidence</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{rec.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{rec.description}</p>
              <button className="w-full p-2 bg-blue-500/10 text-blue-400 rounded-lg font-medium hover:bg-blue-500/20 transition-colors">
                Apply Recommendation
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Analytics */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-white">Performance Analytics</h2>
          <button className="text-sm text-blue-500 hover:text-blue-400 flex items-center">
            View Detailed Report
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h3 className="text-white font-medium">Overall Progress Score</h3>
              <p className="text-sm text-gray-400">Based on your last 30 days of activity</p>
            </div>
            <span className="text-3xl font-bold text-white">8.5</span>
          </div>
          <div className="h-48 flex items-center justify-center border-t border-gray-700">
            <div className="flex flex-col items-center text-gray-400">
              <BarChart3 className="h-8 w-8 mb-2" />
              <span className="text-sm">Detailed analytics coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
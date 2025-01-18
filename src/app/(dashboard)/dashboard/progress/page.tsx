'use client';

import { LineChart, Scale, Camera, Trophy, ChevronRight } from 'lucide-react';

const progressMetrics = [
  {
    name: 'Weight',
    current: '75.5 kg',
    change: '-2.3 kg',
    trend: 'down',
    period: 'Last 30 days',
    icon: Scale,
  },
  {
    name: 'Body Fat',
    current: '18%',
    change: '-1.5%',
    trend: 'down',
    period: 'Last 30 days',
    icon: LineChart,
  },
  {
    name: 'Muscle Mass',
    current: '35.2 kg',
    change: '+1.1 kg',
    trend: 'up',
    period: 'Last 30 days',
    icon: Trophy,
  },
];

const achievements = [
  {
    name: '30 Day Streak',
    description: 'Completed workouts for 30 consecutive days',
    date: 'Achieved 2 days ago',
    icon: '🔥',
  },
  {
    name: 'Weight Goal',
    description: 'Reached your target weight of 75kg',
    date: 'Achieved 1 week ago',
    icon: '⚖️',
  },
  {
    name: 'Power Lifter',
    description: 'Lifted 1000kg total across all exercises',
    date: 'Achieved 2 weeks ago',
    icon: '💪',
  },
];

const measurements = [
  { name: 'Chest', current: '95 cm', previous: '93 cm' },
  { name: 'Waist', current: '82 cm', previous: '85 cm' },
  { name: 'Arms', current: '35 cm', previous: '34 cm' },
  { name: 'Thighs', current: '55 cm', previous: '54 cm' },
];

export default function ProgressPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Progress Tracking</h1>
        <p className="text-gray-400">Monitor your fitness journey and achievements</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <button className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
          Update Measurements
        </button>
        <button className="p-4 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors">
          Add Progress Photo
        </button>
        <button className="p-4 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors">
          View Progress History
        </button>
      </div>

      {/* Progress Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {progressMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.name}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-6 w-6 text-blue-500" />
                <span
                  className={`text-sm font-medium ${
                    metric.trend === 'down' ? 'text-green-400' : 'text-blue-400'
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{metric.current}</h3>
              <p className="text-sm text-gray-400">{metric.name}</p>
              <p className="text-xs text-gray-500 mt-2">{metric.period}</p>
            </div>
          );
        })}
      </div>

      {/* Body Measurements */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Body Measurements</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {measurements.map((measurement) => (
            <div key={measurement.name} className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-400 mb-2">{measurement.name}</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-white">{measurement.current}</span>
                <span className="ml-2 text-sm text-gray-500">from {measurement.previous}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Photos */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-white">Progress Photos</h2>
          <button className="text-sm text-blue-500 hover:text-blue-400">View All</button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
            <Camera className="h-8 w-8 text-gray-600" />
          </div>
          {/* Add more photo placeholders here */}
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <h2 className="text-lg font-medium text-white mb-4">Recent Achievements</h2>
        <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className="p-4 flex items-center justify-between hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className="text-2xl mr-4">{achievement.icon}</div>
                <div>
                  <h3 className="text-white font-medium">{achievement.name}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">{achievement.date}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
'use client';

import { Dumbbell, Apple, LineChart, Users, Brain, ArrowUp, ArrowDown, Activity } from 'lucide-react';
import Link from 'next/link';

const quickStats = [
  {
    name: 'Active Streak',
    value: '12 days',
    change: '+2',
    trend: 'up',
  },
  {
    name: 'Weekly Workouts',
    value: '6',
    change: '+1',
    trend: 'up',
  },
  {
    name: 'Calories Today',
    value: '1,850',
    change: '-150',
    trend: 'down',
  },
  {
    name: 'Monthly Progress',
    value: '85%',
    change: '+5%',
    trend: 'up',
  },
];

const featuredWorkout = {
  name: 'Full Body HIIT',
  duration: '45 min',
  intensity: 'High',
  calories: '400',
};

const todaysMeals = [
  { name: 'Breakfast', calories: 450, time: '8:00 AM', completed: true },
  { name: 'Lunch', calories: 650, time: '12:30 PM', completed: true },
  { name: 'Snack', calories: 200, time: '3:30 PM', completed: false },
  { name: 'Dinner', calories: 550, time: '7:00 PM', completed: false },
];

const quickActions = [
  { 
    name: 'Start Workout', 
    href: '/dashboard/workouts', 
    icon: Dumbbell,
    iconClass: 'text-blue-500'
  },
  { 
    name: 'Log Meal', 
    href: '/dashboard/nutrition', 
    icon: Apple,
    iconClass: 'text-green-500'
  },
  { 
    name: 'View Progress', 
    href: '/dashboard/progress', 
    icon: LineChart,
    iconClass: 'text-purple-500'
  },
  { 
    name: 'Get Insights', 
    href: '/dashboard/insights', 
    icon: Brain,
    iconClass: 'text-orange-500'
  },
  { 
    name: 'Community', 
    href: '/dashboard/community', 
    icon: Users,
    iconClass: 'text-pink-500'
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Welcome back!</h1>
        <p className="text-gray-400">Here&apos;s an overview of your fitness journey</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {quickStats.map((stat) => (
          <div key={stat.name} className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-2">{stat.name}</h3>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span
                className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {stat.trend === 'up' ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <div className={action.iconClass}>
                <action.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium text-white">{action.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Today's Featured Workout */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Featured Workout</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{featuredWorkout.name}</h3>
              <Activity className="h-6 w-6 text-blue-500" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Duration</p>
                <p className="text-white font-medium">{featuredWorkout.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Intensity</p>
                <p className="text-white font-medium">{featuredWorkout.intensity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Calories</p>
                <p className="text-white font-medium">{featuredWorkout.calories}</p>
              </div>
            </div>
            <Link
              href="/dashboard/workouts"
              className="block w-full p-2 bg-blue-500 text-white text-center rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Start Workout
            </Link>
          </div>
        </div>

        {/* Today's Meals */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Today's Meals</h2>
          <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
            {todaysMeals.map((meal) => (
              <div key={meal.name} className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{meal.name}</h3>
                  <p className="text-sm text-gray-400">
                    {meal.calories} cal &bull; {meal.time}
                  </p>
                </div>
                {meal.completed ? (
                  <span className="text-green-400 text-sm">Logged</span>
                ) : (
                  <button className="text-sm text-blue-500 hover:text-blue-400">Log Meal</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
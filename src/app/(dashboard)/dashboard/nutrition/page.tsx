'use client';

import { Coffee, Pizza, Utensils, Plus } from 'lucide-react';

const meals = [
  { name: 'Breakfast', time: '8:00 AM', calories: 450, icon: Coffee },
  { name: 'Lunch', time: '12:30 PM', calories: 650, icon: Pizza },
  { name: 'Dinner', time: '7:00 PM', calories: 550, icon: Utensils },
];

const nutritionGoals = [
  { name: 'Calories', current: 1650, target: 2200, unit: 'kcal' },
  { name: 'Protein', current: 120, target: 150, unit: 'g' },
  { name: 'Carbs', current: 200, target: 250, unit: 'g' },
  { name: 'Fat', current: 45, target: 60, unit: 'g' },
];

const mealSuggestions = [
  {
    name: 'Greek Yogurt Bowl',
    type: 'Breakfast',
    calories: 320,
    protein: 20,
    time: '10 min',
  },
  {
    name: 'Chicken Quinoa Bowl',
    type: 'Lunch',
    calories: 450,
    protein: 35,
    time: '20 min',
  },
  {
    name: 'Salmon with Veggies',
    type: 'Dinner',
    calories: 520,
    protein: 40,
    time: '25 min',
  },
];

export default function NutritionPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Nutrition</h1>
        <p className="text-gray-400">Track your meals and monitor nutritional intake</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <button className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
          Log Meal
        </button>
        <button className="p-4 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors">
          Create Meal Plan
        </button>
        <button className="p-4 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors">
          View Food Database
        </button>
      </div>

      {/* Today's Meals */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-white">Today's Meals</h2>
          <button className="text-sm text-blue-500 hover:text-blue-400">View All</button>
        </div>
        <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
          {meals.map((meal) => {
            const Icon = meal.icon;
            return (
              <div
                key={meal.name}
                className="p-4 flex items-center justify-between hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-gray-700 rounded-lg mr-4">
                    <Icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{meal.name}</h3>
                    <p className="text-sm text-gray-400">
                      {meal.time} • {meal.calories} kcal
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-600 rounded-lg transition-colors">
                  <Plus className="h-5 w-5 text-blue-500" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nutrition Goals */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Nutrition Goals</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {nutritionGoals.map((goal) => (
            <div key={goal.name} className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">{goal.name}</span>
                <span className="text-gray-400">
                  {goal.current} / {goal.target} {goal.unit}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Suggestions */}
      <div>
        <h2 className="text-lg font-medium text-white mb-4">Meal Suggestions</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mealSuggestions.map((meal) => (
            <div
              key={meal.name}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">{meal.type}</span>
                <span className="text-sm text-gray-400">{meal.time}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{meal.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{meal.calories} kcal</span>
                <span>{meal.protein}g protein</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-300 mb-6">
        Here is your nutrition summary for today. Stay on track with your goals!
      </p>
    </div>
  );
} 
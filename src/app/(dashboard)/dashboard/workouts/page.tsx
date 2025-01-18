'use client';

import { useState } from 'react';
import { Dumbbell, Clock, Flame, ChevronRight, Plus, Filter, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const workoutCategories = [
  { name: 'Strength Training', count: 24, icon: Dumbbell },
  { name: 'HIIT', count: 18, icon: Flame },
  { name: 'Cardio', count: 15, icon: Clock },
];

const workouts = [
  {
    id: 1,
    name: 'Full Body Strength',
    category: 'Strength Training',
    duration: '45 min',
    difficulty: 'Intermediate',
    exercises: [
      { name: 'Barbell Squats', sets: 4, reps: '8-10', weight: '135 lbs' },
      { name: 'Bench Press', sets: 4, reps: '8-10', weight: '155 lbs' },
      { name: 'Deadlifts', sets: 3, reps: '8-10', weight: '185 lbs' },
      { name: 'Pull-ups', sets: 3, reps: '8-10', weight: 'Body weight' },
    ],
  },
  {
    id: 2,
    name: 'HIIT Cardio Blast',
    category: 'HIIT',
    duration: '30 min',
    difficulty: 'Advanced',
    exercises: [
      { name: 'Burpees', sets: 3, reps: '45 seconds', weight: 'Body weight' },
      { name: 'Mountain Climbers', sets: 3, reps: '45 seconds', weight: 'Body weight' },
      { name: 'Jump Squats', sets: 3, reps: '45 seconds', weight: 'Body weight' },
      { name: 'Push-ups', sets: 3, reps: '45 seconds', weight: 'Body weight' },
    ],
  },
  {
    id: 3,
    name: 'Core & Abs',
    category: 'Strength Training',
    duration: '25 min',
    difficulty: 'Beginner',
    exercises: [
      { name: 'Crunches', sets: 3, reps: '15-20', weight: 'Body weight' },
      { name: 'Plank', sets: 3, reps: '45 seconds', weight: 'Body weight' },
      { name: 'Russian Twists', sets: 3, reps: '20', weight: '10 lbs' },
      { name: 'Leg Raises', sets: 3, reps: '15', weight: 'Body weight' },
    ],
  },
];

export default function WorkoutsPage() {
  const router = useRouter();
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || workout.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleStartWorkout = (workoutId: number) => {
    router.push(`/dashboard/workouts/${workoutId}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Workouts</h1>
        <p className="text-gray-400">Track and manage your workout routines</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search workouts..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center hover:bg-gray-700"
          onClick={() => setSelectedCategory(null)}
        >
          <Filter className="h-5 w-5 mr-2" />
          {selectedCategory || 'All Categories'}
        </button>
      </div>

      {/* Workout Categories */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {workoutCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              className={`bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer ${
                selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-6 w-6 text-blue-500" />
                <span className="text-sm text-gray-400">{category.count} workouts</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            </button>
          );
        })}
      </div>

      {/* Workouts List */}
      <div className="space-y-4">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <div
              className="p-4 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => setSelectedWorkout(selectedWorkout === workout.id ? null : workout.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white">{workout.name}</h3>
                <span className="text-sm text-gray-400">{workout.duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-4">{workout.category}</span>
                <span>{workout.difficulty}</span>
              </div>
            </div>

            {/* Workout Details */}
            {selectedWorkout === workout.id && (
              <div className="border-t border-gray-700 p-4">
                <h4 className="text-sm font-medium text-gray-400 mb-4">Exercises</h4>
                <div className="space-y-4">
                  {workout.exercises.map((exercise, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{exercise.name}</p>
                        <p className="text-sm text-gray-400">
                          {exercise.sets} sets • {exercise.reps}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400">{exercise.weight}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="mt-6 w-full p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  onClick={() => handleStartWorkout(workout.id)}
                >
                  Start Workout
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Create Workout Button */}
      <button className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors">
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
} 
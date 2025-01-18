'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Timer, CheckCircle, ChevronLeft, Play, Pause, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';
import Image from 'next/image';

// This would typically come from an API/database
const workouts = [
  {
    id: 1,
    name: 'Full Body Strength',
    category: 'Strength Training',
    duration: '45 min',
    difficulty: 'Intermediate',
    exercises: [
      { 
        name: 'Barbell Squats', 
        sets: 4, 
        reps: '8-10', 
        weight: '135 lbs',
        image: 'https://images.unsplash.com/photo-1566241142559-4ef5bf4d1c3c?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Bench Press', 
        sets: 4, 
        reps: '8-10', 
        weight: '155 lbs',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Deadlifts', 
        sets: 3, 
        reps: '8-10', 
        weight: '185 lbs',
        image: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Pull-ups', 
        sets: 3, 
        reps: '8-10', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&auto=format&fit=crop'
      },
    ],
  },
  {
    id: 2,
    name: 'HIIT Cardio Blast',
    category: 'HIIT',
    duration: '30 min',
    difficulty: 'Advanced',
    exercises: [
      { 
        name: 'Burpees', 
        sets: 3, 
        reps: '45 seconds', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Mountain Climbers', 
        sets: 3, 
        reps: '45 seconds', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Jump Squats', 
        sets: 3, 
        reps: '45 seconds', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Push-ups', 
        sets: 3, 
        reps: '45 seconds', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&auto=format&fit=crop'
      },
    ],
  },
  {
    id: 3,
    name: 'Core & Abs',
    category: 'Strength Training',
    duration: '25 min',
    difficulty: 'Beginner',
    exercises: [
      { 
        name: 'Crunches', 
        sets: 3, 
        reps: '15-20', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1544216428-3d4ad849ae03?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Plank', 
        sets: 3, 
        reps: '45 seconds', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1566241142559-4ef5bf4d1c3c?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Russian Twists', 
        sets: 3, 
        reps: '20', 
        weight: '10 lbs',
        image: 'https://images.unsplash.com/photo-1544216428-3d4ad849ae03?w=800&auto=format&fit=crop'
      },
      { 
        name: 'Leg Raises', 
        sets: 3, 
        reps: '15', 
        weight: 'Body weight',
        image: 'https://images.unsplash.com/photo-1544216428-3d4ad849ae03?w=800&auto=format&fit=crop'
      },
    ],
  },
];

export default function WorkoutSession({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const workout = workouts.find((w) => w.id === parseInt(resolvedParams.id));
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  if (!workout) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Workout not found</p>
        <Link href="/dashboard/workouts" className="text-blue-500 hover:text-blue-400 mt-4 inline-block">
          Back to Workouts
        </Link>
      </div>
    );
  }

  const exercise = workout.exercises[currentExercise];
  const isLastExercise = currentExercise === workout.exercises.length - 1;
  const isLastSet = currentSet === exercise.sets;

  const handleNext = () => {
    if (isLastSet) {
      if (isLastExercise) {
        // Workout complete
        router.push('/dashboard/workouts');
      } else {
        setCurrentExercise(currentExercise + 1);
        setCurrentSet(1);
      }
    } else {
      setCurrentSet(currentSet + 1);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/workouts"
          className="text-gray-400 hover:text-white flex items-center mb-4"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Workouts
        </Link>
        <h1 className="text-2xl font-semibold text-white">{workout.name}</h1>
        <p className="text-gray-400">
          {workout.category} • {workout.difficulty}
        </p>
      </div>

      {/* Current Exercise */}
      <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
        {/* Exercise Image */}
        <div className="relative w-full h-64">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-medium text-white">{exercise.name}</h2>
              <p className="text-gray-400">
                Set {currentSet} of {exercise.sets}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">{exercise.weight}</p>
              <p className="text-gray-400">{exercise.reps}</p>
            </div>
          </div>

          {/* Timer (for timed exercises) */}
          {exercise.reps.includes('seconds') && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Time</span>
                <span className="text-white font-medium">{timeLeft}s</span>
              </div>
              <div className="flex space-x-4">
                <button
                  className="flex-1 p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="h-5 w-5 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      Start
                    </>
                  )}
                </button>
                <button
                  className="p-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  onClick={() => setTimeLeft(parseInt(exercise.reps))}
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Complete Set Button */}
          <button
            className="w-full p-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
            onClick={handleNext}
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            {isLastSet && isLastExercise ? 'Complete Workout' : 'Complete Set'}
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-400 mb-4">Workout Progress</h3>
        <div className="space-y-4">
          {workout.exercises.map((ex, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index === currentExercise ? 'text-white' : 'text-gray-400'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  index < currentExercise
                    ? 'bg-green-500'
                    : index === currentExercise
                    ? 'bg-blue-500'
                    : 'bg-gray-700'
                }`}
              >
                {index < currentExercise ? (
                  <CheckCircle className="h-4 w-4 text-white" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="flex items-center flex-1">
                <span>{ex.name}</span>
                <div className="relative w-12 h-12 ml-3">
                  <Image
                    src={ex.image}
                    alt={ex.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
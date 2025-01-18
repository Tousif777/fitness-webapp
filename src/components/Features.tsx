import { Activity, Brain, Users, Utensils } from 'lucide-react';

const features = [
  {
    name: 'Workout Tracker',
    description: 'Log and analyze your workouts with detailed metrics and progress tracking.',
    icon: Activity,
  },
  {
    name: 'Nutrition Planner',
    description: 'Get personalized meal plans and track your daily calorie intake with ease.',
    icon: Utensils,
  },
  {
    name: 'AI-Powered Insights',
    description: 'Receive intelligent recommendations based on your performance and goals.',
    icon: Brain,
  },
  {
    name: 'Community',
    description: 'Connect with like-minded fitness enthusiasts and share your journey.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Transform Your Fitness Journey</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Discover powerful features designed to help you achieve your fitness goals faster and smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className="relative group bg-gray-800 p-6 rounded-xl hover-glow transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-2 mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
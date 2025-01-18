'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Heart, Share2, Award, ChevronRight } from 'lucide-react';

const communityPosts = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: '👩',
      badge: 'Elite Trainer',
    },
    content: 'Just completed a 5k run in 22 minutes! New personal best! 🏃‍♀️',
    likes: 24,
    comments: 8,
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Mike Chen',
      avatar: '👨',
      badge: 'Fitness Enthusiast',
    },
    content: 'Here is my 12-week transformation! Hard work pays off 💪',
    likes: 156,
    comments: 32,
    time: '5 hours ago',
  },
  {
    id: 3,
    user: {
      name: 'Emma Wilson',
      avatar: '👱‍♀️',
      badge: 'Nutrition Expert',
    },
    content: 'Sharing my favorite post-workout smoothie recipe! Who wants it? 🥤',
    likes: 89,
    comments: 45,
    time: '8 hours ago',
  },
];

const topContributors = [
  { name: 'David Kim', points: 2850, avatar: '🧑' },
  { name: 'Lisa Chen', points: 2340, avatar: '👩' },
  { name: 'James Wilson', points: 2120, avatar: '👨' },
];

const upcomingEvents = [
  {
    name: 'Virtual 5K Challenge',
    date: 'This Weekend',
    participants: 234,
    type: 'Running',
  },
  {
    name: 'Nutrition Workshop',
    date: 'Next Tuesday',
    participants: 89,
    type: 'Education',
  },
  {
    name: 'Group HIIT Session',
    date: 'Next Thursday',
    participants: 156,
    type: 'Workout',
  },
];

export default function CommunityPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Community</h1>
        <p className="text-gray-400">Connect with fellow fitness enthusiasts</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <button className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
          Create Post
        </button>
        <button className="p-4 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors">
          Find Friends
        </button>
        <button className="p-4 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors">
          Join Challenge
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-white mb-4">Community Feed</h2>
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <div key={post.id} className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">{post.user.avatar}</div>
                    <div>
                      <h3 className="text-white font-medium">{post.user.name}</h3>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                        {post.user.badge}
                      </span>
                    </div>
                    <span className="ml-auto text-sm text-gray-400">{post.time}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{post.content}</p>
                  <div className="flex items-center space-x-6 text-gray-400">
                    <button className="flex items-center space-x-2 hover:text-blue-400">
                      <Heart className="h-5 w-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-blue-400">
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-blue-400">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Top Contributors */}
          <div>
            <h2 className="text-lg font-medium text-white mb-4">Top Contributors</h2>
            <div className="bg-gray-800 rounded-lg">
              {topContributors.map((contributor, index) => (
                <div
                  key={contributor.name}
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="text-2xl mr-3">{contributor.avatar}</div>
                  <div>
                    <h3 className="text-white font-medium">{contributor.name}</h3>
                    <p className="text-sm text-gray-400">{contributor.points} points</p>
                  </div>
                  {index === 0 && (
                    <Award className="ml-auto h-5 w-5 text-yellow-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-lg font-medium text-white mb-4">Upcoming Events</h2>
            <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
              {upcomingEvents.map((event) => (
                <div
                  key={event.name}
                  className="p-4 hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-medium">{event.name}</h3>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{event.date}</span>
                    <span className="text-gray-400">
                      {event.participants} participants
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
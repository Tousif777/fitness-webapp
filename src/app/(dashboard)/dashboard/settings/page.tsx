'use client';

import { Bell, Lock, User, Globe, Moon, Sun, LifeBuoy, LogOut } from 'lucide-react';

const settingsSections = [
  {
    title: 'Profile',
    icon: User,
    settings: [
      { name: 'Personal Information', description: 'Update your personal details and profile picture' },
      { name: 'Fitness Goals', description: 'Set and manage your fitness objectives' },
      { name: 'Measurement Units', description: 'Choose your preferred units of measurement' },
    ],
  },
  {
    title: 'Privacy & Security',
    icon: Lock,
    settings: [
      { name: 'Account Security', description: 'Manage your password and security settings' },
      { name: 'Privacy Settings', description: 'Control what others can see about you' },
      { name: 'Connected Apps', description: 'Manage third-party app connections' },
    ],
  },
  {
    title: 'Notifications',
    icon: Bell,
    settings: [
      { name: 'Push Notifications', description: 'Configure mobile and desktop notifications' },
      { name: 'Email Preferences', description: 'Manage email notification settings' },
      { name: 'Workout Reminders', description: 'Set up your workout reminder schedule' },
    ],
  },
];

const quickSettings = [
  { name: 'Dark Mode', icon: Moon, type: 'toggle', value: true },
  { name: 'Language', icon: Globe, type: 'select', value: 'English' },
];

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and settings</p>
      </div>

      {/* Quick Settings */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {quickSettings.map((setting) => {
          const Icon = setting.icon;
          return (
            <div
              key={setting.name}
              className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <Icon className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-white font-medium">{setting.name}</span>
              </div>
              {setting.type === 'toggle' ? (
                <button
                  className={`w-11 h-6 rounded-full p-1 transition-colors ${
                    setting.value ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      setting.value ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              ) : (
                <select className="bg-gray-700 text-white rounded px-2 py-1 text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              )}
            </div>
          );
        })}
      </div>

      {/* Settings Sections */}
      <div className="space-y-8">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title}>
              <div className="flex items-center mb-4">
                <Icon className="h-5 w-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-medium text-white">{section.title}</h2>
              </div>
              <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
                {section.settings.map((setting) => (
                  <div
                    key={setting.name}
                    className="p-4 hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <h3 className="text-white font-medium mb-1">{setting.name}</h3>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Support and Sign Out */}
      <div className="mt-12 space-y-4">
        <button className="w-full p-4 bg-gray-800 rounded-lg text-white font-medium hover:bg-gray-700 transition-colors flex items-center">
          <LifeBuoy className="h-5 w-5 mr-3" />
          Get Help & Support
        </button>
        <button className="w-full p-4 bg-red-500/10 text-red-500 rounded-lg font-medium hover:bg-red-500/20 transition-colors flex items-center">
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
} 
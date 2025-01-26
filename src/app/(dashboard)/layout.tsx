'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Dumbbell, Apple, LineChart, Users, Settings, Menu, X } from 'lucide-react';
import { ClientProvider } from '@/components/providers/client-provider';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Workouts', href: '/dashboard/workouts', icon: Dumbbell },
  { name: 'Nutrition', href: '/dashboard/nutrition', icon: Apple },
  { name: 'Progress', href: '/dashboard/progress', icon: LineChart },
  { name: 'Community', href: '/dashboard/community', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <ClientProvider>
      <div className="min-h-screen bg-gray-900">
        {/* Mobile sidebar */}
        <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-800">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
              <div className="text-xl font-semibold text-white">FitTrack Pro</div>
              <button
                type="button"
                className="text-gray-400 hover:text-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-2 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                      isActive
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:bg-gray-800">
          <div className="flex items-center px-4 py-4 border-b border-gray-700">
            <div className="text-xl font-semibold text-white">FitTrack Pro</div>
          </div>
          <nav className="px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                    isActive
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main content */}
        <div className="lg:pl-72">
          {/* Top bar */}
          <div className="sticky top-0 z-40 flex items-center gap-4 px-4 py-4 bg-gray-800/80 backdrop-blur-sm lg:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-xl font-semibold text-white">FitTrack Pro</div>
          </div>
          
          {/* Page content */}
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </ClientProvider>
  );
}

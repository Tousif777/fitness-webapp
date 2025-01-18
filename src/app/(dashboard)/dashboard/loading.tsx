export default function DashboardLoading() {
  return (
    <div className="animate-pulse">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg bg-gray-800 px-4 py-5"
          >
            <div className="h-8 w-24 bg-gray-700 rounded mb-2" />
            <div className="h-6 w-16 bg-gray-700 rounded" />
          </div>
        ))}
      </div>

      {/* Recent Workouts */}
      <div className="mt-8">
        <div className="h-8 w-32 bg-gray-800 rounded mb-4" />
        <div className="overflow-hidden rounded-lg bg-gray-800">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-5 w-32 bg-gray-700 rounded mb-2" />
                  <div className="h-4 w-24 bg-gray-700 rounded" />
                </div>
                <div className="h-4 w-16 bg-gray-700 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Workouts */}
        <div className="rounded-lg bg-gray-800 p-6">
          <div className="h-8 w-32 bg-gray-700 rounded mb-4" />
          <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div>
                  <div className="h-5 w-32 bg-gray-600 rounded mb-2" />
                  <div className="h-4 w-24 bg-gray-600 rounded" />
                </div>
                <div className="h-8 w-16 bg-gray-600 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Goals */}
        <div className="rounded-lg bg-gray-800 p-6">
          <div className="h-8 w-32 bg-gray-700 rounded mb-4" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <div className="h-4 w-16 bg-gray-700 rounded" />
                  <div className="h-4 w-24 bg-gray-700 rounded" />
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
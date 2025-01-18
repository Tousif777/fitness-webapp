'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Basic workout tracking',
      'Standard nutrition logging',
      'Community access',
      'Limited analytics',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    features: [
      'Advanced workout analytics',
      'Personalized meal plans',
      'Priority community support',
      'AI workout recommendations',
      'Progress photos storage',
    ],
    cta: 'Start Pro Plan',
    highlighted: true,
  },
  {
    name: 'Premium',
    monthlyPrice: 19.99,
    yearlyPrice: 199,
    features: [
      'Everything in Pro',
      '1-on-1 coaching sessions',
      'Custom workout programs',
      'Advanced AI insights',
      'Exclusive content access',
      'Premium support',
    ],
    cta: 'Start Premium Plan',
    highlighted: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Choose Your Plan</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Select the perfect plan for your fitness journey. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              type="button"
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-gray-700"
              onClick={() => setIsYearly(!isYearly)}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`ml-3 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-green-500">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-800 rounded-xl p-8 ${
                plan.highlighted
                  ? 'ring-2 ring-blue-500 transform scale-105 hover-glow'
                  : 'transform hover:scale-105 transition-transform'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
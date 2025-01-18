import React from 'react';

export function CategorySelection({
  onSelectCategory,
  selectedCategory,
  activeCategory,
}) {
  const categories = [
    'AI',
    'Startups',
    'Security',
    'Apps',
    'Health',
    'Fintech',
    'Work',
    'Gadgets',
    'Tech',
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4 dark:bg-gray-800 dark:border dark:border-gray-700 flex justify-center">
      <ul className="flex flex-wrap sm:flex-col gap-4">
        {/* "All" Button */}
        <li>
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-2 rounded transition duration-200 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700 ${
              selectedCategory === null
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            aria-pressed={selectedCategory === null}
            aria-label="Show all categories"
          >
            All
          </button>
        </li>
        {/* Category Buttons */}
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded transition duration-200 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700 ${
                selectedCategory === category
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
              }`}
              aria-pressed={selectedCategory === category}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

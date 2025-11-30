import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import { MenuItem } from '../types';

interface MenuProps {
  onNavigate: (page: string, itemId?: string) => void;
}

const Menu = ({ onNavigate }: MenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Our Menu
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Discover our carefully curated selection of dishes and drinks
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="text-amber-400 w-5 h-5" />
            <span className="text-gray-400 text-sm">Filter by:</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/50'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-amber-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transform hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => onNavigate('ProductDetail', item.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                {item.isPopular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Popular
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-amber-400 font-bold text-lg">£{item.price.toFixed(2)}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 bg-slate-700/50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.isVegetarian && (
                    <span className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                      Vegetarian
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No items found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

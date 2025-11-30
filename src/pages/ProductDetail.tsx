import { useState } from 'react';
import { ArrowLeft, Plus, Minus, ShoppingCart, Star } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  itemId: string;
  onNavigate: (page: string) => void;
}

const ProductDetail = ({ itemId, onNavigate }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const item = menuItems.find((i) => i.id === itemId);

  if (!item) {
    return (
      <div className="min-h-screen bg-slate-900 pt-24 flex items-center justify-center">
        <p className="text-white text-xl">Item not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(item, quantity);
    const notification = document.createElement('div');
    notification.className =
      'fixed top-24 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-in';
    notification.textContent = 'Added to cart!';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('Menu')}
          className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Menu</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <img
              src={item.image}
              alt={item.name}
              className="relative w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            {item.isPopular && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current" />
                <span>Popular</span>
              </div>
            )}
          </div>

          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <div>
              <span className="inline-block bg-amber-500/10 text-amber-400 px-4 py-1 rounded-full text-sm font-medium border border-amber-500/20 mb-4">
                {item.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{item.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
                <span className="text-gray-400 ml-2">(4.8 rating)</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
            </div>

            {item.ingredients && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">Ingredients</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {item.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-300 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 text-lg">Price</span>
                <span className="text-4xl font-bold text-amber-400">£{item.price.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 text-lg">Quantity</span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold text-white w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 pt-4 border-t border-slate-700">
                <span className="text-gray-400 text-lg">Total</span>
                <span className="text-3xl font-bold text-amber-400">
                  £{(item.price * quantity).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>

            {item.isVegetarian && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-green-400 font-medium">Vegetarian Option</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

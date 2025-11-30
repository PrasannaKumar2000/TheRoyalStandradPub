import { useState, FormEvent } from 'react';
import { Clock, User, Mail, Phone, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onNavigate: (page: string) => void;
}

const Checkout = ({ onNavigate }: CheckoutProps) => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderDetails = cartItems
      .map((item) => `${item.quantity}x ${item.name} - £${(item.price * item.quantity).toFixed(2)}`)
      .join('%0A');

    const message = `*New Order from The Royal Pint*%0A%0A*Customer Details:*%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APickup Time: ${formData.pickupTime}%0A%0A*Order Items:*%0A${orderDetails}%0A%0A*Total: £${(getTotalPrice() + 2.5).toFixed(2)}*`;

    const whatsappUrl = `https://wa.me/447700000000?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      clearCart();
      setIsSubmitting(false);
      onNavigate('Home');
    }, 1000);
  };

  if (cartItems.length === 0) {
    onNavigate('Cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in-up">
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Checkout
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <User className="w-6 h-6 text-amber-400" />
                  <span>Your Details</span>
                </h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                        placeholder="+44 7700 000000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pickupTime" className="block text-gray-300 mb-2 font-medium">
                      Pickup Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="time"
                        id="pickupTime"
                        required
                        value={formData.pickupTime}
                        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/50 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Book Now via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 sticky top-24 animate-fade-in-up animation-delay-200">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-300 text-sm">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                    <span>£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="border-t border-slate-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>£{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Service Fee</span>
                    <span>£2.50</span>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total</span>
                      <span className="text-amber-400">£{(getTotalPrice() + 2.5).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-amber-400 text-sm">
                  Your order will be sent via WhatsApp for confirmation. Please make sure your
                  WhatsApp is accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

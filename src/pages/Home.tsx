import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import FloatingElements from '../components/FloatingElements';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <div className="relative min-h-screen">
      <FloatingElements />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="text-white">The Royal Pint</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Where tradition meets exceptional taste in the heart of the UK
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button
              onClick={() => onNavigate('Menu')}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
            >
              <span>Explore Menu</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => onNavigate('Contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Book a Table
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transform hover:-translate-y-2 transition-all duration-500 border border-amber-500/20 hover:border-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Opening Hours</h3>
              <p className="text-gray-300">Mon-Thu: 12pm - 11pm</p>
              <p className="text-gray-300">Fri-Sat: 12pm - 1am</p>
              <p className="text-gray-300">Sunday: 12pm - 10pm</p>
            </div>

            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transform hover:-translate-y-2 transition-all duration-500 border border-amber-500/20 hover:border-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <p className="text-gray-300">123 High Street</p>
              <p className="text-gray-300">London, UK</p>
              <p className="text-gray-300">SW1A 1AA</p>
            </div>

            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transform hover:-translate-y-2 transition-all duration-500 border border-amber-500/20 hover:border-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Awards</h3>
              <p className="text-gray-300">Best Pub 2024</p>
              <p className="text-gray-300">Michelin Recommended</p>
              <p className="text-gray-300">5-Star TripAdvisor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Featured Dishes
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Handpicked favorites from our kitchen
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Fish & Chips',
                image:
                  'https://images.pexels.com/photos/8869801/pexels-photo-8869801.jpeg?auto=compress&cs=tinysrgb&w=800',
                desc: 'Classic British comfort food',
              },
              {
                name: 'BBQ Ribs',
                image:
                  'https://images.pexels.com/photos/16446771/pexels-photo-16446771.jpeg?auto=compress&cs=tinysrgb&w=800',
                desc: 'Tender and smoky perfection',
              },
              {
                name: 'Chicken Tikka',
                image:
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
                desc: 'Authentic Indian spices',
              },
            ].map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => onNavigate('Menu')}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{dish.name}</h3>
                  <p className="text-gray-300">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

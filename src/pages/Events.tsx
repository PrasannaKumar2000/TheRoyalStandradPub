import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Live Jazz Night',
      date: '2024-12-15',
      time: '8:00 PM - 11:00 PM',
      description: 'Enjoy smooth jazz performances by local artists in an intimate setting.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Free Entry',
    },
    {
      title: 'Quiz Night',
      date: '2024-12-20',
      time: '7:00 PM - 10:00 PM',
      description: 'Test your knowledge in our weekly quiz night. Great prizes to be won!',
      image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '£5 per person',
    },
    {
      title: 'New Year Celebration',
      date: '2024-12-31',
      time: '9:00 PM - 2:00 AM',
      description: 'Ring in the new year with us! Live music, special menu, and champagne toast.',
      image: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '£45 per person',
    },
    {
      title: 'Sunday Roast Special',
      date: 'Every Sunday',
      time: '12:00 PM - 6:00 PM',
      description: 'Traditional British Sunday roast with all the trimmings.',
      image: 'https://images.pexels.com/photos/8869807/pexels-photo-8869807.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From £14.99',
    },
    {
      title: 'Open Mic Night',
      date: 'Every Wednesday',
      time: '8:00 PM - 11:00 PM',
      description: 'Showcase your talent or enjoy performances by aspiring artists.',
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Free Entry',
    },
    {
      title: 'Craft Beer Tasting',
      date: '2025-01-10',
      time: '7:00 PM - 9:00 PM',
      description: 'Sample a selection of premium craft beers with expert guidance.',
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '£25 per person',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for exciting events, live entertainment, and special occasions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  {event.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>The Royal Pint</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>

                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                  <Ticket className="w-5 h-5" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-3xl p-12 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Host Your Event Here?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            We offer private event hosting with customizable packages. Contact us to discuss your requirements.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;

import { Utensils, Users, Music, Calendar, Gift, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Utensils className="w-12 h-12" />,
      title: 'Catering Services',
      description:
        'Professional catering for your events with our signature dishes. Perfect for weddings, corporate events, and special occasions.',
      features: ['Custom menus', 'Professional staff', 'Equipment included', 'Flexible packages'],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Private Events',
      description:
        'Book our venue for your private gatherings. We offer exclusive use of our space with customizable arrangements.',
      features: ['Exclusive venue hire', 'Customizable setup', 'Dedicated staff', 'Audio/visual equipment'],
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: 'Live Entertainment',
      description:
        'Enjoy live music every weekend. From acoustic sessions to full bands, we bring the best local talent.',
      features: ['Weekly live music', 'Open mic nights', 'Special performances', 'Themed events'],
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Table Reservations',
      description:
        'Reserve your table in advance and enjoy guaranteed seating. Perfect for special occasions and group gatherings.',
      features: ['Online booking', 'Priority seating', 'Group reservations', 'Special requests'],
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: 'Gift Vouchers',
      description:
        'Give the gift of great food and drinks. Our vouchers make perfect presents for any occasion.',
      features: ['Flexible amounts', 'Digital delivery', 'No expiry date', 'Easy redemption'],
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Loyalty Program',
      description:
        'Join our loyalty program and enjoy exclusive benefits, discounts, and special offers throughout the year.',
      features: ['Points on purchases', 'Birthday rewards', 'Exclusive offers', 'Early access'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the exceptional services we offer to make your experience unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-3xl p-12 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Our Services?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contact us today to learn more about our offerings and how we can serve you better
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

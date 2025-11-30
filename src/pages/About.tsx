import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the story behind The Royal Pint and what makes us special
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="The Royal Pint Interior"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h2 className="text-4xl font-bold text-white">Our Story</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Founded in 1985, The Royal Pint has been serving the heart of London for nearly four decades.
              What started as a small traditional pub has evolved into one of the city's most beloved dining destinations.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              We pride ourselves on combining traditional British hospitality with contemporary culinary excellence.
              Our chefs craft each dish with locally-sourced ingredients, while our bar features an extensive
              selection of craft beers, fine wines, and artisanal spirits.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Whether you're here for a casual pint, a hearty meal, or a special celebration, our team is
              dedicated to making your experience memorable. We've built our reputation on quality, authenticity,
              and genuine warmth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Award className="w-12 h-12" />, title: 'Award Winning', value: '50+ Awards' },
            { icon: <Heart className="w-12 h-12" />, title: 'Happy Customers', value: '100K+' },
            { icon: <Users className="w-12 h-12" />, title: 'Expert Staff', value: '30+ Team' },
            { icon: <Target className="w-12 h-12" />, title: 'Years of Service', value: '38 Years' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transform hover:-translate-y-2 transition-all duration-500 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 text-white mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-amber-400 mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description:
                  'We never compromise on the quality of our ingredients or the care we put into every dish and drink we serve.',
              },
              {
                title: 'Community Focus',
                description:
                  'We believe in supporting local suppliers, artists, and the community that has supported us for decades.',
              },
              {
                title: 'Sustainable Practices',
                description:
                  'We are committed to environmentally responsible practices, from sourcing to waste management.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20"
              >
                <h3 className="text-2xl font-bold text-amber-400 mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-3xl p-12 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team. If you share our values
            and love for great food and hospitality, we'd love to hear from you.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50">
            Careers at The Royal Pint
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

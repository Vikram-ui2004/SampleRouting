import React from 'react';
import { Link } from 'react-router-dom';
// Icons from lucide-react (used for modern, clean visuals)
import { BookOpen, User, CheckCircle, ArrowRight, GraduationCap, MapPin, Calendar, Zap } from 'lucide-react';

// --- Utility Components (Required by HomePage) ---

const Button = ({ children, primary = true, linkTo = '#', onClick = () => {} }) => (
  <Link 
    to={linkTo} 
    onClick={onClick}
    className={`
      px-6 py-3 font-semibold transition-all duration-300 rounded-full shadow-lg 
      ${primary 
        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl'
        : 'bg-white text-blue-600 border border-blue-600 hover:bg-gray-100'
      }
      transform hover:scale-[1.02] active:scale-[0.98]
    `}
  >
    {children}
  </Link>
);

const Card = ({ title, icon: Icon, children }) => (
  <div className="p-6 bg-white rounded-xl shadow-2xl border border-gray-100 transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-200/50">
    <div className="text-blue-600 mb-4">
      <Icon size={32} className="p-1 rounded-lg bg-blue-50" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{children}</p>
  </div>
);


// --- Home Page Component ---

const HomePage = () => {
  const Features = [
    { title: "Cutting-Edge Research", icon: BookOpen, description: "Explore groundbreaking studies and innovation hubs driving tomorrow's technology." },
    { title: "Global Faculty", icon: User, description: "Learn from internationally recognized professors and industry leaders." },
    { title: "Career Placement", icon: CheckCircle, description: "Achieve success with a 98% placement rate in top global companies." },
  ];

  const Events = [
    { name: "Annual Tech Symposium", date: "Oct 25, 2025", location: "Auditorium Hall 1", icon: Calendar },
    { name: "Alumni Meet & Greet", date: "Nov 10, 2025", location: "Campus Green", icon: User },
    { name: "Admissions Info Session", date: "Dec 1, 2025", location: "Online / Zoom", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      
      {/* 1. Hero Section: Bold Typography, Immersive Image */}
      <header className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white relative overflow-hidden py-24 md:py-36">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/800x600/ffffff/000000/png?text=IAMR')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4">
              Institute of Applied <span className="text-yellow-400">Modern Research</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
              Igniting potential. Engineering the future. IAMR is where innovation meets ambition.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button primary linkTo="/admissions">Apply Now</Button>
              <Button primary={false} linkTo="/academics" className="bg-transparent text-white border-white hover:bg-white/10">
                Explore Programs <ArrowRight size={20} className="inline ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        
        {/* 2. Key Statistics/Trust Signals Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50+", label: "Years of Excellence" },
                { value: "98%", label: "Placement Rate" },
                { value: "25K+", label: "Successful Alumni" },
                { value: "Top 5", label: "Research Ranking" },
              ].map((stat, index) => (
                <div key={index} className="border-r last:border-r-0 border-gray-200 p-2">
                  <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-sm uppercase text-gray-500 tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Features / Program Highlights (Bento Grid Inspired) */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Why <span className="text-blue-600">Choose IAMR</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Features.map((feature, index) => (
                <Card key={index} title={feature.title} icon={feature.icon}>
                  {feature.description}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Latest News & Events Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Campus Buzz & Events</h2>
              <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-2 md:mt-0 flex items-center">
                View All <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {Events.map((event, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 text-blue-600 mr-4">
                    <event.icon size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg font-semibold text-gray-900">{event.name}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600 bg-blue-100 px-3 py-1 rounded-full">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final CTA Banner */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <GraduationCap size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to start your future?</h2>
            <p className="text-xl mb-8 opacity-90">Admissions for the next academic year are now open.</p>
            <Button primary={false} linkTo="/admissions" className="bg-white text-blue-600 hover:bg-gray-100">
              Begin Application Today
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;